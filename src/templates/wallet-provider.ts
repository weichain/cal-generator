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
              ts.factory.createIdentifier("WalletProvider")
            ),
          ])
        ),
        ts.factory.createStringLiteral("@liquality/wallet-provider")
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
              ts.factory.createIdentifier("Address")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("ChainProvider")
            ),
          ])
        ),
        ts.factory.createStringLiteral("@liquality/types")
      ),
      ts.factory.createClassDeclaration(
        undefined,
        [
          ts.factory.createModifier(ts.SyntaxKind.ExportKeyword),
          ts.factory.createModifier(ts.SyntaxKind.DefaultKeyword),
        ],
        ts.factory.createIdentifier(`${chain}WalletProvider`),
        undefined,
        [
          ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
            ts.factory.createExpressionWithTypeArguments(
              ts.factory.createIdentifier("WalletProvider"),
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
                    ts.factory.createIdentifier("ChainProvider"),
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
            ts.factory.createIdentifier("isWalletAvailable"),
            undefined,
            undefined,
            [],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword)]
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
            ts.factory.createIdentifier("getAddresses"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("startingIndex"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("numAddresses"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("change"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createArrayTypeNode(
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier("Address"),
                    undefined
                  )
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
            ts.factory.createIdentifier("getUsedAddresses"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("numAddressPerCall"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createArrayTypeNode(
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier("Address"),
                    undefined
                  )
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
            ts.factory.createIdentifier("getUnusedAddress"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("change"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("numAddressPerCall"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("Address"),
                  undefined
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
            ts.factory.createIdentifier("signMessage"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("message"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("from"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)]
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
            ts.factory.createIdentifier("getConnectedNetwork"),
            undefined,
            undefined,
            [],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)]
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
  return [
    { "@liquality/wallet-provider": version },
    { "@liquality/types": version },
  ];
};

export default (chain: string, version: string): NetworkTemplate => {
  return {
    source: source(firstLetterToUpperCase(chain)),
    index: IndexTs(`${firstLetterToUpperCase(chain)}WalletProvider`),
    pkg: PackageJson(
      `@liquality/${firstLetterToLowerCase(chain)}-wallet-provider`,
      version,
      dependencies(version),
      `Wallet Provider implementation for ${firstLetterToUpperCase(chain)}`
    ),
    folder: `${firstLetterToLowerCase(chain)}-wallet-provider`,
    fileName: `${firstLetterToUpperCase(chain)}WalletProvider.ts`,
  };
};
