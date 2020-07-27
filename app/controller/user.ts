import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    const { ctx } = this;

    // ctx.body = JSON.stringify({ a: 'a' });

    ctx.body = await ctx.service.user.getUserInfo();
  }

  public async others() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.getOthersInfo();
  }

  public async invalid() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.invalid();
  }
}
