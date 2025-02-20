# Wallet Adapter Packages

This library is organized into small packages with few dependencies.

To add it to your app, you'll need core packages, some wallets, and UI components for your chosen framework.

### Core

These packages are what most projects can use to support wallets on BBAChain.

| package                                                                             | description                                           | npm                                                                                          |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [base](https://github.com/bbachain/wallet-adapter/tree/master/packages/core/base)   | Adapter interfaces, error types, and common utilities | [`@bbachain/wallet-adapter-base`](https://npmjs.com/package/@bbachain/wallet-adapter-base)   |
| [react](https://github.com/bbachain/wallet-adapter/tree/master/packages/core/react) | Contexts and hooks for React apps                     | [`@bbachain/wallet-adapter-react`](https://npmjs.com/package/@bbachain/wallet-adapter-react) |

### Community

Several core packages are maintained by the community to support additional frontend frameworks.

-   [Vue](https://github.com/lorisleiva/solana-wallets-vue)
-   [Angular](https://github.com/heavy-duty/platform/tree/master/libs/wallet-adapter)
-   [Svelte](https://github.com/aztemi/svelte-on-solana-wallet-adapter)
-   [TypeScript](https://github.com/ronanyeah/solana-connect)
-   [Ant Design Web3](https://web3.ant.design/components/solana)

### UI Components

These packages provide components for common UI frameworks.

| package                                                                                                   | description                                                        | npm                                                                                                        |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [react-ui](https://github.com/bbachain/wallet-adapter/tree/master/packages/ui/react-ui)                   | Components for React (no UI framework, just CSS)                   | [`@bbachain/wallet-adapter-react-ui`](https://npmjs.com/package/@bbachain/wallet-adapter-react-ui)         |
| [material-ui](https://github.com/bbachain/wallet-adapter/tree/master/packages/ui/material-ui)             | Components for [Material UI](https://material-ui.com) with React   | [`@bbachain/wallet-adapter-material-ui`](https://npmjs.com/package/@bbachain/wallet-adapter-material-ui)   |
| [ant-design](https://github.com/bbachain/wallet-adapter/tree/master/packages/ui/ant-design)               | Components for [Ant Design](https://ant.design) with React         | [`@bbachain/wallet-adapter-ant-design`](https://npmjs.com/package/@bbachain/wallet-adapter-ant-design)     |
| [angular-material-ui](https://github.com/heavy-duty/platform/tree/master/libs/wallet-adapter/ui/material) | Components for [Angular Material UI](https://material.angular.io/) | [`@heavy-duty/wallet-adapter-material`](https://www.npmjs.com/package/@heavy-duty/wallet-adapter-material) |

### Wallets

These packages provide adapters for each wallet.
You can use the [wallets](https://github.com/bbachain/wallet-adapter/tree/master/packages/wallets/wallets) package, or add the individual wallet packages you want.

| package                                                                                        | description                                           | npm                                                                                                  |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [wallets](https://github.com/bbachain/wallet-adapter/tree/master/packages/wallets/wallets)     | Includes all the wallets (with tree shaking)          | [`@bbachain/wallet-adapter-wallets`](https://npmjs.com/package/@bbachain/wallet-adapter-wallets)     |
| [bbawallet](https://github.com/bbachain/wallet-adapter/tree/master/packages/wallets/bbawallet) | Adapter for [BBA Wallet](https://wallet.bbachain.com) | [`@bbachain/wallet-adapter-bbawallet`](https://npmjs.com/package/@bbachain/wallet-adapter-bbawallet) |

### Starter Projects

These packages provide projects that you can use to start building a app with built-in wallet support.
Alternatively, check out [solana-dapp-next](https://github.com/lisenmayben/solana-dapp-next) for a more complete framework.

| package                                                                                                                         | description                                                             | npm                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [example](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/example)                                   | Demo of UI components and wallets                                       | [`@solana/wallet-adapter-example`](https://npmjs.com/package/@solana/wallet-adapter-example)                                   |
| [create-react-app-starter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/create-react-app-starter) | [Create React App](https://create-react-app.dev) project using React UI | [`@solana/wallet-adapter-create-react-app-starter`](https://npmjs.com/package/@solana/wallet-adapter-create-react-app-starter) |
| [material-ui-starter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/material-ui-starter)           | [Parcel](https://parceljs.org) project using Material UI                | [`@solana/wallet-adapter-material-ui-starter`](https://npmjs.com/package/@solana/wallet-adapter-material-ui-starter)           |
| [react-ui-starter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/react-ui-starter)                 | [Parcel](https://parceljs.org) project using React UI                   | [`@solana/wallet-adapter-react-ui-starter`](https://npmjs.com/package/@solana/wallet-adapter-react-ui-starter)                 |
| [nextjs-starter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/starter/nextjs-starter)                     | [Next.js](https://nextjs.org) project using React UI                    | [`@solana/wallet-adapter-nextjs-starter`](https://npmjs.com/package/@solana/wallet-adapter-nextjs-starter)                     |
