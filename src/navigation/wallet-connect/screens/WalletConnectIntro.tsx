import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Button from '../../../components/button/Button';
import haptic from '../../../components/haptic-feedback/haptic';
import {WalletRowProps} from '../../../components/list/WalletRow';
import {Link, Paragraph} from '../../../components/styled/Text';
import {RootState} from '../../../store';
import {buildUIFormattedWallet} from '../../wallet/screens/KeyOverview';
import {
  ScrollView,
  WalletConnectContainer,
} from '../styled/WalletConnectContainers';
import {openUrlWithInAppBrowser} from '../../../store/app/app.effects';
import WalletSelector from '../components/WalletSelector';

export type WalletConnectIntroParamList = {
  uri?: string;
};

const LinkContainer = styled.View`
  padding-top: 5px;
  padding-bottom: 57px;
`;

const WalletConnectIntro = () => {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<{params: WalletConnectIntroParamList}>>();
  const {uri} = route.params || {};
  const [walletSelectorModalVisible, setWalletSelectorModalVisible] =
    useState(false);
  const showWalletSelector = () => setWalletSelectorModalVisible(true);
  const hideWalletSelector = () => setWalletSelectorModalVisible(false);

  const allKeys = useSelector(({WALLET}: RootState) => WALLET.keys);
  let allEthWallets: WalletRowProps[] = [];
  Object.entries(allKeys).map(([_, value]) => {
    if (!value.backupComplete) {
      return;
    }

    const ethWallets = value.wallets.filter(
      wallet => wallet.currencyAbbreviation === 'eth',
    );
    const UIFormattedEthWallets = ethWallets.map(wallet =>
      buildUIFormattedWallet(wallet),
    );
    allEthWallets = [...allEthWallets, ...UIFormattedEthWallets];
  });

  return (
    <WalletConnectContainer>
      <ScrollView>
        <Paragraph>
          WalletConnect is an open source protocol for connecting decentralized
          applications to mobile wallets with QR code scanning or deep linking.
        </Paragraph>
        <LinkContainer>
          <TouchableOpacity
            onPress={() => {
              haptic('impactLight');
              dispatch(openUrlWithInAppBrowser('https://walletconnect.org/'));
            }}>
            <Link>Learn More</Link>
          </TouchableOpacity>
        </LinkContainer>
        <Button buttonStyle={'primary'} onPress={showWalletSelector}>
          Connect
        </Button>
        <WalletSelector
          isVisible={walletSelectorModalVisible}
          dappUri={uri || ''}
          onBackdropPress={hideWalletSelector}
        />
      </ScrollView>
    </WalletConnectContainer>
  );
};

export default WalletConnectIntro;
