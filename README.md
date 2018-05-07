# vue-book

> A Vue.js project


## 搭建简单项目
```
## 全局搭建vue-cli
npm install vue-cli -g
vue init webpack-simple aaaa

## to get start:
cd aaaa
npm install
npm run dev

## to get remove
cd ..
rm -r vue-book
```

## 搭建大型项目
```
vue init webpack vue-book

## 下载依赖包 node_modules
npm install

## to get start:
cd aaaa
npm run dev
```

## 删除 helloworld.vue
```
## router 文件下 index.js 中引用 helloworld.vue 的代码需要删除
```

## 项目中用到less
```
npm install less less-loader axios vuex bootstrap
```
```
<style scoped lang="less">
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
    }
</style>
```
- mock 模拟数据
- api 代表的是所有的接口
- base 基础组件
- components 页面组件

## 弹性布局flex
```
display: flex;
flex-direction: row / column;
justify-content: center; //垂直居中
align-item: center; //横向居中
flex: 1; //每份占1
```
## 使用轮播图插件
### 安装插件
```
npm install vue-awesome-swiper --save
```
## 热门图书功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用api，如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个方法，将数据传递给基础组件
- 写一个组件
  - 1.创建一个.vue的文件
  - 2.在需要使用这个组件的父级中引用这个组件
  - 3.在组件中注册
  - 4.以标签的形式引入
> 使用.json存储数据而不是.js文件存储数据，.js存储的是假数据，操作数据的话需要.json。

## 路由元信息
- 页面级缓存 `$route.meta` 添加属性 `keepAlive: true`
```
<!-- 需要缓存的 首页 -->
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<!-- 正常的访问走下面 -->
<router-view v-if="!$route.meta.keepAlive"></router-view>
```
```
//路由配置
routes: [
    {
      path: '/home',
      component: Home,
      meta: { keepAlive: true }
    }
]
```
- 路由的动画

## 下拉加载 `/page`
- 默认每次给5条，前端告诉后台现在要从第几条开始给我
- `/page?offset=5`
- 后台返回还要告诉前端是否有更多的数据 hasMore:false