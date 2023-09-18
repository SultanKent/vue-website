<template>
<div class="Benefits">
    <div class="Benefits_main">
        <h1>Ценность деревянных изделий из массива</h1>
        <div class="Benefits_main2">
          <div v-for="(item, id) in items" :key="id" class="item">
            <img :src="require('@/assets/' + item.image)" alt="Изображение">
            <p>{{ item.description }}</p>
          </div> 
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
          image: 'Benefit1.png',
          description: 'Экологичность и натуральность'
        },
        {
          image: 'Benefit2.png',
          description: 'Возможность использования лаков на водной основе'
        },
        {
          image: 'Benefit3.png',
          description: 'Предварительная сборка простота монтажа'
        },
        {
          image: 'Benefit4.png',
          description: 'Повышенная звуко и теплоизоляция'
        }
      ]
    };
  }
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Benefits {
    background: #201A1A;
    .Benefits_main {
    @include common-padding;
    >h1 {
        margin-bottom: 80px;
    }
    }
    .Benefits_main2 {
        display: flex;
        align-items: center;
        gap: 83px;
        @media(max-width: 1350px) {
          display: grid;
          grid-template-columns: repeat(2, 2fr);
          gap: 43px;
        }
        @media(max-width: 480px) {
          display: flex;
          flex-direction: column;
        }
        >div {
            flex-direction: column;
            display: flex;
            gap: 16px;
            align-items: center;
            text-align: center;
            >img {
                width: 67px;
            }
        }
    }
}
</style>