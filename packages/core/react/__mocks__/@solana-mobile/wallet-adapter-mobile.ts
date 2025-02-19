import { type WalletName } from '@bbachain/wallet-adapter-base';
import { MockWalletAdapter } from '../../src/__mocks__/MockWalletAdapter.js';

export const BBAChainMobileWalletAdapterWalletName = 'BBAChain Mobile Wallet Adapter Name For Tests';
export const createDefaultAddressSelector = jest.fn();
export const createDefaultAuthorizationResultCache = jest.fn();
export const createDefaultWalletNotFoundHandler = jest.fn();

class MockBBAChainMobileWalletAdapter extends MockWalletAdapter {
    name = BBAChainMobileWalletAdapterWalletName as WalletName<string>;
    icon = 'sms.png';
    url = 'https://wallet.bbachain.com';
    publicKey = null;
}

export const BBAChainMobileWalletAdapter = jest.fn().mockImplementation(
    (...args) =>
        new MockBBAChainMobileWalletAdapter(
            // @ts-ignore
            ...args
        )
);
