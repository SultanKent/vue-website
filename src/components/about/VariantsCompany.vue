 <template>
<div class="Variants">
    <h1>варианты отделки</h1>
    <swiper
    :slidesPerView="4"
    :spaceBetween="25"
    :breakpoints="{
        1350: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1
        }
    }"
   :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(item, id) in items" :key="id" class="Variants-item">
            <img :src="require('@/assets/' + item.img)" alt="Изображение" class="Variants_img">
            <p class="Variants_title">{{ item.title }}</p>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
    data() {
        return {
            items: [
                {img: 'Variants1.png', title: 'Каменный шпон'},
                {img: 'Variants2.png', title: 'декоративная штукатурка'},
                {img: 'Variants3.png', title: 'металлизация'},
                {img: 'Variants4.png', title: 'покраска эмалью'},
                {img: 'Variants5.png', title: 'каркас из металла'},
                {img: 'Variants6.png', title: 'Фрезеровка ЧПУ'},
            ]
        }
    }
  };
</script>

<style scoped lang="scss">
@import '@/styles.scss';
.Variants {
    @include common-padding;
    >h1 {
        color: $second-color;
        @include margin-font;
    }
    .mySwiper {
      max-width: 1200px;
      .swiper-pagination {
        display: none!important;
      }
      .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
        display: none;
      }
        .Variants-item {
        display: flex;
        flex-direction: column;
        .Variants_img {
          height: 215px;
        }
        .Variants_title {
          width: 281px;
          height: 74px;
          padding: 5px 20px;
          background: #201A1A;
          width: 100%;
        }
    }
  }
}
</style>