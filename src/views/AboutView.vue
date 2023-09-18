<template>
  <div class="about">
    <Header />
    <values-company />
    <materials-company />
    <variants-company />
    <furniture-company />
    <production-company />
  </div>
</template>

<script>
import FurnitureCompany from '../components/about/FurnitureCompany.vue'
import Header from '../components/about/Header.vue'
import MaterialsCompany from '../components/about/MaterialsCompany.vue'
import ProductionCompany from '../components/about/ProductionCompany.vue'
import ValuesCompany from '../components/about/ValuesCompany.vue'
import VariantsCompany from '../components/about/VariantsCompany.vue'
export default {
  name: 'HomeView',
  components: {
    Header,
    ValuesCompany,
    MaterialsCompany,
    VariantsCompany,
    FurnitureCompany,
    ProductionCompany,
    
  }
}
</script>