<template>
  <div class="life-goodsAll">
    <div >
      <ul class="life-goodsBox" v-for="product in products">
        <router-link :to="product.home">
        <li >
            <div class="life-goodsTip">
            <dl class="life-goodsMark">
              {{product.kind}}
            </dl>
            </div>
          <ul class="life-goodsUl clearFix onlyStyle" v-for="goods in product.goods">
            <li>
              <img :src="goods.avater" alt="">
              <dl>{{goods.name}}</dl>
            </li>
          </ul>
        </li>
        </router-link >
      </ul>


    </div>
  </div>
</template>

<script>
    export default {
      props: ['products']
    }
</script>

<style>
  .life-goodsUl {
    background: #fff;
  }
  .onlyStyle li {
    float: left;
    width: 33%;
    text-align: center;
    border: 1px solid #f1f1f1;
    margin: 0 0 -1px -1px;
  }
  .onlyStyle li img {
    width: 60%!important;
    margin: auto;
    padding-top: 1rem;
  }
  .life-goodsTip{
    width: 100%;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin: auto;
    text-align: center;
    background-color: #f2f2f2;
  }
  .life-goodsMark{
    color: #000;
    font-size: 1.8rem;
    letter-spacing: .2rem;
    position: relative;
  }
  .onlyStyle li dl {
    height: 2rem;
    line-height: 2rem;
    padding-bottom: 1rem;
    padding-top: .5rem;
    font-size: 1.3rem;
  }
  .life-goodsAll{
    overflow: hidden;
  }
</style>
