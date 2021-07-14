exports.keys = '20210707';

exports.view = {
  defaultViewEngine: 'nunjucks',
  mappings: {
    '.tpl': 'nunjucks'
  }
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.middleware = [
  'robot'
];

exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ]
}