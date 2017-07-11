<template>
  <div>
    <header id="header">
      <div id="header-icon"></div>
      <router-link to="/all" class="head-typeimg"><span></span></router-link>
    </header>
    <div>
      <div id="header-band">
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/New">新品</router-link>
          </li>
          <li>
            <router-link to="/channel/2860">家务</router-link>
          </li>
          <li>
            <router-link to="/channel/2859">下厨</router-link>
          </li>
          <li>
            <router-link to="/channel/2865">家居服</router-link>
          </li>
          <li>
            <router-link to="/channel/2861">生活</router-link>
          </li>
          <li>
            <router-link to="/channel/3260">软装</router-link>
          </li>
          <li>
            <router-link to="/channel/2862">床品</router-link>
          </li>
          <li>
          <router-link to="/channel/2863">工作和旅行</router-link>
        </li>
          <li>
            <router-link to="/#"  >了解LifeVC</router-link>
        </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  #header {
    width: auto;
    height: 4rem;
    background: #89be48;
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

  #header-band li a {
    height: 3.8rem;
    display: block;
    line-height: 3.8rem;
    padding: 0;
    position: relative;
    font-size: 1.35rem;
    color: #333;
  }
</style>
