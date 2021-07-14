module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/oa_list', controller.home.oaList);
  router.get('/news', controller.news.list);
}