<template>
<div class="Partnership">
    <h1>Как происходит сотрудничество</h1>
    <div class="Partnership_main">
        <div v-for="(item, id) in items" :key="id" class="Partnership-item">
            <h2>{{ item.number }}</h2>
            <p class="Partnership_title"> {{ item.title }}</p>
            <p class="Partnership_desc">{{ item.description }}</p>
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
          number: '01',
          title: 'Выбор изделия',
          description: 'Вы выбираете понравившееся изделие, либо приходите со своим дизайн-проектом или своими идеями'
        },
        {
          number: '02',
          title: 'Заявка',
          description: 'Вы оставляете заявку, прикрепляя ссылки на понравившиеся работы или на Ваш дизайн-проект'
        },
        {
          number: '03',
          title: 'уточнение деталей',
          description: 'Наш менеджер обрабатывает заявку, связывается с Вами для уточнения деталей и консультирует по заказу'
        },
        {
          number: '04',
          title: 'Замеры',
          description: 'На Ваш адрес приезжает замерщик'
        },
        {
          number: '05',
          title: 'Смета и сроки',
          description: 'Мы составляем смету, оговариваются сроки'
        },
        {
          number: '06',
          title: 'Чертежи и материалы',
          description: 'Мы подготавливаем чертежи и согласовываем материалы'
        },
        {
          number: '07',
          title: 'Изготовление изделия',
          description: 'Мы изготавливаем мебель в срок, высылаем фото-видеоотчеты каждого этапа изготовления'
        },
        {
          number: '08',
          title: 'доставка',
          description: 'Мы бережно транспортируем и устанавливаем готовое изделие'
        },
      ]
    };
  }
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Partnership {
    @include common-padding;
    color: $second-color;
    >h1 {
        @include margin-font;
        @media(max-width: 480px) {
          font-size: 24px;
          text-align: center;
        }
    }
    .Partnership_main {
        display: grid;
        grid-template-columns: repeat(4, 2fr);
        gap: 46px;
        @media(max-width: 1350px) {
          grid-template-columns: repeat(2, 2fr);
        }
        @media(max-width: 660px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .Partnership-item {
            border: 1px solid #201A1A;
            width: 260px;
            height: 312px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            .Partnership_title {
                font-weight: 600;
                text-transform: uppercase;
            }
            .Partnership_desc {
                font-size: 16px;
            }
        }
    }
}
</style>