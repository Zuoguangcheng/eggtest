import { Controller } from 'egg';
import Router from 'egg-router-decorator';

@Router.prefix('/')
export default class HomeController extends Controller {
  @Router.get('/')
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg1');
  }

  @Router.get('home')
  public async home() {
    const { ctx } = this;
    await ctx.render('index');
  }
}
