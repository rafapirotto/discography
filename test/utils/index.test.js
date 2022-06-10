const {
  BoardCreationLimitError,
  EnvVariableMissingError,
  DataProcessingError,
  InvalidPathError,
} = require('../../exceptions');
const { getEnvVariable, handleError, checkIfEnvVariablesExist } = require('../../utils');

describe('utils', () => {
  describe('getEnvVariable', () => {
    describe('getEnvVariable:success', () => {
      test('it should return the corresponding env variable value', () => {
        const someValue = 'some value';
        process.env.SOME_VAR = someValue;
        const value = getEnvVariable('SOME_VAR');
        expect(value).toBe(someValue);
      });
    });
    describe('getEnvVariable:error', () => {
      test('it should throw an exception', () => {
        const nonExistentVar = 'SOME_VAR_THAT_DOES_NOT_EXIST';
        const value = getEnvVariable(nonExistentVar);
        expect(value).toBe(undefined);
      });
    });
  });
  describe('handleError', () => {
    describe('Custom errors', () => {
      describe('handleError:EnvVariableMissingError', () => {
        test('it should return the EnvVariableMissingError message', () => {
          const key = 'some_key';
          const customError = new EnvVariableMissingError('some_key');
          const message = handleError(customError);
          const expectedMessage = `Declaration for ${key} is missing in the .env file.`;
          expect(message).toEqual(expectedMessage);
        });
      });
      describe('handleError:BoardCreationLimitError', () => {
        test('it should return the BoardCreationLimitError message', () => {
          const customError = new BoardCreationLimitError();
          const message = handleError(customError);
          const expectedMessage = 'Cannot create board, maximum number of created boards reached';
          expect(message).toEqual(expectedMessage);
        });
      });
      describe('handleError:DataProcessingError', () => {
        test('it should return the DataProcessingError message', () => {
          const customError = new DataProcessingError();
          const message = handleError(customError);
          const expectedMessage = 'There was a problem processing the data';
          expect(message).toEqual(expectedMessage);
        });
      });
      describe('handleError:InvalidPathError', () => {
        test('it should return the InvalidPathError message', () => {
          const customError = new InvalidPathError();
          const message = handleError(customError);
          const expectedMessage = 'Cannot parse file, invalid path provided';
          expect(message).toEqual(expectedMessage);
        });
      });
    });
    describe('handleError:Non Custom Error', () => {
      test('it should return the unexpected error message', () => {
        const customError = new Error();
        const message = handleError(customError);
        const expectedMessage = 'Unexpected error ocurred';
        expect(message).toEqual(expectedMessage);
      });
    });
  });
  describe('checkIfEnvVariablesExist', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules();
      process.env = { ...OLD_ENV };
    });

    describe('checkIfEnvVariablesExist:success', () => {
      test('it should not fail', async () => {
        process.env.TRELLO_API_KEY = 'trello_api_key';
        process.env.TRELLO_TOKEN = 'trello_token';
        process.env.SPOTIFY_CLIENT_ID = 'spotify_client_id';
        process.env.SPOTIFY_CLIENT_SECRET = 'spotify_client_secret';
        await expect(checkIfEnvVariablesExist()).resolves.not.toThrow();
      });
    });
    describe('checkIfEnvVariablesExist:fail', () => {
      test('it should throw an EnvVariableMissingError exception', async () => {
        await expect(checkIfEnvVariablesExist()).rejects.toThrow(EnvVariableMissingError);
      });
    });
  });
});
