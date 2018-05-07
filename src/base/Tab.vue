<template>
  <div class="footer">
    <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
    </router-link>
    <router-link to="/list">
        <i class="iconfont icon-liebiao"></i>
        <span>列表</span>
    </router-link>
    <router-link to="/collect">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
    </router-link>
    <router-link to="/add">
        <i class="iconfont icon-tianjia"></i>
        <span>添加</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data(){
      return {msg: 'hello'}
    },
    created(){
    },
    methods: {},
    computed: {},
    components:{}
  }
</script>

<!--
    display:flex;
    flex-direction:row / column;
    justify-content: center; 垂直居中
    align-item: center; 横向居中
    flex: 1; 每份占1
-->
<style lang="less" scoped>
.footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a{
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: pink;
    }
    a.router-link-active{
        color: red;
    }
}
</style>
