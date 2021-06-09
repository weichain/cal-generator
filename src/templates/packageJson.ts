interface Dependency {
  [d: string]: string;
}

export default (
  packageName: string,
  version: string,
  deps: Dependency[],
  description = ""
) => {
  const dependencies: Dependency = {
    "@babel/runtime": "^7.12.1",
  };

  deps.forEach((v: Dependency) => {
    const [name] = Object.keys(v);
    dependencies[name] = `^${v[name]}`;
  });

  const content = {
    name: packageName,
    version,
    description,
    module: "dist/index.js",
    main: "dist/index.js",
    types: "dist/lib/index.d.ts",
    directories: {
      dist: "dist",
      src: "lib",
    },
    files: ["dist", "lib"],
    scripts: {
      build: "webpack --config ../../webpack/webpack.config.js",
    },
    author: "Liquality <info@liquality.io>",
    license: "MIT",
    dependencies,
    homepage: "https://github.com/liquality/chainabstractionlayer#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/liquality/chainabstractionlayer.git",
    },
    bugs: {
      url: "https://github.com/liquality/chainabstractionlayer/issues",
    },
    publishConfig: {
      access: "public",
    },
    sideEffects: false,
  };

  return JSON.stringify(content, null, "  ") + "\n";
};
