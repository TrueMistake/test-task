<template>
  <div class="product-item" v-for="product of products" :key="product.id">
    <div class="product-item__favorite" @click.stop.prevent="addFavorite(product)">
      <svg v-if="favorite.filter(elem => product.id === elem.id).length === 0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1016 5.53504C17.0625 3.81238 13.9336 4.05848 12 6.06238C10.0313 4.05848 6.90237 3.81238 4.86331 5.53504C2.22659 7.74988 2.61331 11.371 4.51174 13.3046L10.6641 19.5975C11.0157 19.9491 11.4727 20.16 12 20.16C12.4922 20.16 12.9492 19.9491 13.3008 19.5975L19.4883 13.3046C21.3516 11.371 21.7383 7.74988 19.1016 5.53504ZM18.2578 12.1093L12.1055 18.4022C12.0352 18.4725 11.9649 18.4725 11.8594 18.4022L5.70706 12.1093C4.40628 10.8085 4.16018 8.34754 5.95315 6.83582C7.32424 5.67566 9.43362 5.85145 10.7696 7.18738L12 8.45301L13.2305 7.18738C14.5313 5.85145 16.6407 5.67566 18.0117 6.80066C19.8047 8.34754 19.5586 10.8085 18.2578 12.1093Z" fill="#353642"/>
      </svg>
      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2422 5.46479C17.3086 3.81244 14.461 4.12885 12.668 5.95698L12 6.6601L11.2969 5.95698C9.53911 4.12885 6.65629 3.81244 4.7227 5.46479C2.50786 7.36323 2.40239 10.7382 4.37114 12.7773L11.1914 19.8085C11.6133 20.2656 12.3516 20.2656 12.7735 19.8085L19.5938 12.7773C21.5625 10.7382 21.4571 7.36323 19.2422 5.46479Z" fill="#353642"/>
      </svg>
    </div>
    <img class="product-item__img" :src="product.image" alt="" />
    <div class="product-item__body">
      <p class="product-item__category">{{product.category}}</p>
      <h4 class="product-item__title">{{product.title}}</h4>
      <p class="product-item__price">${{product.price}}</p>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Product",
  props: ['products'],
  setup() {
    const store = useStore();

    const addFavorite = (product) => {
      store.dispatch('changeFavorites', product)
    }

    return{
      addFavorite,
      favorite: computed(() => store.getters.addFavorite)
    }
  }
}
</script>

<style scoped>
  .product-item{
    display: block;
    width: 100%;
    position: relative;
  }
  @media screen and (max-width: 440px){
    .product-item{
      max-width: 350px;
      width: 100%;
      margin: 0 auto 20px;
    }
  }
  .product-item__favorite{
    position: absolute;
    top: 15px;
    right: 15px;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    padding: 10px;
    z-index: 20;
  }
  .product-item__favorite label{
    cursor: pointer;
  }
  .product-item__favorite input{
    position: absolute;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
  }
  .product-item:hover .product-item__favorite{
    opacity: 1;
    visibility: visible;
  }
  .product-item__img{
    display: block;
    max-width: 300px;
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin: 0 auto;
  }
  @media screen and (max-width: 1440px){
    .product-item__img{

    }
  }
  .product-item__body{
    padding: 10px;
    text-align: center;
  }
  .product-item__category{
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 10px;
  }
  .product-item__title{
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
    color: #000;
  }
  .product-item__price{
    font-size: 20px;
    line-height: 24px;
    color: #000;
    font-weight: bold;
  }
</style>