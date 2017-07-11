<template>
  <div>
    <header id="headerwrapper">
      <div id="header">
      <router-link to="/channel/2860">
      <span  class="btn-back">
        <label class="leftback-img">
        </label>
      </span>
      </router-link>
      <p class="header-title">家务</p>
      </div>
      <div class="header-2877">
        <ul>
          <li>
            <router-link to="">新品</router-link>
          </li>
          <li>
            <router-link to="">畅销</router-link>
          </li>
          <li>
            <router-link to="">价格</router-link>
          </li>
        </ul>
      </div>
      <div id="homecontent">
        <imgs :goods="goods"></imgs>
      </div>
    </header>
  </div>
</template>

<script>
  import imgs from '../img/img.vue'
  export default {
      created () {
        this.goods=[
          {name:'洗衣防水巾(30片)',
            price:9,
            oldprice:19,
            comentNum:0,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'},
          {name:'全棉舒适四件套(绵羊)',
            price:269,
            oldprice:319,
            comentNum:0,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'},
          {name:'耐磨高弹力旅行箱保护套',
            price:39,
            oldprice:49,
            comentNum:1,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'},
          {name:'防滑金属衣架(3只装)',
            price:19,
            oldprice:'',
            comentNum:3,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'},
          {name:'席梦思保护套(梦幻系列)',
            price:109,
            oldprice:'',
            comentNum:109,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'},
          {name:'分类整理收纳箱',
            price:39,
            oldprice:'',
            comentNum:8,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'},
          {name:'便携式防水防污购物袋 ',
            price:49,
            oldprice:'',
            comentNum:26,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'},
          {name: '专业防水运动包',
            price:49,
            oldprice:'',
            comentNum:26,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'},
          {name:'折叠式差旅多功能包',
            price:49,
            oldprice:'',
            comentNum:22,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'},
          {name:'高端合金框飞机轮商务箱',
            price:399,
            oldprice:'',
            comentNum:0,
            urlimg:'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'},

        ]
      },
      components : {
        imgs
      }
  }
</script>

<style>
  /*.header {*/
    /*padding: 0;*/
    /*width: 100%;*/
    /*background: #89be48;*/
    /*position: fixed;*/
    /*top: 0;*/
    /*z-index: 999;*/
    /*margin: auto;*/
  /*}*/


.header-2877 ul{
  padding: .4rem 2%;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  height: 3rem;
}
.header-2877 ul li{
  float: left;
  width: 33.33333%;
  height: 3rem;
  line-height: 3rem;
}
.header-2877 ul li a{
  display: block;
  position: relative;
  height: 1.4rem;
  line-height: 1.4rem;
  border-right: 1px solid #f2f2f2;
  text-align: center;
  margin-top: .8rem;
  font-size: 1.35rem;
  color: #666;
}


  #header  leftback-img {
    width: 1rem;
    height: 2.6rem;
    display: block;
    float: left;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeAQMAAAAW3KwoAAAABlBMV…AuHxDLALEFEBcA8QMc0lAsAxYDyYHUgNSC9ID04lNwAACHIArVHBwTzAAAAABJRU5ErkJggg==) no-repeat;
    position: absolute;
    left: 4%;
    top: .6rem;
  }

</style>
