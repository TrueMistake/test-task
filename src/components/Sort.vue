<template>
  <div class="sort">
    <select @change="changeSort()" v-model="selected">
      <option value="">Сортировка</option>
      <option value="priceDown">Цена по убиванию</option>
      <option value="priceUp">Цена по возростанию</option>
    </select>
  </div>
</template>

<script>
import {ref} from "vue";
import {useStore} from "vuex";

export default {
  name: "Sort",
  setup() {
    const selected = ref('');
    const store = useStore();

    const changeSort = () => {
      store.dispatch('sortCatalog', selected.value)
    }

    return {
      changeSort,
      selected
    }
  }
}
</script>

<style scoped>
  .sort{
    padding: 10px 20px;
    background: #f1f6f7;
    margin-bottom: 30px;
  }
  .sort select{
    border-radius: 0;
    border: 1px solid #eee;
    padding: 5px;
    height: 40px;
    color: #999999;
  }
</style>