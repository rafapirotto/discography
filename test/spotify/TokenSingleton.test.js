const utils = require('../../spotify/utils');

jest.mock('../../spotify/utils');
const TokenSingleton = require('../../spotify/TokenSingleton');

describe('spotify', () => {
  describe('TokenSingleton', () => {
    test('it should return the same token', async () => {
      utils.getToken.mockResolvedValue(() => ({
        data: { access_token: Math.random().toString() },
      }));
      const firstToken = await TokenSingleton.getInstance();
      const secondToken = await TokenSingleton.getInstance();
      expect(firstToken).toEqual(secondToken);
    });
  });
});
