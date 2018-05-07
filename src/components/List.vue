<template>
  <div>
    <MHeader>
      列表页
    </MHeader>
    <div class="content">
      <ul>
        <router-link v-for="(book,index) in books" :to="{name:'detail', params:{bid:book.bookId}}" :key="index" tag="li">
          <img :src="book.bookCover" :alt="book.bookInfo">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>{{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import {getBooks, removeBook} from '../api';
import MHeader from '../base/MHeader.vue';
export default {
  data(){
    return {msg: 'hello',books:[]}
  },
  created(){
    this.getData();
  },
  methods: {
    async remove(id){
      await removeBook(id); //删除后台某一项
      // 删除前端数据
      this.books = this.books.filter(item=>item.bookId!==id);

    },
    async getData(){
      try {
        this.books = await getBooks();
      } catch (error) {
        console.log('books: ' + error)
      }
    }
  },
  computed: {},
  components:{MHeader}
}
</script>

<style lang="less" scoped>
.content ul{
  padding: 10px;
  li{
    display: flex;
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 0;
    img{
      // width: 130px!important;
      height: 150px!important;
    }
    h4{
      font-size: 20px;
      line-height: 25px;
    }
    p{
      color: #2a2a2a;
      line-height: 25px;
    }
    b{
      color: red;
    }
    button{
      display: block;width: 60px;height: 25px;background: orangered;
      color: #ffffff;border: none;border-radius: 15px;line-height: 25px;outline: none;
    }
  }
}
</style>

</style>
