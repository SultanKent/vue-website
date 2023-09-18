<template>
<div class="MaterialsCompany">
    <div class="MaterialsCompany_main">
        <p>Мы работаем только<br/> с экологически чистыми материалами</p>
        <img :src="items[0]" alt="Materials1">
        <img :src="items[1]" alt="Materials2">
        <img :src="items[2]" alt="Materials3">
        <img :src="items[3]" alt="Materials4">
        <p>В своих работах мы<br/> не используем ЛДСП</p>
    </div>
</div>
</template>

<script>
import Materials1 from '../../assets/Materials1.png'
import Materials2 from '../../assets/Materials2.png'
import Materials3 from '../../assets/Materials3.png'
import Materials4 from '../../assets/Materials4.png'

export default {
    data() {
        return {
            items: [Materials1, Materials2, Materials3, Materials4]
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles.scss';
.MaterialsCompany {
    background: #201A1A;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    .MaterialsCompany_main {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        gap: 60px;
        @media(max-width: 950px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media(max-width: 768px) {
          gap: 30px;
          grid-template-columns: repeat(3, 1fr);
        }
        @media(max-width: 480px) {
          grid-template-columns: repeat(2, 1fr);
        }
        >p {
            @include common-font2;
            max-width: 300px;
        }
        >img {
            @media(max-width: 768px) {
                width: 110px;
            }
        }
    }
}
</style>