# nerv 前端架构说明
## 前端技术选型：
1、Nerv框架，组件化开发，对React进行了封装，支持IE8，地址：https://github.com/NervJS/nerv<br>
2、JDF组件库，京东自己的组件库，地址：http://octopus.jd.com/octopus/html/detail/slider.html<br>
3、Sass，功能更强大，支持自定义function。<br>
4、webpack4，打包基于basewebpack插件，支持多入口，地址：https://www.npmjs.com/package/basewebpack<br>

## 目录说明：
assets -> 静态资源<br>
build -> 打包配置<br>
config -> 通用配置<br>
mock -> 模拟数据<br>
src -> assets -> 静态资源<br>
       common -> 公共js文件<br>
       components -> 公共组件，足够通用，例如toast、loading这类组件<br>
       floors -> 楼层组件<br>
       pages -> 页面入口<br>
       server -> 数据请求<br>
       styles -> 公共样式<br>
       template -> 公共模板<br>
       widgets -> 当组件既不是components也不是floors，但是会多次引用，可把组件放在此处<br>

## 目录文件规范：
1、src -> pages 目录规范：pages/页面名/[index.js|index.ejs|app.js]<br>
2、src -> floors 目录规范：floors/楼层名/组件名/index.js<br>
3、src -> floors/loadableComponent.js 选择性使用<br>

## 注释规范：
### 1、文件注释：
/**
 * 文件功能说明
 * @author 作者
 * @createDate 2017-10-16
 */

### 2、方法块注释：
/**
 * 方法功能说明
 * @param { Object } opts 参数说明
 * 例：
 *  {
 *    name: '姓名'
 *  }
 * @returns { String } 返回值说明
 */

 ### 3、单行变量注释：
 // 变量的作用说明
 let name = 'abc'

 ### 4、对象变量注释：
 /**
 * 功能描述
 * @property { String } a 属性a说明
 * @property { Number } b 属性b说明
 */
let foo = {
  a: 'a',
  b: 1
}

## 代码规范：
参考地址：https://github.com/BingKui/javascript-zh

## 开发调试：
1、代理接口请求配置，在config/proxy.js中配置<br>
2、代理本地mock配置，在mock/router.js中配置<br>
3、npm start 启动本地服务<br>
4、在自己的编辑器里面装一下editorconfig插件，建议使用VSCode编辑器<br>

## 注意事项：
1、如果要用JDF组件，需要将组件源码拷贝到本地，可以通过es6模块导入，并且在文件头部加上 /* eslint-disable */ 忽略eslint检查。<br>
2、将需要合成雪碧图的图标放在 src/assets/sprite 目录下，代码中正常引用该图片，打包时会自动合成。
