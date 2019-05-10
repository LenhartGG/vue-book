<template>
  <div style="height:200px">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, key) in swiperSlides" :key="key">
        <img :src="slide" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  // mount with component
  // require styles
  import 'swiper/dist/css/swiper.css'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'carousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          autoplay: true,
          speed: 100,
          loop:true,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,//父级变化会重新渲染
          pagination: {
            el: '.swiper-pagination'
          },
          setWrapperSize: true,
        },
      } 
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="less" scoped>
img{
  width: 100%;
}
</style>
