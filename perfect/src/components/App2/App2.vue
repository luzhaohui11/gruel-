<template>
  <div id="app">
    <router-view :changeIcon="changeIcon"></router-view>
    <div id="footer">
      <div v-show="isswitchIcon" data-v-f50bca46="" data-v-60df7298="" class="download0207" style="height: 65px;"><img data-v-f50bca46=""
                                                                                                 src="http://i1.lifevccdn.com/images/aboutLifeVC/downloadTop.png"
                                                                                                 style="top: -42.0905px;">
        <a data-v-f50bca46="" href="itms-apps://itunes.apple.com/us/app/li-fu-jia-ju-jia-li-que-xiang/id961925723?mt=8"
           class="download"></a>
        <span data-v-f50bca46="" class="close"  >

        </span></div>
      <ul id="footermenuNav" @click="changeIcon">
        <li>
          <router-link to="/">
            <div class='icon1'>
              <span>首页</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/all">
            <div class="icon2">
              <span>全部产品</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/stroll">
            <div class="icon3">
              <span>闲逛</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/cart">
            <div class="icon4">
              <span>购物车</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/usercenter">
            <div class="icon5">
              <span>账户中心</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        change: true,
        isswitchIcon : true
      }
    },

  methods : {
//    switchl(){
//     this.isswitchIcon = false
//    }
    },
    created () {

    },
//updated (){
//this.$nextTick(($event)=>{
//    console.log(this)
//})
//},
    methods: {
      changeIcon ($event) {
//地址栏方法：
        let lis = document.getElementById('footermenuNav').getElementsByTagName('div')
//    转化为真数组
        lis = Array.from(lis)
        lis.forEach((item, index) => {
          item.className = 'icon' + (index + 1)
          //获取非内联元素的样式
//      console.log(window.getComputedStyle(item, null).getPropertyValue('color'))
          item.style.color = '#ababab'
        })
//    let urlTarget = $event.view.location.hash
        let urlTarget = $event.view.location.hash
        switch (urlTarget) {
          case  '#/'  :
            lis[0].style.color = '#009c42'
            lis[0].className = lis[0].className + '-1'
            break;
          case  '#/all'  :
            lis[1].style.color = '#009c42'
            lis[1].className = lis[1].className + '-1'
            break;
          case  '#/stroll'  :
            lis[2].style.color = '#009c42'
            lis[2].className = lis[2].className + '-1'
            break;
          case  '#/cart'  :
            lis[3].style.color = '#009c42'
            lis[3].className = lis[3].className + '-1'
            break;
          case  '#/usercenter'  :
            lis[4].style.color = '#009c42'
            lis[4].className = lis[4].className + '-1'
            break;
        }

//      console.log($event.view.location.hash)

//    if(urlTarget === '#/'){
//      if($event.target.className.split('-').length>1){
//     return}
//      $event.target.className =  $event.target.className+'-1'
//    }else{
//
//      $event.target.className = $event.target.className.split('-')[0]
//      console.log('$event.target.className')
//    }
//console.log($event.target.className)
        //去除classname
        //先进来把前面的都清理
        //获取ul


        //target指向只有点击背景图的时候会获取到className，只要上面有元素

//    $event.target.className =  $event.target.className+'-1'


//target指向方法，不行，指向修改后跳转之后样式依旧生效
//    if($event.target.className.split('-').length>1){
//      $event.target.className = $event.target.className.split('-')[0]
//    }else{
//      $event.target.className =  $event.target.className+'-1'
//    }
////获取地址栏的url
//    window.location.search.substr(1).match(reg);
////.nodeValue
//    }
//    console.log($event.target.className)
      }
    }

  }
</script>

<style>
  #footer {
    padding: 0;
    height: 4.5rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #f8f8f8;
    border-top: .04rem solid #ddd;
  }

  #footermenuNav {
    background: #f8f8f8;
    text-align: center;
  }

  #footermenuNav li {
    width: 20%;
    float: left;
    margin: 0 auto;
    position: relative
  }

  #footermenuNav li a {
    margin-top: 0;
    display: block;
    color: #ababab;
    line-height: .1rem;
    font-size: 1.1rem;
    vertical-align: bottom;
    text-align: center;
    text-decoration: none;
  }

  .download0207[data-v-f50bca46] {
    position: fixed;
    bottom: 4.5rem;
    left: 0;
    right: 0;
    background: url(http://i1.lifevccdn.com/images/aboutLifeVC/downloadBottom.png) no-repeat;
    background-position: 0 0;
    background-size: 100%;
    z-index: 1000;
  }

  .download0207 img[data-v-f50bca46] {
    position: absolute;
    vertical-align: middle;
    width: 15.5%;
    left: 4.8%;
  }

  .download0207 .download[data-v-f50bca46] {
    width: 100%;
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    height: 100%;
    bottom: 0;
  }

  .download0207 .close[data-v-f50bca46] {
    width: 7%;
    position: absolute;
    display: block;
    height: 2rem;
    right: 0;
    top: 0;
    bottom: 36%;
    z-index: 1000;
  }

  #footermenuNav span {
    position: relative;
    bottom: -3.5rem
  }

  #footermenuNav div {
    width: 100%;
    height: 5.3rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: .2rem;
    background-position-y: 5px;
  }

  .icon1 {
    background-image: url("./icon-1.2.png")
  }

  .icon2 {
    background-image: url("./icon-2.2.png")
  }

  .icon3 {
    width: 100%;
    height: 3.3rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: .2rem;
    background-image: url("./icon-3.2.png")
  }

  .icon4 {
    width: 100%;
    height: 3.3rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: .2rem;
    background-image: url("./icon-4.2.png")
  }

  .icon5 {
    width: 100%;
    height: 3.3rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: .2rem;
    background-image: url("./icon-5.2.png")
  }

  .icon1-1 {
    padding-bottom: 10px;
    width: 100%;
    height: 3.3rem;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: 28%;
    margin-bottom: .2rem;
    background-image: url("./icon-1.1.png")
  }

  .icon2-1 {
    background-image: url("./icon-2.1.png")
  }

  .icon3-1 {
    background-image: url("./icon-3.1.png")
  }

  .icon4-1 {
    background-image: url("./icon-4.1.png")
  }

  .icon5-1 {
    background-image: url("./icon-5.1.png")
  }

</style>

