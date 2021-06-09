import ts from "typescript";
import IndexTs from ".";
import { NetworkTemplate } from "./types";
import PackageJson from "./packageJson";
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
              ts.factory.createIdentifier("SwapParams")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("SwapProvider")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("Transaction")
            ),
          ])
        ),
        ts.factory.createStringLiteral("@liquality/types")
      ),

      ts.factory.createImportDeclaration(
        undefined,
        undefined,
        ts.factory.createImportClause(
          false,
          undefined,
          ts.factory.createNamedImports([
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("Provider")
            ),
          ])
        ),
        ts.factory.createStringLiteral("@liquality/provider")
      ),

      ts.factory.createClassDeclaration(
        undefined,
        [
          ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
          ts.factory.createModifier(ts.SyntaxKind.DefaultKeyword),
        ],
        ts.factory.createIdentifier(`${chain}SwapFindProvider`),
        undefined,
        [
          ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
            ts.factory.createExpressionWithTypeArguments(
              ts.factory.createIdentifier("Provider"),
              undefined
            ),
          ]),
          ts.factory.createHeritageClause(
            ts.SyntaxKind.FirstFutureReservedWord,
            [
              ts.factory.createExpressionWithTypeArguments(
                ts.factory.createIdentifier("Partial"),
                [
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier("SwapProvider"),
                    undefined
                  ),
                ]
              ),
            ]
          ),
        ],

        [
          ts.factory.createMethodDeclaration(
            undefined,
            undefined,
            undefined,
            ts.factory.createIdentifier("findInitiateSwapTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("swapParams"),
                undefined,
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("SwapParams"),
                  undefined
                ),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("blockNumber"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("Transaction"),
                  [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)]
                ),
              ]
            ),
            ts.factory.createBlock(
              [
                ts.factory.createThrowStatement(
                  ts.factory.createNewExpression(
                    ts.factory.createIdentifier("Error"),
                    undefined,
                    [ts.factory.createStringLiteral("Method not implemented.")]
                  )
                ),
              ],
              true
            )
          ),

          ts.factory.createMethodDeclaration(
            undefined,
            undefined,
            undefined,
            ts.factory.createIdentifier("findClaimSwapTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("swapParams"),
                undefined,
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("SwapParams"),
                  undefined
                ),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("initiationTxHash"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("blockNumber"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("Transaction"),
                  [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)]
                ),
              ]
            ),
            ts.factory.createBlock(
              [
                ts.factory.createThrowStatement(
                  ts.factory.createNewExpression(
                    ts.factory.createIdentifier("Error"),
                    undefined,
                    [ts.factory.createStringLiteral("Method not implemented.")]
                  )
                ),
              ],
              true
            )
          ),

          ts.factory.createMethodDeclaration(
            undefined,
            undefined,
            undefined,
            ts.factory.createIdentifier("findRefundSwapTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("swapParams"),
                undefined,
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("SwapParams"),
                  undefined
                ),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("initiationTxHash"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("blockNumber"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("Transaction"),
                  [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)]
                ),
              ]
            ),
            ts.factory.createBlock(
              [
                ts.factory.createThrowStatement(
                  ts.factory.createNewExpression(
                    ts.factory.createIdentifier("Error"),
                    undefined,
                    [ts.factory.createStringLiteral("Method not implemented.")]
                  )
                ),
              ],
              true
            )
          ),

          ts.factory.createMethodDeclaration(
            undefined,
            undefined,
            undefined,
            ts.factory.createIdentifier("findFundSwapTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("swapParams"),
                undefined,
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("SwapParams"),
                  undefined
                ),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("initiationTxHash"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("blockNumber"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("Transaction"),
                  [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)]
                ),
              ]
            ),
            ts.factory.createBlock(
              [
                ts.factory.createThrowStatement(
                  ts.factory.createNewExpression(
                    ts.factory.createIdentifier("Error"),
                    undefined,
                    [ts.factory.createStringLiteral("Method not implemented.")]
                  )
                ),
              ],
              true
            )
          ),
        ]
      ),
    ]
  );

  return printer.printFile(file);
};

const dependencies = (version: string) => {
  return [{ "@liquality/provider": version }, { "@liquality/types": version }];
};

export default (chain: string, version: string): NetworkTemplate => {
  return {
    source: source(firstLetterToUpperCase(chain)),
    pkg: PackageJson(
      `@liquality/${firstLetterToLowerCase(chain)}-swap-find-provider`,
      version,
      dependencies(version),
      `Swap Find Provider implementation for ${firstLetterToUpperCase(chain)}`
    ),
    index: IndexTs(`${firstLetterToUpperCase(chain)}SwapFindProvider`),
    folder: `${firstLetterToLowerCase(chain)}-swap-find-provider`,
    fileName: `${firstLetterToUpperCase(chain)}SwapFindProvider.ts`,
  };
};
