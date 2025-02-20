import { Button } from '@mui/material';
import { useConnection, useWallet } from '@bbachain/wallet-adapter-react';
import type { TransactionSignature } from '@bbachain/web3.js';
import { BBA_DALTON_UNIT } from '@bbachain/web3.js';
import type { FC } from 'react';
import React, { useCallback } from 'react';
import { useNotify } from './notify';

export const RequestAirdrop: FC = () => {
    const { connection } = useConnection();
    const { publicKey } = useWallet();
    const notify = useNotify();

    const onClick = useCallback(async () => {
        let signature: TransactionSignature | undefined = undefined;
        try {
            if (!publicKey) throw new Error('Wallet not connected!');

            signature = await connection.requestAirdrop(publicKey, BBA_DALTON_UNIT);
            notify('info', 'Airdrop requested:', signature);

            await connection.confirmTransaction(signature, 'processed');
            notify('success', 'Airdrop successful!', signature);
        } catch (error: any) {
            notify('error', `Airdrop failed! ${error?.message}`, signature);
        }
    }, [publicKey, connection, notify]);

    return (
        <Button variant="contained" color="secondary" onClick={onClick} disabled={!publicKey}>
            Request Airdrop
        </Button>
    );
};
