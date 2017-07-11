<template>
  <div>
  <ul class="newitems" >
    <li class="newitem" v-for="goodsItem in goods">
      <router-link to="">
        <img :src="goodsItem.urlimg" alt="">
      </router-link>
      <div  class="item-panel">
        <div class="title clearFix">
          {{goodsItem.name}}
        </div>
        <div  class="item-price">
          <div  class="price-cont"><span  class="act-tag">限时体验价</span>
            <span>￥</span>
            <span > {{goodsItem. price}}</span>&nbsp;
            <span  class="original-price">￥{{goodsItem.oldprice}}</span>
            <span class="promo-lable">新</span></div>
          <div  class="item-comment">评论：{{goodsItem.comentNum}}</div>
        </div>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
  export default {
    props: ['goods']
  }
</script>

<style>
  .newitem {
    width: 96%;
    border: 1px solid #ddd;
    margin: 2rem auto 0;
  }

  .newitems {
    width: 96%;
    border: 1px solid #ddd;
    margin: 2rem auto 0;
  }

  .newitems a {
    width: 100%;
    overflow: hidden;
    display: block;
    position: relative;
  }
  .newitems img {
    width: 100%;
  }
 .item-panel {
   overflow: hidden;
   font-size: 1.35rem;
   line-height: 2.6rem;
    width: 100%;
    background: #fff;
    color: #333;
    padding-bottom: .3rem;
  }
 .price-cont{
   min-width: 68%;
   overflow: hidden;
   float: left;
   line-height: 1.8rem;
   margin-top: .2rem;
 }
  .item-price{
    width: 94%;
    overflow: hidden;
    margin: 0 auto;
  }
  .act-tag{
    background-color: #fff000;
  }
  .promo-lable{
    background-color: #c00;
    color: #fff;
  }
  .item-comment{
    float: right;
    text-align: right;
    color: #999;
  }
</style>
