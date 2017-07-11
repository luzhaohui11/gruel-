<template>
<div>
  <ul id="blockcartegory" v-for="goods in homegoods">
    <li>
      <router-link :to="url"><img :src="goods.avater" alt="">
      <dt>
      {{goods.name}}
      </dt></router-link>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
        props:['homegoods','url']
    }
</script>

<style >
  #blockcartegory {
    background: #fff;
  }
  #blockcartegory li {
    width: 25%!important;
    margin: 1rem 0;
    float: left;
    text-align: center;
  }
  #blockcartegory li a {
    display: block;
  }
  #blockcartegory li a img{
    width: 80%;
    margin: auto;
  }
  #blockcartegory li a dt{
    height: 2rem;
    line-height: 2rem;
    font-size: 1.3rem;
  }
</style>
