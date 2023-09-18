<template>
  <div class="home">
      <Header />
      <about-company />
      <benefits />
      <works-company />
      <create-company />
      <partnership-company />
      <questions-company />
  </div>
</template>

<script>
import Header from '../components/home/Header.vue'
import AboutCompany from '../components/home/AboutCompany.vue'
import Benefits from '../components/home/Benefits.vue'
import CreateCompany from '../components/home/CreateCompany.vue'
import PartnershipCompany from '../components/home/PartnershipCompany.vue'
import QuestionsCompany from '../components/home/QuestionsCompany.vue'
import WorksCompany from '../components/home/WorksCompany.vue'
export default {
  name: 'HomeView',
  components: {
    Header,
    AboutCompany,
    Benefits,
    WorksCompany,
    CreateCompany,
    PartnershipCompany,
    QuestionsCompany,
  }
}
</script>

<style ,
    CreateCompanylang="scss">
</style>