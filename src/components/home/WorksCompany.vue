<template>
<div class="WorksCompany">
    <div class="WorksCompany_main">
        <div class="WorksCompany_title">
            <h1>Наши работы</h1>
            <button class="button2">Посмотреть все работы</button>
        </div>
        <div class="WorksCompany_content">
            <div class="item item1">
                <img :src="items[0]" alt="Изображение">
            </div>
            <div class="item item2">
                <img :src="items[1]" alt="Изображение">
            </div>
            <div class="item item3">
                <img :src="items[2]" alt="Изображение">
            </div>
            <div class="item item4">
                <img :src="items[3]" alt="Изображение">
            </div>
            <div class="item item5">
                <img :src="items[4]" alt="Изображение">
            </div>
            <div class="item item6">
                <img :src="items[5]" alt="Изображение">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Work1 from '../../assets/Work1.png'
import Work2 from '../../assets/Work2.png'
import Work3 from '../../assets/Work3.png'
import Work4 from '../../assets/Work4.png'
import Work5 from '../../assets/Work5.png'
import Work6 from '../../assets/Work6.png'

export default {
    data() {
        return {
            items: [Work1, Work2, Work3,  Work4, Work5, Work6]
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/styles.scss';
.WorksCompany {
    background: #fff;
    height: 821px;
    @media(max-width: 480px) {
        height: 521px;
    }
    .WorksCompany_main {
        @include common-padding;
        color: $second-color;
        .WorksCompany_title {
            display: flex;
            justify-content: space-between;
            @include margin-font;
            @media(max-width: 480px) {
                flex-direction: column;
                gap: 20px;
            }
        }
        .WorksCompany_content {
            display: grid;
            grid-template-columns: 580px 280px 1fr;
            grid-template-rows: 290px;
            grid-gap: 10px;
            @media(max-width: 1350px) {
                grid-template-columns: repeat(2, 2fr);
            }
            @media(max-width: 940px) {
                grid-template-columns: 280px 280px;
            }
            @media(max-width: 660px) {
                grid-template-columns: 220px 200px;
                grid-template-rows: 220px;
            }
            @media(max-width: 480px) {
                grid-template-columns: 140px 140px;
                grid-template-rows: 120px;
            }
        }
        .item1 {
            @media(max-width: 940px) {
                grid-row: 2 / span 2;
            }
            >img {
                @media(max-width: 660px) {
                    width: 430px;
                }
                @media(max-width: 480px) {
                    width: 270px;
                }
            }
        }
        .item2 {
            >img {
                @media(max-width: 660px) {
                    width: 200px;
                }
                @media(max-width: 480px) {
                    width: 120px;
                }
            }
        }
        .item3 {
            @media(max-width: 1350px) {
                display: none;
            }
        }
        .item4 {
            @media(max-width: 1350px) {
                left: 0;
                grid-row: 2 / span 2;
            }
            @media(max-width: 940px) {
                display: none;
            }
        }
        .item5, .item6 {
            position: relative;
            grid-row: span 1;
            left: -290px;
            @media(max-width: 1350px) {
                left: 0px;   
            }
            >img {
                @media(max-width: 660px) {
                    width: 200px;
                }
                @media(max-width: 480px) {
                    width: 120px;
                }
            }
        }
        .item6 {
            @media(max-width: 1350px) {
                position: relative;
                left: -290px;
                bottom: 290px;
            }
            @media(max-width: 940px) {
                display: none;
            }
        }
    }
}
</style>