<template>
  <div class="auth-form-container">
    <form v-if="isFormVisible" @submit.prevent="submitForm" class="auth-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" class="Auth-button">Log In</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem('savedUsername') || '',
      password: localStorage.getItem('savedPassword') || '',
      isFormVisible: true,
      errorMessage: ''
    };
  },
  methods: {
    submitForm() {
      // Проверка длины имени пользователя и пароля
      if (this.username.length < 6 || this.password.length < 6) {
        this.errorMessage = 'Имя пользователя и пароль должны быть длиннее 6 символов.';
        return;
      }

      // Сохранение имени пользователя и пароля в localStorage
      localStorage.setItem('savedUsername', this.username);
      localStorage.setItem('savedPassword', this.password);

      // Выполнение логики аутентификации
      this.isFormVisible = false;
      this.$emit('formSubmitted');
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/styles.scss';
.auth-form-container {
  background: url(../assets/header1.png);
  color: $second-color;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.auth-form {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 10px;
}

.Auth-button {
    width: 242px;
    height: 55px;
    background: transparent;
    border: 1px solid #201A1A;
    color: $second-color;
    font-size: 20px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>