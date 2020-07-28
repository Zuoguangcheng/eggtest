import { Service } from 'egg';

export default class Users extends Service {
  public async getUserInfo() {
    const { ctx } = this;

    const { userName, password } = ctx.request.body;
    const userInfo = await this.app.mysql.get('user', { name: userName });

    const sessionId = ctx.helper.getSessionId(100);

    if (userInfo && (password === userInfo.password)) {
      ctx.session[sessionId] = userInfo;
      ctx.cookies.set('SESSION_ID', sessionId, {
        maxAge: 100000,
        encrypt: true,
      });

      ctx.cookies.set('USER_AUTH', userInfo.ref, {
        maxAge: 100000,
        encrypt: true,
      });

      return '成功';
    }

    return '用户名密码错误';
  }

  public async getOthersInfo() {
    const { ctx } = this;

    const sessionId = ctx.cookies.get('SESSION_ID', {
      encrypt: true,
    });

    const userInfo = ctx.session[sessionId];

    return userInfo;
  }

  public async invalid() {
    const { ctx } = this;

    const userAuth = ctx.cookies.get('USER_AUTH', {
      encrypt: true,
    });

    const userInfo = await this.app.mysql.get('user', { ref: userAuth });

    if (userInfo) {
      const userRef = ctx.helper.getSessionId(100);
      const result = await this.app.mysql.update('user', {
        ref: userRef,
      }, {
        where: {
          name: userInfo.name,
        },
      });

      if (result.affectedRows === 1) {
        const sessionId = ctx.helper.getSessionId(100);
        ctx.session[sessionId] = userInfo;

        ctx.cookies.set('SESSION_ID', sessionId, {
          maxAge: 100000,
          encrypt: true,
        });

        ctx.cookies.set('USER_AUTH', userRef, {
          maxAge: 100000,
          encrypt: true,
        });
      }


      const changeUserInfo = await this.app.mysql.get('user', { name: userInfo.name });

      return changeUserInfo;
    }

  }


  /**
   * 演示token登录方式
   *
  */
  public async tokenLogin() {
    const { ctx } = this;

    const { userName, password } = ctx.request.body;
    const userInfo = await this.app.mysql.get('user', { name: userName });
    if (userInfo && (password === userInfo.password)) {
      const token = JSON.stringify(userInfo);

      ctx.cookies.set('token', token, {
        maxAge: 100000,
        encrypt: true,
      });
    }

    return {
      code: 0,
    };
  }

  public async verificationLogin() {
    const { ctx } = this;
    const token = ctx.cookies.get('token', {
      encrypt: true,
    });

    return token;

  }
}
