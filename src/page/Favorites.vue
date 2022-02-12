<template>
  <div class="container">
    <template v-if="products.length">
      <div class="catalog-list">
        <app-products :products="products"></app-products>
      </div>
    </template>
    <template v-else>
      <h1>Избранное пустое</h1>
    </template>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import appProduct from "@/components/Product";

export default {
  name: "Favorites",
  setup() {
    const store = useStore();

    return {
      products: computed(() => store.getters.addFavorite)
    }
  },
  components: {
    'app-products': appProduct
  }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
</style>