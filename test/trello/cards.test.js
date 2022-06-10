const axios = require('axios');

const { addCardsToList } = require('../../trello/cards');
const { albumsByDecade } = require('../fixtures');

jest.mock('axios');

describe('trello:cards', () => {
  describe('addCardsToList', () => {
    test('it should not fail', async () => {
      // we mock the post method to avoid calling the real api since we are not interested in testing that
      axios.post.mockResolvedValue({});
      const listId = 'asdasdasd76as78dasdasd';
      await expect(addCardsToList(listId, albumsByDecade)).resolves.not.toThrow();
    });
  });
});
