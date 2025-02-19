import { WalletAdapterNetwork } from '@bbachain/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@bbachain/wallet-adapter-react';
import { WalletModalProvider } from '@bbachain/wallet-adapter-react-ui';
import { UnsafeBurnerWalletAdapter } from '@bbachain/wallet-adapter-wallets';
import { clusterApiUrl } from '@bbachain/web3.js';
import type { AppProps } from 'next/app';
import type { FC } from 'react';
import React, { useMemo } from 'react';

// Use require instead of import since order matters
require('@bbachain/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
    // Can be set to 'testnet', or 'mainnet'
    const network = WalletAdapterNetwork.Testnet;

    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Wallets that implement either of these standards will be available automatically.
             *
             *   - BBAChain Wallet Standard
             *     (https://github.com/bbachain/wallet-standard)
             *
             * If you wish to support a wallet that supports neither of those standards,
             * instantiate its legacy wallet adapter here. Common legacy adapters can be found
             * in the npm package `@bbachain/wallet-adapter-wallets`.
             */
            new UnsafeBurnerWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Component {...pageProps} />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
