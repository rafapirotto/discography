const { getEnvVariable } = require('../../utils/getEnvVariable');

describe('utils', () => {
  describe('getEnvVariable', () => {
    describe('getEnvVariable: env variable exists', () => {
      test('it should return the corresponding env variable value', async () => {
        const someValue = 'some value';
        process.env.SOME_VAR = someValue;
        const value = getEnvVariable('SOME_VAR');
        expect(value).toBe(someValue);
      });
    });

    describe('getEnvVariable: env variable does not exist', () => {
      test('it should throw an exception', async () => {
        const nonExistentVar = 'SOME_VAR_THAT_DOES_NOT_EXIST';
        const value = getEnvVariable(nonExistentVar);
        expect(value).toBe(undefined);
      });
    });
  });
});
