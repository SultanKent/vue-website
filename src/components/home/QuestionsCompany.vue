<template>
<div class="Questions">
    <h1>Вопросы и ответы</h1>
    <div class="Questions_main">
        <div v-for="item in items" :key="item.id" class="Questions_item">
            <p @click="toggleDescription(item.id)" class="Questions_title">{{ item.title }}</p>
            <div class="description" :class="{ 'open': item.showDescription }">
                {{ item.description }}
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
          id: 1,
          title: 'Сколько будет стоить мой заказ?',
          description: 'Мы расчитываем стоимость вашего заказа индивидуально, учитывая особенности вашего проекта.',
          showDescription: false
        },
        {
          id: 2,
          title: 'Сколько будет стоить мой заказ?',
          description: 'Мы расчитываем стоимость вашего заказа индивидуально, учитывая особенности вашего проекта.',
          showDescription: false
        },
        {
          id: 3,
          title: 'Сколько будет стоить мой заказ?',
          description: 'Мы расчитываем стоимость вашего заказа индивидуально, учитывая особенности вашего проекта.',
          showDescription: false
        },
        {
          id: 4,
          title: 'Сколько будет стоить мой заказ?',
          description: 'Мы расчитываем стоимость вашего заказа индивидуально, учитывая особенности вашего проекта.',
          showDescription: false
        },
      ]
    };
  },
  methods: {
    toggleDescription(id) {
      const item = this.items.find(item => item.id === id);
      if (item) {
        item.showDescription = !item.showDescription;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles.scss';
.Questions {
    background: #201A1A;
    @include common-padding;
    >h1 {
        @include margin-font;
    }
    .Questions_main {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 2fr);
    @media(max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .Questions_item {
        max-width: 609px;
        cursor: pointer;
        margin-bottom: 0px;
        .Questions_title {
            padding-top: 25px;
            border-top: 1px solid #FFFCF4;
        }
        .description {
            position: relative;
            margin-top: 25px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
            border-bottom: 1px solid #FFFCF4;
            &:before {
                transform: scaleX(0);
                transform-origin: left;
            }
            &:after {
                transform: scaleX(1);
                transform-origin: right;
            }
            &.open {
                max-height: 1000px;
                &:before {
                    transform: scaleX(1);
                }
                &:after {
                  transform: scaleX(0);
                }  
            }
        }
      } 
    }
}
</style>
