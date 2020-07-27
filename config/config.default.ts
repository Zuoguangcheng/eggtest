import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594284323803_4337';

  // add your egg config in here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '_Aa930502',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: true,
  };

  config.cookies = {
    keys: 'key1,key2',
  };

  config.session = {
    key: 'EGG_SESSION',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };


  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
