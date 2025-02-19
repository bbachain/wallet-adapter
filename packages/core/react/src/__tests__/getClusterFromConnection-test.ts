import getInferredClusterFromEndpoint from '../getInferredClusterFromEndpoint.js';

describe('getInferredClusterFromEndpoint()', () => {
    describe('when the endpoint is `undefined`', () => {
        const endpoint = undefined;
        it('creates a new mobile wallet adapter with `mainnet` as the cluster', () => {
            expect(getInferredClusterFromEndpoint(endpoint)).toBe('mainnet');
        });
    });
    describe('when the endpoint is the empty string', () => {
        const endpoint = '';
        it('creates a new mobile wallet adapter with `mainnet` as the cluster', () => {
            expect(getInferredClusterFromEndpoint(endpoint)).toBe('mainnet');
        });
    });
    describe("when the endpoint contains the word 'testnet'", () => {
        const endpoint = 'https://foo-testnet.com';
        it('creates a new mobile wallet adapter with `testnet` as the cluster', () => {
            expect(getInferredClusterFromEndpoint(endpoint)).toBe('testnet');
        });
    });
    describe("when the endpoint contains the word 'mainnet'", () => {
        const endpoint = 'https://foo-mainnet.com';
        it('creates a new mobile wallet adapter with `mainnet` as the cluster', () => {
            expect(getInferredClusterFromEndpoint(endpoint)).toBe('mainnet');
        });
    });
});
