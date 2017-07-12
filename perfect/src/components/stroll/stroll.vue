<template>
  <div>
    <div id="header"><p class="header-title">闲逛</p></div>
    <div id="strollContet">
      <div class="stroll-all-item">
        <strollComponent :items-list="itemsList "></strollComponent>
      </div>
      <div class="stroll-all-item">
        <div  class="stroll-item">
          <div class="stroll-type-item  clearFix">
            <div class="cat-menu-a"><span>49元包1年</span></div>
            <div class="cat-menu-a"><span>今日新品</span></div>
            <div class="cat-menu-a"><span>送500元积分</span></div>
            <div class="cat-menu-a"><span>金币商城</span></div>
          </div>
        </div>
        <strollComponent :items-list="itemsList "></strollComponent>
      </div>
    </div>
  </div>
</template>

<script>
  import strollComponent from '../strollComponent/strollComponent.vue'
  export default {
    created () {
      this.itemsList = [
        {
          name: '洗衣防水巾(30片)',
          price: 9,
          oldprice: 19,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'
        },
        {
          name: '全棉舒适四件套(绵羊)',
          price: 269,
          oldprice: 319,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'
        },
        {
          name: '耐磨高弹力旅行箱保护套',
          price: 39,
          oldprice: 49,
          comentNum: 1,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'
        },
        {
          name: '防滑金属衣架(3只装)',
          price: 19,
          oldprice: '',
          comentNum: 3,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'
        },
        {
          name: '席梦思保护套(梦幻系列)',
          price: 109,
          oldprice: '',
          comentNum: 109,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'
        },
        {
          name: '分类整理收纳箱',
          price: 39,
          oldprice: '',
          comentNum: 8,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'
        },
        {
          name: '便携式防水防污购物袋 ',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'
        },
        {
          name: '专业防水运动包',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'
        },
        {
          name: '折叠式差旅多功能包',
          price: 49,
          oldprice: '',
          comentNum: 22,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'
        },
        {
          name: '高端合金框飞机轮商务箱',
          price: 399,
          oldprice: '',
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'
        },
        {
          name: '洗衣防水巾(30片)',
          price: 9,
          oldprice: 19,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'
        },
        {
          name: '全棉舒适四件套(绵羊)',
          price: 269,
          oldprice: 319,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'
        },
        {
          name: '耐磨高弹力旅行箱保护套',
          price: 39,
          oldprice: 49,
          comentNum: 1,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'
        },
        {
          name: '防滑金属衣架(3只装)',
          price: 19,
          oldprice: '',
          comentNum: 3,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'
        },
        {
          name: '席梦思保护套(梦幻系列)',
          price: 109,
          oldprice: '',
          comentNum: 109,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'
        },
        {
          name: '分类整理收纳箱',
          price: 39,
          oldprice: '',
          comentNum: 8,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'
        },
        {
          name: '便携式防水防污购物袋 ',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'
        },
        {
          name: '专业防水运动包',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'
        },
        {
          name: '折叠式差旅多功能包',
          price: 49,
          oldprice: '',
          comentNum: 22,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'
        },
        {
          name: '高端合金框飞机轮商务箱',
          price: 399,
          oldprice: '',
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'
        },
        {
          name: '洗衣防水巾(30片)',
          price: 9,
          oldprice: 19,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'
        },
        {
          name: '全棉舒适四件套(绵羊)',
          price: 269,
          oldprice: 319,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'
        },
        {
          name: '耐磨高弹力旅行箱保护套',
          price: 39,
          oldprice: 49,
          comentNum: 1,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'
        },
        {
          name: '防滑金属衣架(3只装)',
          price: 19,
          oldprice: '',
          comentNum: 3,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'
        },
        {
          name: '席梦思保护套(梦幻系列)',
          price: 109,
          oldprice: '',
          comentNum: 109,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'
        },
        {
          name: '分类整理收纳箱',
          price: 39,
          oldprice: '',
          comentNum: 8,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'
        },
        {
          name: '便携式防水防污购物袋 ',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'
        },
        {
          name: '专业防水运动包',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'
        },
        {
          name: '折叠式差旅多功能包',
          price: 49,
          oldprice: '',
          comentNum: 22,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'
        },
        {
          name: '高端合金框飞机轮商务箱',
          price: 399,
          oldprice: '',
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'
        },
        {
          name: '洗衣防水巾(30片)',
          price: 9,
          oldprice: 19,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'
        },
        {
          name: '全棉舒适四件套(绵羊)',
          price: 269,
          oldprice: 319,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'
        },
        {
          name: '耐磨高弹力旅行箱保护套',
          price: 39,
          oldprice: 49,
          comentNum: 1,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'
        },
        {
          name: '防滑金属衣架(3只装)',
          price: 19,
          oldprice: '',
          comentNum: 3,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'
        },
        {
          name: '席梦思保护套(梦幻系列)',
          price: 109,
          oldprice: '',
          comentNum: 109,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'
        },
        {
          name: '分类整理收纳箱',
          price: 39,
          oldprice: '',
          comentNum: 8,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'
        },
        {
          name: '便携式防水防污购物袋 ',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'
        },
        {
          name: '专业防水运动包',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'
        },
        {
          name: '折叠式差旅多功能包',
          price: 49,
          oldprice: '',
          comentNum: 22,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'
        },
        {
          name: '高端合金框飞机轮商务箱',
          price: 399,
          oldprice: '',
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'
        },
        {
          name: '洗衣防水巾(30片)',
          price: 9,
          oldprice: 19,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'
        },
        {
          name: '全棉舒适四件套(绵羊)',
          price: 269,
          oldprice: 319,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'
        },
        {
          name: '耐磨高弹力旅行箱保护套',
          price: 39,
          oldprice: 49,
          comentNum: 1,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'
        },
        {
          name: '防滑金属衣架(3只装)',
          price: 19,
          oldprice: '',
          comentNum: 3,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'
        },
        {
          name: '席梦思保护套(梦幻系列)',
          price: 109,
          oldprice: '',
          comentNum: 109,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'
        },
        {
          name: '分类整理收纳箱',
          price: 39,
          oldprice: '',
          comentNum: 8,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'
        },
        {
          name: '便携式防水防污购物袋 ',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'
        },
        {
          name: '专业防水运动包',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'
        },
        {
          name: '折叠式差旅多功能包',
          price: 49,
          oldprice: '',
          comentNum: 22,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'
        },
        {
          name: '高端合金框飞机轮商务箱',
          price: 399,
          oldprice: '',
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'
        },
        {
          name: '洗衣防水巾(30片)',
          price: 9,
          oldprice: 19,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/22ff9444fc364a4cb66a5b31e2eb805b_d1242x0.jpg'
        },
        {
          name: '全棉舒适四件套(绵羊)',
          price: 269,
          oldprice: 319,
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/5bcd664da38e459aa7cf2e8c2c2542ab_d1242x0.jpg'
        },
        {
          name: '耐磨高弹力旅行箱保护套',
          price: 39,
          oldprice: 49,
          comentNum: 1,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/e9c796325d644c80b8eee21e94fb2e46_d1242x0.jpg'
        },
        {
          name: '防滑金属衣架(3只装)',
          price: 19,
          oldprice: '',
          comentNum: 3,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/17ef2de78aca4bdabc82697e743ca707_d1242x0.jpg'
        },
        {
          name: '席梦思保护套(梦幻系列)',
          price: 109,
          oldprice: '',
          comentNum: 109,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/4e3696ca1ee14a7c80a29b98fdbcf6a6_d1242x0.jpg'
        },
        {
          name: '分类整理收纳箱',
          price: 39,
          oldprice: '',
          comentNum: 8,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/16b39b0ca5504a59b1dd8347d540287f_d1242x0.jpg'
        },
        {
          name: '便携式防水防污购物袋 ',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/1e499193e70d4ebba44f7d77edac9e86_d1242x0.jpg'
        },
        {
          name: '专业防水运动包',
          price: 49,
          oldprice: '',
          comentNum: 26,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/6b4df93f9686487cb33f072ad0cd9556_d1242x0.jpg'
        },
        {
          name: '折叠式差旅多功能包',
          price: 49,
          oldprice: '',
          comentNum: 22,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/019e6f4dd8fb4c69b67291336c5ec78b_d1242x0.jpg'
        },
        {
          name: '高端合金框飞机轮商务箱',
          price: 399,
          oldprice: '',
          comentNum: 0,
          urlimg: 'http://i.lifevccdn.com/upload/AppItemInfoImage/07f53b859b274e158d2ab06c3bc519c5_d1242x0.jpg'
        },

      ]
    },
    components: {
      strollComponent
    }
  }
</script>

<style>
  .stroll-all-item {
    width: 50%;
    float: left;
    margin-top: 4rem;
  }
  .stroll-item {
    margin: 3%;
    width: 94%;
    clear: both;
  }
  .stroll-type-item {
    margin: 0 1%;
  }
  .cat-menu-a {
    width: 47%;
    min-height: 3rem;
    background-color: #eaeaea;
    border: 0;
    border-radius: 8px;
    font-size: 1.35rem;
    color: #4a4a4a;
    padding: .95rem .5%;
    margin: 1%;
    float: left;
    display:flex;
  }
  .cat-menu-a span {
    margin: auto;
  }

</style>
