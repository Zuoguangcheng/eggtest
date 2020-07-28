import { Controller } from 'egg';

export default class UserController extends Controller {
  /**
   * 使用session登录
   *
  */
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


  /**
   * 使用token方式登录
   */

  public async tokenLogin() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.tokenLogin();
  }

  public async verificationLogin() {
    this.ctx.body = await this.ctx.service.user.verificationLogin();
  }

}
