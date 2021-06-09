import Chalk from "chalk";
import { Options } from "./types";

import Network from "../templates/network";
import RpcProvider from "../templates/rpc-provider";
import WalletProvider from "../templates/wallet-provider";
import SwapProvider from "../templates/swap-provider";
import SwapFindProvider from "../templates/swap-find-provider";
import TsConfig from "../templates/tsconfigJson";
import { ensureDir, writeFile } from "fs-extra";

export default async (options: Options) => {
  if (!options.network) {
    console.log(Chalk.red("Please specify the network, e.g. '-n Solana'"));
    return;
  }

  if (!options.cal) {
    console.log(
      Chalk.red(
        "Please specify the chainabstractionlayer version, e.g. '-c 1.13'"
      )
    );
    return;
  }

  if (!options.output) {
    console.log(
      Chalk.red("Please specify the output folder, e.g. '-o ./packages'")
    );
    return;
  }

  console.log(Chalk.blue("Start generating..."));

  const tsConfig = TsConfig();
  const packages = [
    Network(options.network, options.cal),
    RpcProvider(options.network, options.cal),
    WalletProvider(options.network, options.cal),
    SwapProvider(options.network, options.cal),
    SwapFindProvider(options.network, options.cal),
  ];

  for (const p of packages) {
    try {
      const output = `${options.output}/${p.folder}`;
      await ensureDir(`${output}/lib/`);

      await writeFile(`${output}/lib/${p.fileName}`, p.source);
      await writeFile(`${output}/tsconfig.json`, tsConfig);
      await writeFile(`${output}/package.json`, p.pkg);

      if (p.index) {
        await writeFile(`${output}/lib/index.ts`, p.index);
      }
    } catch (err) {
      console.log(err);
    }
  }

  console.log(
    Chalk.green(
      `Packages for ${options.network} generated in ${options.output}`
    )
  );
};
