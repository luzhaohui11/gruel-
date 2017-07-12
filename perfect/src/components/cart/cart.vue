<template>
  <div>
    <header id="headerwrapper">
      <div id="header">
        <span><label></label></span>
        <p class="header-title">购物车</p></div>
      <div id="cartheaderwrapper">
        <div class="cartheader   ">
          <div class="header-login">
            <router-link to="/login" class="btn-login">登录</router-link>
            <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
          </div>
        </div>
        <div class="cartheader  cartHeaderBottom">

          <div class="header-login">
            <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码"
                   class="exch-ipt">
            <input type="button" value="兑换" class="exch-btn">
          </div>
        </div>
      </div>
    </header>
    <div class="wrap-cart-cont">
      <div id="carts-img">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzRDMkZFMUZEQzVCMTFFNjkyNTRBMTMwNjdBRDU3NEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzRDMkZFMjBEQzVCMTFFNjkyNTRBMTMwNjdBRDU3NEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNEEyMkVFMURDNUIxMUU2OTI1NEExMzA2N0FENTc0QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNEEyMkVFMkRDNUIxMUU2OTI1NEExMzA2N0FENTc0QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt3GYJ4AAAyUSURBVHja7J1Ni1TL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"
          alt="购物车" style="vertical-align: middle; max-width: 160px;"></div>
      <div  id="carts-text font-medium"
           style="text-align: center; font-size: 1.8rem; color: rgb(102, 102, 102); line-height: 3rem;"><p
       >您的购物车还是空荡荡的</p></div>
      <div  id="carts-link font-medium" style="text-align: center;">
        <a data-v-5cc9f28f="" href="#/" style="border: 1px solid rgb(137, 190, 72); padding: 0.5rem 1.5rem; display: inline-block; border-radius: 6px; font-size: 1.5rem; letter-spacing: 1px; margin-top: 6px; color: rgb(137, 190, 72);">赶紧去逛逛</a>
      </div>
    </div>
    <div class="cart-assem-title">
      <p >Rico.S为你精心推荐</p></div>
    <div class="cart-assem-list">
      <ul >
        <li v-for="goods in homegoods">
          <router-link to="">
          <img :src="goods.avater" alt="" style="width: 100%">
          </router-link>
        <p class="title">{{goods.name}}</p>
          <p class="price">￥29</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
      created () {
        this.homegoods = [
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/54079a754099447281e284d45a5c078b.jpg',
            'name': '家务工具'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/04597da396224b39a5184c7b031c507d.jpg',
            'name': '家庭清洁剂'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/f14c5afd18a74be197bbef999e58387e.jpg',
            'name': '防霉除菌'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/4f4dc02735f74e568d7adbe6ac1522f2.jpg',
            'name': '百纳箱'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/33daaf6cfaa345e8a475ce8ea932a393.jpg',
            'name': '衣物收纳'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/9bbb1b97d5c04460a76fde006f08c6ea.jpg',
            'name': '酵素洗衣液'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/4a8a241b4f7041b2b6bd9bfa1d24a87c.jpg',
            'name': '魔力挂钩'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/6f88e8a13af944019d6b8cee8c723b7e.jpg',
            'name': '生活必备'
          },
          {
            'avater': 'http://i.lifevccdn.com/upload/AppIndexIcon/eef70d4649914a2c9323e16c9907d62d.jpg',
            'name': '地毯地垫'
          },
        ]
      }
  }
</script>

<style>
  .cartheader {
    height: 4rem;
    width: 100%;
    background-color: #f0fae6;
  }
  .cart-assem-title {
    width: 94%;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    text-align: left;
    font-size: 1.6rem;
    color: #333;
    line-height: 2rem;
    margin: 0 auto;
    padding: .8rem 3%;
  }
  #cartheaderwrapper {
    position: absolute;
    top: 4rem;
    width: 100%;
  }
.cart-assem-list {
  width: 100%;
  max-height: 12rem;
  overflow-y: hidden;
  overflow-x: scroll;
  margin: 0 auto;
  padding: 1.3rem 0;
}
  .cartheader .btn-login {
    width: 18%;
    height: 2.6rem;
    display: block;
    background: #fff;
    border: 1px solid #8bc146;
    text-align: center;
    font-size: 1.5rem;
    color: #88c13e;
    line-height: 2.5rem;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cart-assem-list ul {
    overflow: hidden;
    height: 12rem;
    width: 1000px;
  }
  .cart-assem-list::-webkit-scrollbar {
    height: 0px;
    background-color: #e3e3e3;
    opacity:1;
  }
  .wrap-cart-cont {

    border-bottom: 1px solid #f6f6f6;
    color: gray;
    padding-bottom: 8.5rem;
    padding-top: 11.4rem;
    background-color: #f2f2f2;
  }
  .cart-assem-list li {
    margin: 0 5px;
    width: 8rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    text-align: left;
  }
  #carts-img {
    margin: 0 auto;
    text-align: center;
    padding-left: 2rem;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .cart-assem-item img {
    width: 100%;
    overflow: hidden;
    display: block;}
  .cartheader .login-tip {
    width: 100%;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    font-size: 1.4rem;
    color: #333;
    line-height: 1.5rem;
  }
  .cart-assem-item .title {
    width: 100%;
    overflow: hidden;
    display: block;
    text-align: left;
    font-size: 1rem;
    color: #333;
    line-height: 2rem;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: keep-all;}
  .cartHeaderBottom {
    background-color: white;
    border-bottom: 1px solid #e8efe0;
  }

  .header-login {
    top: .5rem;
    width: 74%;
    min-height: 2.8rem;
    display: table;
    overflow: hidden;
    margin: 0 auto;
    padding: 0 0 0 21%;
    position: relative;
  }

  .exch-ipt {
    left: -7rem;
    position: relative;
    padding-left: 10px;
    width: 96%;
    height: 2.8rem;
    line-height: 2.8rem;
    display: inline-block;
    border-radius: 0;
    border: 1px solid #e7e7e7;
    background: #fff;
    text-align: center;
    font-size: 1.4rem;
  }

  .exch-btn {
    width: 20%;
    height: 3rem;
    line-height: 3rem;
    display: inline-block;
    border-radius: 0;
    background: #fff;
    text-align: center;
    font-size: 1.6rem;
    color: #6fbd00;
    letter-spacing: .1rem;
    text-indent: .2rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 3;
    border: 1px solid #6fbd00;
  }
</style>
