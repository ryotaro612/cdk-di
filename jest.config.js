/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
      "^.+.tsx?$": ["ts-jest",{
      tsconfig: 'tsconfig-projen.json',		  
	}],
  },
    testMatch: [
      "<rootDir>/@(projenrc)/**/*(*.)@(spec|test).ts?(x)",
      "<rootDir>/@(projenrc)/**/__tests__/**/*.ts?(x)"
    ]
};

