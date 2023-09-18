<template>
<div class="Furniture">
    <h1>Фурнитура и комплектующие</h1>
    <p>Фурнитура и комплектующие</p>
    <div class="Furniture_main">
      <div v-for="(item, id) in items" :key="id" class="Values-item">
        <img :src="require('@/assets/' + item.image)" alt="Изображение">
        <p class="Furniture_title">{{ item.description }}</p>
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
          image: 'Furniture1.png',
          description: 'Системы выдвижения, петли, откидные механизмы ведущих производителей с доводчиками'
        },
        {
          image: 'Furniture2.png',
          description: 'Профили для фасадов из металла с петлями-невидимками'
        },
        {
          image: 'Furniture3.png',
          description: 'Вставки из нержавеющей стали, латуни, оникса'
        },
        {
          image: 'Furniture4.png',
          description: 'Встроенная подсветка'
        },
      ]
    };
  }
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Furniture {
    @include common-padding;
    background: #201A1A;
    >h1,p {
      @include margin-font;
      @media(max-width: 480px) {
        font-size: 24px;
      }
    }
    .Furniture_main {
      display: flex;
      gap: 33px;
      @media(max-width: 1350px) {
        display: grid;
        grid-template-columns: repeat(2, 2fr);
      }
      @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .Values-item {
        display: flex;
        flex-direction: column;
        >img {
          max-width: 270px;
          @media(max-width: 768px) {
            max-width: 420px;
          }
          @media(max-width: 480px) {
            max-width: 280px;
          }
        }
        .Furniture_title {
          background: #FFFCF4;
          color: $second-color;
          width: 270px;
          height: 155px;
          padding: 10px 20px;
          @media(max-width: 768px) {
            width: 420px;
          }
          @media(max-width: 480px) {
            max-width: 280px;
          }
        }
      }
    }
}
</style>