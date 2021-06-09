import ts from "typescript";
import IndexTs from ".";
import { NetworkTemplate } from "./types";
import PackageJson from "./packageJson";
import { firstLetterToLowerCase, firstLetterToUpperCase } from "../utils";

const source = (chain: string) => {
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.CarriageReturnLineFeed,
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
              ts.factory.createIdentifier("NodeProvider"),
              ts.factory.createIdentifier("NodeProvider")
            ),
          ])
        ),
        ts.factory.createStringLiteral("@liquality/node-provider")
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
              ts.factory.createIdentifier("BigNumber")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("ChainProvider")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("Address")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("Block")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("Transaction")
            ),
            ts.factory.createImportSpecifier(
              undefined,
              ts.factory.createIdentifier("SendOptions")
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
        ts.factory.createIdentifier(`${chain}RpcProvider`),
        undefined,
        [
          ts.factory.createHeritageClause(ts.SyntaxKind.ExtendsKeyword, [
            ts.factory.createExpressionWithTypeArguments(
              ts.factory.createIdentifier("NodeProvider"),
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
            ts.factory.createIdentifier("generateBlock"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("numberOfBlocks"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [ts.factory.createKeywordTypeNode(ts.SyntaxKind.VoidKeyword)]
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
            ts.factory.createIdentifier("getBlockByHash"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("blockHash"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("includeTx"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("Block"),
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
            ts.factory.createIdentifier("getBlockByNumber"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("blockNumber"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("includeTx"),
                ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("Block"),
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
            ts.factory.createIdentifier("getBlockHeight"),
            undefined,
            undefined,
            [],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword)]
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
            ts.factory.createIdentifier("getTransactionByHash"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("txHash"),
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
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
            ts.factory.createIdentifier("getBalance"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("addresses"),
                undefined,
                ts.factory.createArrayTypeNode(
                  ts.factory.createParenthesizedType(
                    ts.factory.createUnionTypeNode([
                      ts.factory.createKeywordTypeNode(
                        ts.SyntaxKind.StringKeyword
                      ),
                      ts.factory.createTypeReferenceNode(
                        ts.factory.createIdentifier("Address"),
                        undefined
                      ),
                    ])
                  )
                ),
                undefined
              ),
            ],
            ts.factory.createTypeReferenceNode(
              ts.factory.createIdentifier("Promise"),
              [
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("BigNumber"),
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
            ts.factory.createIdentifier("sendTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("options"),
                undefined,
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("SendOptions"),
                  undefined
                ),
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
            ts.factory.createIdentifier("sendSweepTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("address"),
                undefined,
                ts.factory.createUnionTypeNode([
                  ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier("Address"),
                    undefined
                  ),
                ]),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("fee"),
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
            ts.factory.createIdentifier("updateTransactionFee"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("tx"),
                undefined,
                ts.factory.createUnionTypeNode([
                  ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier("Transaction"),
                    [ts.factory.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)]
                  ),
                ]),
                undefined
              ),
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("newFee"),
                undefined,
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
            ts.factory.createIdentifier("sendBatchTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("transactions"),
                undefined,
                ts.factory.createArrayTypeNode(
                  ts.factory.createTypeReferenceNode(
                    ts.factory.createIdentifier("SendOptions"),
                    undefined
                  )
                ),
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
            ts.factory.createIdentifier("sendRawTransaction"),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                ts.factory.createIdentifier("rawTransaction"),
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
        ]
      ),
    ]
  );

  return printer.printFile(file);
};

const dependencies = (version: string) => {
  return [
    { "@liquality/node-provider": version },
    { "@liquality/types": version },
  ];
};

export default (chain: string, version: string): NetworkTemplate => {
  return {
    source: source(firstLetterToUpperCase(chain)),
    index: IndexTs(`${firstLetterToUpperCase(chain)}RpcProvider`),
    pkg: PackageJson(
      `@liquality/${firstLetterToLowerCase(chain)}-rpc-provider`,
      version,
      dependencies(version),
      `RPC Provider implementation for ${firstLetterToUpperCase(chain)}`
    ),
    folder: `${firstLetterToLowerCase(chain)}-rpc-provider`,
    fileName: `${firstLetterToUpperCase(chain)}RpcProvider.ts`,
  };
};