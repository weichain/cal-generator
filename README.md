# Chain Abstraction Generator <img align="right" src="https://raw.githubusercontent.com/liquality/chainabstractionlayer/master/liquality-logo.png" height="80px" />

Used to generate all packages required to add new chain into [Chain Abstraction Layer](https://github.com/liquality/chainabstractionlayer)

## Installation
To install `calgen` run one of the above commands

- npm
```bash
npm install -D calgen
```

- yarn 
```bash
yarn add -D calgen
```

## Usage

`npx calgen -n <network> -c <cal version> -o <output directory>`

When you're inside the chainabstraction layer project, you can additionally run
```bash
npm run bootstrap
npm run prettier
```

to install all the dependencies of the newly generated packages and apply prettier.

## Example

`npx calgen -n Solana -c 1.1.8 -o ./packages/`




