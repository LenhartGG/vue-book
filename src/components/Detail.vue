<template>
  <div class="detail">
    <MHeader :back="true">详情</MHeader>
    <ul>
      <li>
        <label for="bookName">书的名称</label>
        <input type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label for="bookInfo">书的信息</label>
        <input type="text" v-model="book.bookInfo" id="bookInfo">
      </li>
      <li>
        <label for="bookPrice">书的价格</label>
        <input type="text" v-model.number="book.bookPrice" id="bookPrice">
      </li>
      <button @click="updata">确认修改</button>
    </ul>
  </div>
</template>

<script>
  import MHeader from '../base/MHeader.vue';
  import {findOneBook,updataBook} from '../api';
  export default {
    watch: {
      $route() { //只要路径变化重新获取数据
        this.getData();
      }
    },
    data(){
      return {book: {}}
    },
    created(){ //页面一加载 根据id发送请求
      this.getData();
    },
    methods: {
      async updata() { //点击修改图书信息
        await updataBook(this.bid, this.book);
        this.$router.push('/list'); //修改完成后跳转页面
      },
      async getData(){ //通过id找到某一项后赋给book
        this.book = await findOneBook(this.bid);
        // 如果是空对象 需要跳转回列表页
        Object.keys(this.book).length>0?void 0:this.$router.push('/list');
      }
    },
    computed: {
      bid(){
        return this.$route.params.bid; //将路径参数的id映射到bid上
      }
    },
    components:{MHeader}
  }
</script>

<style lang="less">
ul{
  margin: 50px 20px 0 20px;
  li{
    label{
      display: block;
      font-size: 25px;
    }
    input{
      margin: 10px 0;
      height: 25px;
      width: 100%;
    }
  }
  button{
      display: block;width: 80px;height: 30px;background: #2aabd2;
      color: #ffffff;border: none;border-radius: 5px;line-height: 25px;outline: none;
    }
}
.detail{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 100;
}
</style>

