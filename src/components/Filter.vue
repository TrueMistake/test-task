<template>
    <div class="category">
      <h2 @click="updateWidth">Фильтр</h2>
      <div class="category-wrapper">
        <div class="category-block">
          <label class="category-label" v-for="category of categories" :key="category">
            <input type="radio" name="category" :value="category" v-model="cat">
            <span>{{category}}</span>
          </label>
        </div>
        <button class="btn success" @click="Success()">применить</button>
        <button class="btn clear" @click="Clear()">сбросить</button>
      </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, ref} from "vue";

export default {
  name: "Filter",
  setup() {
    const store = useStore();
    const cat = ref([]);

    const Success = () => {
      store.dispatch('filterCategories', cat.value)
    }

    const Clear = () => {
      store.dispatch('clearFilter')
      cat.value = []
    }

    const updateWidth = () => {
      if (window.innerWidth < 767) {
        const acc = document.querySelector(".category > h2");
        acc.classList.toggle("active");
        const panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    }


    return {
      Success,
      Clear,
      cat,
      updateWidth,
      categories: computed(() => store.getters.getCategory)
    }
  }
}
</script>

<style scoped>
  .category{
    border-radius: 6px;
    align-self: baseline;
  }
  @media screen and (max-width: 767px) {
    .category{
      margin-bottom: 30px;
    }
  }
  h2{
    line-height: 50px;
    background: #384aeb;
    padding: 0 30px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
  }
  .category-wrapper{
    background: #f1f6f7;
    padding: 20px 0;
  }
  @media screen and (max-width: 767px){
    .category-wrapper{
      padding: 0 18px;
      background-color: white;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
    }
  }
  .category-label{
    display: block;
    padding: 10px 0;
    margin: 0 10px;
    cursor: pointer;
  }
  .category-label input{
    position: absolute;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  .category-label span{
    position: relative;
    padding-left: 30px;
  }
  .category-label span:before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    border-radius: 50%;
    border: 1px solid #000;
    width: 20px;
    height: 20px;
  }
  .category-label span:after{
    
  }
  .category-label input:checked + span:after{
    position: absolute;
    content: '';
    top: 5px;
    left: 5px;
    width: 10px;
    height: 10px;
    background: #000;
    border-radius: 50%;
  }
  .btn{
    display: block;
    border: 1px solid #384aeb;
    border-radius: 30px;
    color: #fff;
    font-weight: 500;
    padding: 12px 50px;
    background: #384aeb;
    cursor: pointer;
    transition: all .4s ease;
    margin-top: 20px;
  }
  .btn:hover{
    border-color: #384aeb;
    background: transparent;
    color: #222;
  }
  .success{

  }
  .clear{
    background: grey;
    border: 1px solid grey;
  }
  .btn.clear:hover{
    background: transparent;
    border: 1px solid grey;
  }
</style>