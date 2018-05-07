<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, key) in swiperSlides" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          autoplay: true,
          speed: 400,
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
  }
</script>
<style lang="less" scoped>
img{
  width: 100%;
}
</style>
