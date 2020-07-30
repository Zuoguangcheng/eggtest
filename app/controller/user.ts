import { Controller } from 'egg';
import Router from 'egg-router-decorator';

@Router.prefix('/')
export default class UserController extends Controller {
  /**
   * 使用session登录
   *
  */

  @Router.post('login')
  public async login() {
    const { ctx } = this;

    // ctx.body = JSON.stringify({ a: 'a' });

    ctx.body = await ctx.service.user.getUserInfo();
  }

  @Router.get('others')
  public async others() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.getOthersInfo();
  }

  @Router.get('invalid')
  public async invalid() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.invalid();
  }


  /**
   * 使用token方式登录
   */

  @Router.post('tokenLogin')
  public async tokenLogin() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.tokenLogin();
  }

  @Router.get('verificationLogin')
  public async verificationLogin() {
    this.ctx.body = await this.ctx.service.user.verificationLogin();
  }

}
