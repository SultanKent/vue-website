<template>
<div class="Create">
    <h1>как создаются наши изделия</h1>
    <div class="Create_main">
        <div v-for="(item, id) in items" :key="id" class="Create-item">
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
          image: 'Create1.png',
          description: 'Визуализация'
        },
        {
          image: 'Create2.png',
          description: 'Чертежи'
        },
        {
          image: 'Create3.png',
          description: 'Изготовление Изделия'
        },
        {
          image: 'Create4.png',
          description: 'Доставка и установка'
        }
      ]
    };
  }
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Create {
    background: #201A1A;
    @include common-padding;
    >h1 {
        @include margin-font;
    }
    .Create_main {
        display: flex;
        gap: 90px;
        flex-wrap: wrap;
        justify-content: center;
        @media(max-width: 768px) {
          gap: 40px;
        }
        .Create-item {
            width: 250px;
            height: 350px;
            background: #FFFCF4;
            color: #131010;
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 10px;
            text-align: center;
            transform: scale(1);
            opacity: 0.4;
            transition: transform 0.3s ease, opacity 0.3s ease;
            &:hover {
                transform: scale(1.1);
                opacity: 1;
            }
            >img {
            height: 220px;
            }
            > p {
                @include common-font2;
                text-transform: uppercase;
            }
        }
    }
}
</style>