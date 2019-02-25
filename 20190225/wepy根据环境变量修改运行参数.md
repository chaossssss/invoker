在wepy项目目录中有wepy.config.js这个文件,在这个js 文件中有appConfig字段，

appConfig: {
   baseUrl: process.env.NODE_ENV === 'production' ? 'https://a.com/' : 'https://a.test.com/
}
 运行 npm run dev命令时，域名为https://a.test.com/，运行 npm run build时域名为https://a.com/

方便我们在本地调试和发布小程序时不用手动去修改域名。

在appConfig里面，我们也可以加上其他字段（常量），在项目的每一个页面使用，比如加上版本号，其他页面通过下面方式取值就可以

const baseUrl = wepy.$appConfig.baseUrl;
--------------------- 
作者：景宇 
来源：CSDN 
原文：https://blog.csdn.net/qq_16646819/article/details/83413408 
版权声明：本文为博主原创文章，转载请附上博文链接！