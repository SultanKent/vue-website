<template>
<div class="Footer">
    <div class="Footer_main">
        <div class="Footer_content">
            <router-link to="/">Главная</router-link>
            <router-link to="/About">О компаний</router-link>
            <router-link to="/Works">Наши работы</router-link>
            <router-link to="/Review">Отзывы</router-link>
            <router-link to="/Articles">Статьи</router-link>
        </div>
        <img src="../assets/logo.png" alt="logo" class="logo">
        <div class="Footer_content">
            <p>Москва, ул. Новорязанская, д. 26к1, Loft Factory</p>
            <p>+7 (925) 517-99-71</p>
            <p>info@kondoor.ru</p>
            <div class="messangers">
                <img src="../assets/messanger1.png" alt="">
                <img src="../assets/messanger2.png" alt="">
                <img src="../assets/messanger3.png" alt="">
            </div>
        </div>
    </div>
    <p class="Freepik">Изображение от Freepik</p>
</div>
</template>

<script>
export default {
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Footer {
    background: #131010;
    .Footer_main {
        display: flex;
        padding: 80px 0px 40px;
        gap: 270px;
        justify-content: center;
        align-items: center;
        @media(max-width: 1350px) {
            gap: 50px;
        }
        @media(max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }
        .Footer_content {
            display: flex;
            flex-direction: column;
            gap: 40px;
            width: 270px;
            align-items: center;
            .messangers {
                display: flex;
                align-items: center;
                gap: 15px;
            }
        }
        .logo {
            width: 142px;
            height: 42px;
        }
    }
    .Freepik {
        text-align: center;
        padding-bottom: 40px;
    }
}
</style>