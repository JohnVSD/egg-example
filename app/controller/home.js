const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '你好';
  }

  async oaList() {
    const { ctx, service } = this;
    const res = await service.some.list();
    console.log('---Con ', res);
    this.ctx.body = JSON.stringify(res);
  }
}

module.exports = HomeController;