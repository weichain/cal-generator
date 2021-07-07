import ts from "typescript";
import PackageJson from "./packageJson";
import { NetworkTemplate } from "./types";
import { firstLetterToLowerCase, firstLetterToUpperCase } from "../utils";

const source = (chain: string) => {
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
    omitTrailingSemicolon: true,
  });

  const file = ts.factory.updateSourceFile(
    ts.createSourceFile("temporary.ts", "", ts.ScriptTarget.Latest),
    [
      ts.factory.createImportDeclaration(
        undefined,
        undefined,
        ts.factory.createImportClause(
          false,
          undefined,
          ts.factory.createNamedImports([
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("Network")
            ),
          ])
        ),
        ts.factory.createStringLiteral("@liquality/types")
      ),

      ts.factory.createInterfaceDeclaration(
        undefined,
        [ts.factory.createModifier(ts.SyntaxKind.ExportKeyword)],
        ts.factory.createIdentifier(`${chain}Network`),
        undefined,
        [
          ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
            ts.factory.createExpressionWithTypeArguments(
              ts.factory.createIdentifier("Network"),
              undefined
            ),
          ]),
        ],
        []
      ),
    ]
  );

  return printer.printFile(file);
};

const dependencies = (version: string) => {
  return [{ "@liquality/types": version }];
};

export default (chain: string, version: string): NetworkTemplate => {
  return {
    source: source(firstLetterToUpperCase(chain)),
    pkg: PackageJson(
      `@liquality/${firstLetterToLowerCase(chain)}-networks`,
      version,
      dependencies(version),
      `Networks specific settings for ${firstLetterToUpperCase(chain)}`
    ),
    folder: `${firstLetterToLowerCase(chain)}-networks`,
    fileName: `index.ts`,
  };
};
