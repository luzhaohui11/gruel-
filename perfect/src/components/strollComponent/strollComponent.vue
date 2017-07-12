<template>
    <div>
      <ul>
        <li class="stroll-item" v-for="item in  itemsList">
          <div class="stroll-item-layer">
            <span class="tag-new">New</span>
            <div class="stroll-type-item">
            <img :src="item.urlimg" alt="">
            </div>
          </div>
          <h3 class="stroll-item-title">
            <a href="javascript:void(0);">{{item.name}}</a></h3>
          <div class="stroll-price-bar">
            <span class="price">￥<span>{{item.price}}</span></span>
            <span class="original" v-if="item.oldprice">￥{{item.oldprice}}</span>
            <span class="comment">月销 2662</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        props:['itemsList']
    }
</script>

<style>
  .stroll-item {
    margin: 3%;
    width: 94%;
    clear: both;
  }
  .stroll-type-item {
    margin: 0 1%;
  }
  .stroll-item-layer {
    position: relative;
    border-radius: 8px;
  }
  .stroll-item img {
    border-radius: 8px;
    width: 100%;
    height: 236.4px;
  }
  .stroll-item .tag-new {
    background-color: #79da87;
    max-width: 94%;
    overflow: hidden;
    display: inline-block;
    text-align: left;
    font-size: .8rem;
    color: #fff;
    line-height: 1.4rem;
    text-transform: uppercase;
    padding: 0 .5rem;
    position: absolute;
    left: 0;
    top: .8rem;
    z-index: 6;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
  .stroll-item-title {
    font-size: .95rem;
    padding: .4rem 0 .2rem;
    overflow: hidden;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
  }
  .stroll-item-title a {
    color: #333;
    text-decoration: none;
    font-size: 1.35rem;
  }
  .stroll-price-bar {
    text-align: left;
    width: 100%;
    font-size: .9rem;
    height: 1.5rem;
    overflow: hidden;
  }
  .stroll-price-bar .price {
    font-size: 1.8rem;
    line-height: 1.5rem;
    display: inline-block;
    color: #ff475d;
    font-weight: 400;
    overflow: hidden;
    text-align: left;
    width: auto;
  }
  .stroll-price-bar .comment {
    font-size: 1.4rem;
    line-height: 1.5rem;
    width: auto;
    max-width: none;
    overflow: hidden;
    float: right;
    display: inline-block;
    text-align: right;
    color: #999;
    white-space: nowrap;
    word-break: keep-all;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
  .stroll-price-bar .original {
    font-size: .9rem;
    display: inline-block;
    color: #888;
    text-decoration: line-through;
    margin-left: 5px;
  }
</style>
