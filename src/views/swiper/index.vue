<template>
  <div>
    swiper
    <!--主体为swiper标签-->
    <!--属性 :options 绑定的是data中设置的swiper配置项-->
    <!--属性 ref 用于获取该dom元素，在计算属性computed中将被调用-->
    <!--属性 id 为swiper最外层容器设置css样式-->
    <swiper :options="swiperOption" ref="mySwiper" class="my-swiper">

      <!--必须的组件-->
      <!--每页幻灯片使用swiper-slide标签-->
      <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
      <!-- <swiper-slide class="swiper_slide_item">I'm Slide 1</swiper-slide>
      <swiper-slide class="swiper_slide_item">I'm Slide 2</swiper-slide>
      <swiper-slide class="swiper_slide_item">I'm Slide 3</swiper-slide> -->
      <swiper-slide> <img src="@/assets/img/directive/7.jpeg" /> </swiper-slide>
      <swiper-slide> <img src="@/assets/img/directive/10.jpeg" /> </swiper-slide>
      <swiper-slide> <img src="@/assets/img/directive/11.jpg" /> </swiper-slide>

      <!-- 可选的控件 -->
      <!--分页器-->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="j_swiper-pagination swiper-pagination" slot="pagination"></div> -->

      <!--滚动条-->
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      <!--前进后退按钮-->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>

    <!--配置自定义的页面跳转按钮，to(page)为自定义方法，其内调用了swiper的内置方法-->
    <button @click="to(1)">点击跳转到Slide 1</button>
    <button @click="to(2)">点击跳转到Slide 2</button>
    <button @click="to(3)">点击跳转到Slide 3</button>
  </div>
</template>

<script>
export default {
  name: 'Vue2LearnIndex',

  data() {
    return {
      //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
      swiperOption: {

        //幻灯片放映方向
        // direction: 'vertical', //通常不与左右按钮一同使用
        // direction: 'horizontal',  // 纵向
        // //分页器配置项
        // pagination: {
        //   el: ".swiper-pagination", //分页器的类名
        //   clickable: true, // 点击分页器跳切换到相应的幻灯片
        //   type: 'bullets',
        //   // | 'progressbar' | 'fraction', //小圆点|进度条|数字页码
        //   dynamicBullets: true,  //动态小圆点(type:'bullets'时)
        //   //自定义分页器，需设置样式
        //   // renderBullet(index) {
        //   // return `<button class="swiper-pagination-bullet-custom" @click="to(index+1)">${index + 1}</span>`
        //   // <button @click="to(1)">点击跳转到Slide 1</button>
        //   // },
        // },

        // //前进后退按钮
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev'
        // },

        //滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        //   hide: true
        // },

        //幻灯片播放配置项
        // loop: true, //是否循环播放
        // speed: 1000, // 发生页面切换动画时，动画的切换速度
        // // autoplay: {
        // //     delay: 2000, // 幻灯片停留时间
        // //     disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
        // //     stopOnLastSlide: true, // 切换到最后一个slide时是否停止自动切换。（loop模式下无效）。
        // // },
        // autoplay: false,
        // on: {
        //   slideChangeTransitionEnd: function () {
        //     console.log(this.activeIndex); //每次切换结束时，在控制台打印现在是第几个slide
        //   },
        // },
        // 循环
        loop: true,
        // 指示点
        pagination: {
          el: '.swiper-pagination',
          clickable: true /* 分页器点可以点击切换 */
        },
        // 方向：横向或者纵向vertical
        direction: 'horizontal',
        // 自动播放
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        // 切换速度
        speed: 600,
        // 左右箭头按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    };
  },

  mounted() {

  },
  //计算属性
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  //设置自定义的按钮，点击后将前往目标也页
  methods: {
    to(index) {
      this.swiper.slideTo(index)
      console.log(this.swiper);
    }
  }
};
</script>

<style lang="scss" scoped>
// 容器样式
// #mySwiper {
//   width: 500px;
//   height: 100px;
//   background-color: aquamarine;
// }
.my-swiper {
  width: 500px;
  height: auto;
  --swiper-navigation-color: white;
  /*左右箭头按钮颜色*/
  --swiper-pagination-color: white;
  /*pagination分页器颜色*/
}

.my-swiper img {
  width: 100%;
  height: auto;
}

/deep/ .swiper-pagination-bullet {
  background: red;
  opacity: 1;
}

/deep/ .swiper-pagination-bullet-active {
  background: white;
}

// 幻灯片样式
// .swiper-slide.swiper_slide_item {
//   height: 300px;
//   background-color: aliceblue;
// }

// 自定义分页器样式
// /deep/ .swiper-pagination-bullet-custom {
//   display: inline-block;
//   width: 15px !important;
//   height: 15px !important;
//   margin-right: 10px;
//   background: blue;
//   border-radius: 50%;
// }

// /deep/ .swiper-pagination-bullet-custom .swiper-pagination-bullet .swiper-pagination-bullet-active-next .swiper-pagination-bullet-active-next-next {
//   width: 15px !important;
//   height: 15px !important;
// }
</style>