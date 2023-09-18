<template>
  <div id="app">
    <auth-form v-if="isFormVisible" @formSubmitted="hideForm" />
    <div v-else>
      <Menu />
      <router-view />
      <Apply />
      <Footer />
    </div>
  </div>
</template>

<script>
import Apply from './components/Apply.vue';
import AuthForm from './components/AuthForm.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';

export default {
  components: {
    Menu,
    Apply,
    Footer,
    AuthForm,
  },
  data() {
    return {
      isFormVisible: !localStorage.getItem('isLoggedIn')
    };
  },
  methods: {
    hideForm() {
      this.isFormVisible = false;
      localStorage.setItem('isLoggedIn', true);
    }
  }
};
</script>
