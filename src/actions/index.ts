import { Options } from "./types";
import Generate from "./generate";

export const execute = (options: Options) => {
  Generate(options);
};
