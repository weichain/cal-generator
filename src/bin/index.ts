#!/usr/bin/env node
import { Command } from "commander";
import { execute } from "../actions";

const program = new Command();
program.version("0.0.1");

program.option("-o --output [directory]", "output directory");
program
  .option("-n --network [network]", "name of the chain/network")
  .option("-c --cal [cal]", "chainabstractionlayer version")
  .action((args) => {
    execute(args);
  });

program.parse(process.argv);
