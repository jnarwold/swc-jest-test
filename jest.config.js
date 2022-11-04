module.exports = () => ({
  transform: {
    "^.+\\.(js|jsx)$": [
      "@swc/jest",
      {
        test: ".jsx?$",
        jsc: {
          parser: {
            jsx: true,
          },
        },
      },
    ],
    "^.+\\.(ts|tsx)$": [
      "@swc/jest",
      {
        test: ".tsx?$",
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
        },
      },
    ],
  },
});
