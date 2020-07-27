import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg1');
  }

  public async home() {
    const { ctx } = this;
    await ctx.render('index');
  }
}
