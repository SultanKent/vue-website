<template>
<div class="About">
    <div class="About_main">
        <h2>о компании</h2>
        <p>Компания «Kondoor» специализируется на изготовлении мебели из массива ценных пород древесины с 2004 года. Накопленный опыт и современное оборудование позволяют нашей столярной мастерской выполнять индивидуальные авторские заказы, соответствующие европейским стандартам качества.</p>
        <div class="About_main2">
            <div class="About_content1">
            <div>
                <span>19</span><br/> лет работы
            </div>
            <div>
                <span>3642</span><br/> выполненных проекта
            </div>
            <div>
                <span>20</span><br/> городов России
            </div>
            </div>
            <div class="About_content2">
                <button class="button2">Подробнее о нас</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.About {
     @include common-padding;
     color: $second-color;
     .About_main {
        display: flex;
        flex-direction: column;
        gap: 40px;
       .About_main2 {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 20px;
          .About_content1 {
            display: flex;
            gap: 32px;
            >div>span {
                @include common-font;
                font-style: normal;
                font-weight: 700;
            }
          }
        }
     }
}
</style>