import { type Cluster } from '@bbachain/web3.js';

export default function getInferredClusterFromEndpoint(endpoint?: string): Cluster {
    if (!endpoint) {
        return 'mainnet';
    }
    if (/testnet/i.test(endpoint)) {
        return 'testnet';
    } else {
        return 'mainnet';
    }
}
