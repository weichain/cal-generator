import ts from "typescript";

export default (packageName: string) => {
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
          ts.factory.createIdentifier(packageName),
          undefined
        ),
        ts.factory.createStringLiteral(`./${packageName}`)
      ),
      ts.factory.createExportDeclaration(
        undefined,
        undefined,
        false,
        ts.factory.createNamedExports([
          ts.factory.createExportSpecifier(
            undefined,
            ts.factory.createIdentifier(packageName)
          ),
        ]),
        undefined
      ),
    ]
  );

  return printer.printFile(file);
};
