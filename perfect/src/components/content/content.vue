<template>
  <div>
    <div id="contentwrapper-out">
    <div class="contentwrapper">
    <header class="header">
      <div id="header-icon"></div>
      <span  @click="changeIcon" >
      <router-link to="/all" class="head-typeimg" ><span></span></router-link>
    </span>
    </header>
    <div>
      <div id="header-band">
        <ul>
          <router-link to="/">
          <li>
         首页
          </li>
          </router-link>

            <router-link to="/New" > <li class="bands">新品  </li></router-link>


            <router-link to="/channel/2860"><li>家务</li></router-link>


            <router-link to="/channel/2859"><li>下厨</li>
            </router-link>

            <router-link to="/channel/2865"><li>家居服 </li></router-link>


            <router-link to="/channel/2861">
              <li>生活</li></router-link>


            <router-link to="/channel/3260">
              <li>软装  </li>
</router-link>


            <router-link to="/channel/2862"><li>床品</li></router-link>


          <router-link to="/channel/2863"><li>工作和旅行 </li></router-link>


            <router-link to="/#"  ><li>了解LifeVC</li></router-link>

        </ul>
      </div>
    </div>
    </div>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
      props:['changeIcon'],

        methods : {
          change() {
                console.log(this.changeIcon)
              this.changeIcon()
            },

        }

  }
</script>

<style>


  #header-band::-webkit-scrollbar {
    height: 0px;
    background-color: #e3e3e3;
    opacity:1;
  }

  #header-icon {
    display: block;
    width: 100%;
    height: 4rem;
    background: url('./header_logo.png') no-repeat;
    background-size: 50%;
    background-position: 50%;
  }

  .head-typeimg {
    width: 3.666666rem;
    height: 3.666666rem;
    position: absolute;
    top: 0;
    right: 0;
    background-size: 45%;
    background-image: url('./header_icon.png');
    background-repeat: no-repeat;
    background-position: 50%;
  }

  #header-band {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 4rem;
    overflow: hidden;
    overflow-x: scroll;
  }

  #header-band ul {
    overflow: hidden;
    line-height: 4rem;
    width: 800px;
  }

  #header-band ul li {
    width: 80px;
    text-align: center;
    height: 4rem;
    float: left;
    box-sizing: border-box;
    border-bottom: 2px solid #ddd;
  }

  #header-band  a li {
    height: 3.8rem;
    display: block;
    line-height: 3.8rem;
    padding: 0;
    position: relative;
    font-size: 1.35rem;
    color: #333;
  }
.active .bands{
    color: #80b532;
    border-bottom: 2px solid #80b532;
  }
</style>
