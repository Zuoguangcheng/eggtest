import { Application } from 'egg';
import { initRouter } from 'egg-router-decorator';

export default (app: Application) => {
  initRouter(app);

  // const { controller, router } = app;

  // router.get('/', controller.home.index);
  // router.get('/home', controller.home.home);
  /* router.post('/login', controller.user.login);
  router.get('/others', controller.user.others);
  router.get('/invalid', controller.user.invalid);

  // token登录方式

  router.post('/tokenLogin', controller.user.tokenLogin);
  router.get('/verificationLogin', controller.user.verificationLogin); */
};
