<template>
<div class="Production">
    <h1>О производстве</h1>
    <div class="Production_main">
      <div v-for="(item, id) in items" :key="id" class="Production-item">
        <img :src="require('@/assets/' + item.image)" alt="Production" class="Production_img">
        <p class="Production_title">{{ item.description }}</p>
      </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
    return {
      items: [
        {
          image: 'Production1.png',
          description: 'Vivamus efficitur fermentum est eu ultricies. Donec aliquam porta metus, consequat laoreet nunc venenatis at. Morbi at dui eu mauris laoreet porttitor. Proin a magna vel ex convallis euismod. Suspendisse nec quam quis nunc imperdiet porta vitae eget nibh. Proin ullamcorper efficitur orci, aliquet sollicitudin ipsum vehicula eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
        },
        {
          image: 'Production2.png',
          description: 'Vivamus efficitur fermentum est eu ultricies. Donec aliquam porta metus, consequat laoreet nunc venenatis at. Morbi at dui eu mauris laoreet porttitor. Proin a magna vel ex convallis euismod. Suspendisse nec quam quis nunc imperdiet porta vitae eget nibh. Proin ullamcorper efficitur orci, aliquet sollicitudin ipsum vehicula eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
        },
        {
          image: 'Production3.png',
          description: 'Vivamus efficitur fermentum est eu ultricies. Donec aliquam porta metus, consequat laoreet nunc venenatis at. Morbi at dui eu mauris laoreet porttitor. Proin a magna vel ex convallis euismod. Suspendisse nec quam quis nunc imperdiet porta vitae eget nibh. Proin ullamcorper efficitur orci, aliquet sollicitudin ipsum vehicula eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. '
        },
      ]
    };
  }
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Production {
    @include common-padding;
    background: #201A1A;
    >h1 {
      @include margin-font;
    }
    .Production_main {
      display: flex;
      flex-direction: column;
      gap: 40px;
      .Production-item {
        display: flex;
        @media(max-width: 950px) {
          flex-direction: column;
        }
        &.Production-item:nth-child(2) {
          flex-direction: row-reverse;
          max-width: 1110px;
          @media(max-width: 950px) {
          flex-direction: column;
          }
        }
        .Production_title {
          background: #FFFCF4;
          color: $second-color;
          width: 597px;
          height: 313px;
          padding: 35px;
          @media(max-width: 950px) {
          width: unset;
          font-size: 14px;
          }
          @media(max-width: 420px) {
            height: 353px;
            font-size: 12px;
          }
        }
        .Production_img {
          height: 313px;
        }
      }
    }
}
</style>