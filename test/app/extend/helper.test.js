const { app, assert } = require('egg-mock/bootstrap');

describe('relativeTime()', () => {
  it('should get string', () => {
    const ctx = app.mockContext();
    assert(ctx.helper.relativeTime(1296403200) === '10 年前');
  })
})