<template>
<div class="Works">
    <div class="Works_main">
      <div v-for="(item, id) in items" :key="id" class="Works-item">
        <img :src="require('@/assets/' + item.image)" alt="Works">
        <p class="Works_title">{{ item.title }}</p>
        <p class="Works_desc">{{ item.description }}</p>
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
          image: 'Works1.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works2.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works3.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works4.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works5.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works6.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works7.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works8.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works9.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works10.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works11.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
        {
          image: 'Works12.png',
          title: 'Комплексная отделка интерьеров',
          description: 'Наши гардеробные создаются вместе с вами, поэтому место для хранения вещей в вашем доме будет подобрано именно так, как Вы этого хотите.'
        },
      ]
    };
  }
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Works {
    background: #201A1A;
    display: flex;
    align-items: center;
    justify-content: center;
    @include common-padding;
    .Works_main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 85px;
        @media(max-width: 840px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media(max-width: 560px) {
          grid-template-columns: repeat(1, 1fr);
        }
        .Works-item {
            width: 323px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            @media(max-width: 1350px) {
              width: 223px;
            }
            .Works_desc {
                font-size: 16px;
            }
        }
    }
}
</style>