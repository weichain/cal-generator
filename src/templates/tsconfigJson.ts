export default () => {
  const content = {
    extends: "../../tsconfig.json",
    compilerOptions: {
      outDir: "./dist",
      baseUrl: "./",
      rootDir: "./",
      esModuleInterop: true,
    },
    include: ["lib"],
  };

  return JSON.stringify(content, null, "  ") + "\n";
};
