<template>
<div class="Values">
    <h1>варианты отделки</h1>
    <div class="Values_main">
      <div v-for="(item, id) in items" :key="id" class="Values-item">
        <img :src="require('@/assets/' + item.image)" alt="Изображение">
        <p>{{ item.description }}</p>
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
          image: 'Values1.png',
          description: 'Выполнение заказа строго в срок'
        },
        {
          image: 'Values2.png',
          description: 'Высокое качество изделий'
        },
        {
          image: 'Values3.png',
          description: 'Индивидуальный подход к каждому заказу'
        },
        {
          image: 'Values4.png',
          description: 'Конкурентноспособные цены'
        },
        {
          image: 'Values5.png',
          description: 'Опыт и профессионализм нашей команды'
        }
      ]
    };
  }
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Values {
    @include common-padding;
    color: $second-color;
    >h1 {
        margin-bottom: 80px;
    }
    .Values_main {
        display: flex;
        gap: 40px;
        @media(max-width: 1350px) {
          display: grid;
          grid-template-columns: repeat(2, 2fr);
        }
        @media(max-width: 560px) {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .Values-item {
            text-align: center;
        }
    }
}
</style>