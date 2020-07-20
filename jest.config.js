const { TEST_ENV } = process.env;

let testMatch;
switch (TEST_ENV) {
  case 'integration': {
    testMatch = ['**/tests/integration/**/*.integration.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'];
    break;
  }
  case 'acceptance': {
    testMatch = ['**/tests/acceptance/**/*.acceptance.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'];
    break;
  }
  default: {
    testMatch = ['**/tests/unit/**/*.unit.[jt]s?(x)', '**/__tests__/*.[jt]s?(x)'];
  }
}

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: testMatch,
};
