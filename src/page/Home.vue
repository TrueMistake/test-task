<template>
  <div class="container">
    <div class="wrapper">
      <app-filter></app-filter>
      <div class="catalog">
        <sort></sort>
        <template v-if="products.length">
          <div class="catalog-list">
              <app-products :products="products"></app-products>
          </div>
        </template>
        <template v-else>
          <Loader></Loader>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import appProduct from '../components/Product'
import appSort from '../components/Sort'
import appFilter from '../components/Filter'
import {useStore} from "vuex";
import {onBeforeMount, computed} from 'vue'
import Loader from "@/components/Loader";

export default {
  name: "Home",
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch('fetchProducts');
    })

    return {
      products: computed(() => store.getters.getFilterCategories)
    }
  },
  components: {
    'loader': Loader,
    'app-products': appProduct,
    'sort': appSort,
    'app-filter': appFilter
  }
}
</script>

<style>
  .container{
    max-width: 1440px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    position: relative;
  }
  @media screen and (max-width: 767px){
    .container{
      padding: 0;
    }
  }
  .wrapper{
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-column-gap: 20px;
  }
  @media screen and (max-width: 767px) {
    .wrapper{
      display: block;
    }
  }
  .catalog{
    position: relative;
  }
  .catalog-list{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
  }
  @media screen and (max-width: 1200px) {
    .catalog-list{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 992px) {
    .catalog-list{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 767px) {
    .catalog-list{
      grid-template-columns: repeat(3, 1fr);
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 576px) {
    .catalog-list{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px 10px;
    }
  }
</style>