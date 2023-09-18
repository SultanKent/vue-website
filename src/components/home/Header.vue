<template>
<div class="Header Header1">
    <div class="Header_main">
    <h1 class="Header_text">Kondoor - это любая мебель<br/> на заказ от производителя</h1>
    <button class="button1">Заказать изделие</button>
    </div>
</div>
</template>

<script>
export default {}
</script>


<style lang="scss">
@import '@/styles.scss';
.Header {
    height: 506px;
    text-align: center;
    &.Header1 {
        background: url(../../assets/header1.png);
    }
    &.Header2 {
        background: url(../../assets/header2.png);
    }
    &.Header3 {
        background: url(../../assets/header3.png);
    }
    &.Header4 {
        background: url(../../assets/header2.png);
    }
    &.Header6 {
        background: url(../../assets/header2.png);
    }
    .Header_main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        @include common-padding;
        .Header_text {
            @include common-font;
        }
        >p {
            max-width: 900px;
        }
    }
}
</style>