<template>
  <div class="main">
    <div class="header">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link :to="{name: 'Home'}" tag="a" exact exact-active-class="_active" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Favorites'}" tag="a" exact exact-active-class="_active" class="nav-link">Favorites</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
  *,*:before,*:after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial;
  }
  .header{
    position: relative;
    display: grid;
    align-items: center;
    width: 100%;
    height: 90px;
    margin-bottom: 50px;
    z-index: 9;
    transition: background 0.4s, all 0.3s linear;
    box-shadow: 0 10px 27px 3px rgb(221, 221, 221, 30%);
  }
  .nav-list{
    display: grid;
    grid-template-columns: repeat(2, 100px);
    justify-content: center;
  }
  .nav-item{
    list-style-type: none;
  }
  .nav-link{
    font-size: 18px;
    line-height: 20px;
    text-transform: capitalize;
    color: #222;
    display: inline-block;
    text-decoration: none;
  }
</style>
