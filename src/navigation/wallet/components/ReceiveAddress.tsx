import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-community/clipboard';
import {useDispatch} from 'react-redux';
import QRCode from 'react-native-qrcode-svg';
import styled from 'styled-components/native';

import {useLogger} from '../../../utils/hooks';
import {showBottomNotificationModal} from '../../../store/app/app.actions';

import {BaseText, H4, Paragraph} from '../../../components/styled/Text';
import BottomPopupModal from '../../../components/modal/base/bottom-popup/BottomPopupModal';
import {BottomNotificationConfig} from '../../../components/modal/bottom-notification/BottomNotification';
import {ModalContainer} from '../../../components/styled/Containers';
import haptic from '../../../components/haptic-feedback/haptic';

import {BWCErrorMessage} from '../../../constants/BWCError';
import {CustomErrorMessage} from './ErrorMessages';

import {Action, LightBlack, NeutralSlate, White} from '../../../styles/colors';
import CopySvg from '../../../../assets/img/copy.svg';
import CopiedSvg from '../../../../assets/img/copied-success.svg';
import GhostSvg from '../../../../assets/img/ghost-straight-face.svg';
import {sleep} from '../../../utils/helper-methods';
import {Wallet} from '../../../store/wallet/wallet.models';
import {
  CreateWalletAddress,
  GetLegacyBchAddressFormat,
} from '../../../store/wallet/effects/send/address';
import ReceiveAddressHeader, {
  HeaderContextHandler,
} from './ReceiveAddressHeader';

export interface ReceiveAddressConfig {
  keyId: string;
  id: string;
}

export const BchAddressTypes = ['Cash Address', 'Legacy'];

const CopyToClipboard = styled.TouchableOpacity`
  border: 1px solid #9ba3ae;
  border-radius: 4px;
  padding: 0 10px;
  min-height: 55px;
  align-items: center;
  flex-direction: row;
`;

const AddressText = styled(BaseText)`
  font-size: 16px;
  color: ${({theme: {dark}}) => (dark ? NeutralSlate : '#6F7782')};
  padding: 0 20px 0 10px;
`;

const CopyImgContainer = styled.View`
  border-right-color: ${({theme: {dark}}) => (dark ? '#46494E' : '#ECEFFD')};
  border-right-width: 1px;
  padding-right: 10px;
  height: 25px;
  justify-content: center;
`;

const QRCodeContainer = styled.View`
  align-items: center;
  margin: 15px;
`;

const QRCodeBackground = styled.View`
  background-color: ${White};
  width: 225px;
  height: 225px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

const LoadingContainer = styled.View`
  min-height: 300px;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled(H4)`
  color: ${({theme}) => theme.colors.text};
`;

const ReceiveAddressContainer = styled(ModalContainer)`
  background-color: ${({theme: {dark}}) => (dark ? LightBlack : White)};
`;

const CloseButton = styled.TouchableOpacity`
  margin: auto;
`;

const CloseButtonText = styled(Paragraph)`
  color: ${({theme: {dark}}) => (dark ? White : Action)};
`;

interface Props {
  isVisible: boolean;
  closeModal: () => void;
  wallet: Wallet;
}

const ReceiveAddress = ({isVisible, closeModal, wallet}: Props) => {
  const dispatch = useDispatch();
  const logger = useLogger();
  const [copied, setCopied] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [bchAddressType, setBchAddressType] = useState('Cash Address');
  const [bchAddress, setBchAddress] = useState('');

  const copyToClipboard = () => {
    haptic('impactLight');
    if (!copied) {
      Clipboard.setString(address);
      setCopied(true);
    }
  };

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onBchAddressTypeChange = (type: string) => {
    haptic('impactLight');
    setBchAddressType(type);
    if (type === 'Legacy') {
      setAddress(GetLegacyBchAddressFormat(address));
    } else {
      setAddress(bchAddress);
    }
  };

  const showErrorMessage = async (msg: BottomNotificationConfig) => {
    closeModal();
    await sleep(500);
    dispatch(showBottomNotificationModal(msg));
  };

  const createAddress = async () => {
    let {coin} = wallet.credentials;
    const prefix = 'Could not create address';

    try {
      const walletAddress = await CreateWalletAddress(wallet);
      setLoading(false);
      setAddress(walletAddress);
      if (coin === 'bch') {
        setBchAddress(walletAddress);
        setBchAddressType('Cash Address');
      }
    } catch (createAddressErr: any) {
      switch (createAddressErr?.type) {
        case 'INVALID_ADDRESS_GENERATED':
          logger.error(createAddressErr.error);

          if (retryCount < 3) {
            setRetryCount(retryCount + 1);
            createAddress();
            return;
          } else {
            showErrorMessage(
              CustomErrorMessage(BWCErrorMessage(createAddressErr.error)),
            );
          }
          break;
        case 'MAIN_ADDRESS_GAP_REACHED':
          showErrorMessage(
            CustomErrorMessage(BWCErrorMessage(createAddressErr.error)),
          );
          break;
        default:
          showErrorMessage(
            CustomErrorMessage(BWCErrorMessage(createAddressErr.error, prefix)),
          );
          break;
      }
      logger.warn(BWCErrorMessage(createAddressErr.error, 'Receive'));
    }
  };

  const init = () => {
    if (wallet?.isComplete()) {
      logger.info(`Creating address for wallet: ${wallet.id}`);
      createAddress();
    } else {
      // TODO
    }
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  let headerContextHandlers: HeaderContextHandler | null = null;

  if (wallet?.currencyAbbreviation === 'bch') {
    headerContextHandlers = {
      currency: wallet?.currencyAbbreviation,
      disabled: !address,
      activeItem: bchAddressType,
      onPressChange: (item: string) => onBchAddressTypeChange(item),
      items: BchAddressTypes,
    };
  }

  return (
    <BottomPopupModal isVisible={isVisible} onBackdropPress={closeModal}>
      <ReceiveAddressContainer>
        <ReceiveAddressHeader
          onPressRefresh={createAddress}
          contextHandlers={headerContextHandlers}
        />

        {address ? (
          <>
            <CopyToClipboard onPress={copyToClipboard} activeOpacity={0.7}>
              <CopyImgContainer>
                {!copied ? <CopySvg width={17} /> : <CopiedSvg width={17} />}
              </CopyImgContainer>
              <AddressText numberOfLines={1} ellipsizeMode={'tail'}>
                {address}
              </AddressText>
            </CopyToClipboard>

            <QRCodeContainer>
              <QRCodeBackground>
                <QRCode value={address} size={200} />
              </QRCodeBackground>
            </QRCodeContainer>
          </>
        ) : loading ? (
          <LoadingContainer>
            <LoadingText>Generating Address...</LoadingText>
          </LoadingContainer>
        ) : (
          <LoadingContainer>
            <GhostSvg />
          </LoadingContainer>
        )}

        <CloseButton onPress={closeModal}>
          <CloseButtonText>CLOSE</CloseButtonText>
        </CloseButton>
      </ReceiveAddressContainer>
    </BottomPopupModal>
  );
};

export default ReceiveAddress;
