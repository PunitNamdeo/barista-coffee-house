module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js", "!**/node_modules/**"],
  coverageDirectory: "./coverage",
  coverageReporters: ["html", "text", "text-summary"],
};
