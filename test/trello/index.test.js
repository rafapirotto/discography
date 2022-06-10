const axios = require('axios');

const { createBoard, addDataToBoard } = require('../../trello');
const { albumsByDecade } = require('../fixtures');

jest.mock('axios');

describe('trello:index', () => {
  describe('createBoard:success', () => {
    test('it should not fail', async () => {
      // we mock the post method to avoid calling the real api since we are not interested in testing that
      axios.post.mockResolvedValueOnce({ data: { id: '12739812738192' } });
      await expect(createBoard()).resolves.not.toThrow();
    });
  });
  describe('createBoard:error', () => {
    test('it should throw an exception', async () => {
      // we mock the post method to avoid calling the real api since we are not interested in testing that
      axios.post.mockRejectedValue(new Error());
      await expect(createBoard()).rejects.toThrow(Error);
    });
  });
  describe('addDataToBoard', () => {
    test('it should not fail', async () => {
      // we mock the post method to avoid calling the real api since we are not interested in testing that
      axios.post.mockResolvedValue({ data: { id: '12739812738192' } });
      const boardId = 'asdasdasd76as78dasdasd';
      await expect(addDataToBoard(boardId, albumsByDecade)).resolves.not.toThrow();
    });
  });
});
