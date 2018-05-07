<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <loading v-if="loading">疯狂加载中</loading>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(hot, key) in hotBooks" :key="key">
              <img :src="hot.bookCover" :title="hot.bookInfo" :alt="hot.bookInfo">  
              <b>{{hot.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>
      
    </div>
  </div>
</template>

<script>
  // 1.引入组件 2.注册组件 3.使用组件
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import {getAll} from '../api/index.js';
  import Loading from '../base/Loading.vue';
  export default {
    // 页面创建完成之后发请求
    async created(){
      this.getData();
    },
    data(){
      return {sliders: [], hotBooks: [], loading:true}
    },
    methods: {
      async getData(){
        let [sliders, hotBooks] = await getAll(); //[sliders, hotBooks]
        this.sliders =  sliders;
        this.hotBooks = hotBooks;
        // 数据获取到之后取消loading
        this.loading = false;
      }
    },
    computed: {},
    components:{
      MHeader,Swiper,Loading
    }
  }
</script>

<style lang="less" scoped>
.container {
  width: 90%;
  margin: 0 auto;
  h3{
    color: #999;
    padding: 5px 0;
  }
  ul{
    display: flex;
    flex-wrap: wrap;/*默认不换行*/
    padding-bottom: 10px;
    li{
      width: 50%;
      text-align: center;
      img {width: 90%;}
    }
  }
}
</style>

