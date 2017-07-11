<template>
    <div>
      <header id="headerwrapper">
        <div id="header">
          <p class="header-title">全部产品</p>
        </div>
        <div class="header-2877 all-header" >
          <form id="allInpt">
          <input  type="search" placeholder="搜索商品" :class="change" @click="searchinput">
          <input id="btnCancel" type="button" value="取消" class="sch-cancel" @click="schCancel">
          </form>
          </div>
      </header>
        <div id="allcontent">
          <goodslist :products="products"></goodslist>
          <goodslist :products="products"></goodslist>
          <goodslist :products="products"></goodslist>
          <goodslist :products="products"></goodslist>
          </div>
    </div>
</template>

<script>
  import goodslist from '../goodslist/goodslist.vue'
    export default {
        data () {
            return{
                change : 'searchinput'
            }
        },
created () {
            this.products=[
              {
                  home:'channelsub/2860/2877',
                  kind:'家务',
                  goods : [
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
            ]
},
methods : {
  searchinput () {
      console.log(this.change )
      this.change = 'changestyle'
  },
  schCancel () {
      this.change = 'searchinput'
    }
},
components : {
  goodslist
}
    }
</script>

<style>
  #allcontent{
    position: absolute;
    width: 100%;
    top: 80px;
    height: 541.2px;
    overflow-y: scroll;

  }
.all-header{
  background-color: #f2f2f2;
}
.searchinput{
  width: 100%;
  height: 3rem;
  background-color: #fff;
  background-image: url('./glass.png');
  background-repeat: no-repeat;
  background-position: 38% .5rem;
  background-size: auto 70%;
  border: 0;
  border-radius: 6px;
  text-align: center;
  font-size: 1.6em;
  color: #1f5350;
  font-family: Microsoft YaHei;
  margin: 0;
  padding-left: 3rem;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
}
.sch-cancel{
  outline: none;
  width: 15%;
  height: 3rem;
  display: block;
  float: right;
  background: none;
  background-color: transparent;
  border: 0;
  text-align: center;
  font-size: 1.5rem;
  color: #83b842;
  line-height: 3rem;
}
#allInpt{
  position: relative;
  top: .5rem;
}
.changestyle{
  outline: none;
    height: 3rem;
    background-color: #fff;
    background-image: url('./glass.png');
    background-repeat: no-repeat;
    background-position: 38% .5rem;
    background-size: auto 70%;
    border: 0;
    border-radius: 6px;
    text-align: center;
    font-size: 1.6em;
    color: #1f5350;
    font-family: Microsoft YaHei;
    margin: 0;
    padding-left: 3rem;
    position: absolute;
    left: 5px;
    top: 0;
    z-index: 5;
    width: 83%!important;
    background-position: .4rem .5rem!important;
    text-align: left!important;
  }
</style>
