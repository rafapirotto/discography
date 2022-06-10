const axios = require('axios');

const { createLists } = require('../../trello/lists');
const { albumsByDecade } = require('../fixtures');

jest.mock('axios');

describe('trello:lists', () => {
  describe('addCardsToList:success', () => {
    test('it should not fail', async () => {
      // we mock the post method to avoid calling the real api since we are not interested in testing that
      axios.post.mockResolvedValueOnce({ data: { id: '12739812738192' } });
      const boardId = 'asdasdasd76as78dasdasd';
      await expect(createLists(boardId, albumsByDecade)).resolves.not.toThrow();
    });
  });
  describe('addCardsToList:error', () => {
    test('it should throw an exception', async () => {
      // we mock the post method to avoid calling the real api since we are not interested in testing that
      const boardId = 'asdasdasd76as78dasdasd';
      await expect(createLists(boardId, null)).rejects.toThrow(Error);
    });
  });
});
