<template>
<div class="Apply">
    <div class="Apply_content1">
        <img src="../assets/Apply.png" alt="Apply">
    </div>
    <div class="Apply_content2">
        <h1>Оставить заявку</h1>
        <div>
        <label for="input">Имя</label>
        <input type="text" placeholder="Как Вас зовут">
        </div>
        <div>
        <label for="input">Номер телефона*</label>
        <input type="text" placeholder="Введите Ваш номер телефона">
        </div>
        <form action="обработчик.php" method="post" enctype="multipart/form-data">
        <label>Загрузите изображение изделия, ваши наработки или дизайн-проект</label>
        <label for="file">Прикрепите файлы</label>
        <input type="file" name="file" id="file">
        <input type="submit" value="Загрузить">
        </form>
        <div>
            <label for="textarea">Оставьте комментарий</label>
            <textarea placeholder="Введите Ваш комментарий"></textarea>
        </div>
        <div class="checkbox">
            <input type="checkbox" id="checkbox" name="option" value="значение">
            <label for="checkbox">Согласен на обработку персональных данных</label>
        </div>
        <button>Отправить</button>
    </div>
</div>
</template>

<script>
export default {
}
</script>


<style scoped lang="scss">
@import '@/styles.scss';
.Apply {
    display: flex;
    color: $second-color;
    .Apply_content1 {
        >img {
          max-width: 80%;
          height: 100%;
        }
        @media(max-width: 768px) {
            display: none;
        }
    }
    .Apply_content2 {
        padding: 104px 130px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        @media(max-width: 1350px) {
          padding: 104px 75px;
        }
        @media(max-width: 1350px) {
          padding: 80px 75px;
          overflow: hidden;
        }
        >div, form {
            display: flex;
            flex-direction: column;
            gap: 5px;
            >input {
                height: 44px;
            }
            >textarea {
                height: 147px;
            }
        }
        .checkbox {
            flex-direction: unset;
            gap: 15px;
            align-items: center;
        }
        >button {
            width: 174px;
            height: 55px;
            background: #201A1A;
            color: white;
        }
    }
}
</style>