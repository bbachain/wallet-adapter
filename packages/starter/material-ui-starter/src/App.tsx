import type { Adapter, WalletError } from '@bbachain/wallet-adapter-base';
import { WalletAdapterNetwork } from '@bbachain/wallet-adapter-base';
import { WalletDialogProvider, WalletMultiButton } from '@bbachain/wallet-adapter-material-ui';
import { ConnectionProvider, WalletProvider } from '@bbachain/wallet-adapter-react';
import { UnsafeBurnerWalletAdapter } from '@bbachain/wallet-adapter-wallets';
import { clusterApiUrl } from '@bbachain/web3.js';
import { useSnackbar } from 'notistack';
import type { FC, ReactNode } from 'react';
import React, { useCallback, useMemo } from 'react';
import { Theme } from './Theme';

export const App: FC = () => {
    return (
        <Theme>
            <Context>
                <Content />
            </Context>
        </Theme>
    );
};

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'testnet', or 'mainnet'.
    const network = WalletAdapterNetwork.Testnet;

    // You can also provide a custom RPC endpoint.
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

    const { enqueueSnackbar } = useSnackbar();
    const onError = useCallback(
        (error: WalletError, adapter?: Adapter) => {
            enqueueSnackbar(error.message ? `${error.name}: ${error.message}` : error.name, { variant: 'error' });
            console.error(error, adapter);
        },
        [enqueueSnackbar]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect>
                <WalletDialogProvider>{children}</WalletDialogProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    return <WalletMultiButton />;
};
