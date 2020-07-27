import 'egg';
import 'egg-mysql'

declare module 'egg' {
    interface Application {
        mysql: any;
    }
}