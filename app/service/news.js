const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const { serverUrl, pageSize } = this.config.news;
    console.log(serverUrl, pageSize);
    // use build-in http client to GET hacker-news api
    
    // const data = await this.ctx.curl(`${serverUrl}/topstories.json`, {
    //   data: {
    //     orderBy: '"$key"',
    //     startAt: `"${pageSize * (page - 1)}"`,
    //     endAt: `"${pageSize * page - 1}"`,
    //   },
    //   dataType: 'json',
    // });
    // console.log('数据：', data);

    // // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     console.log('url：', url);
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );

    // return newsList.map(res => res.data);
    return [
      {
        id: 1,
        title: '百度',
        url: 'http://www.baidu.com',
        time: 1626243166
      },
      {
        id: 2,
        title: 'google',
        url: 'https://www.google.com',
        time: 1626019200
      }
    ]
  }
}

module.exports = NewsService;