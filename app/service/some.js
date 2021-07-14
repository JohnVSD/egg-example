const Service = require('egg').Service;

class SomeService extends Service {
  async list() {
    const rule = this.config.robot.ua;
    console.log('---service 里面：', rule);
    return rule
  }
}

module.exports = SomeService;