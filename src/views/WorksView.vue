<template>
  <div class="works">
    <Header />
    <works-company />
  </div>
</template>

<script>
import WorksCompany from '../components/works/WorksCompany.vue'
import Header from '../components/works/Header.vue'
export default {
  name: 'WorksView',
  components: {
    Header,
    WorksCompany
    
  }
}
</script>