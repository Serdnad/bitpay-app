import {Effect, RootState} from '../../../index';
import {WalletActions} from '../../index';
import {getPriceHistory, startGetRates} from '../rates/rates';
import {startGetTokenOptions} from '../currencies/currencies';
import {startUpdateAllKeyAndWalletStatus} from '../status/status';
import {updatePortfolioBalance} from '../../wallet.actions';

export const startWalletStoreInit =
  (): Effect<Promise<void>> => async (dispatch, getState: () => RootState) => {
    try {
      const {WALLET, APP} = getState();
      const defaultAltCurrencyIsoCode = APP.defaultAltCurrency.isoCode;

      // both needed for startUpdateAllKeyAndWalletStatus
      await dispatch(startGetTokenOptions()); // get more recent 1inch tokens list
      await dispatch(startGetRates({init: true})); // populate rates and alternative currency list

      if (Object.keys(WALLET.keys).length) {
        dispatch(startUpdateAllKeyAndWalletStatus({}));
      }

      dispatch(getPriceHistory(defaultAltCurrencyIsoCode));
      dispatch(updatePortfolioBalance());
      dispatch(WalletActions.successWalletStoreInit());
    } catch (e) {
      console.error(e);
      dispatch(WalletActions.failedWalletStoreInit());
    }
  };
