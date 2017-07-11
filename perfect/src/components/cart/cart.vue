<template>
  <div>
    <header id="headerwrapper">
      <div id="header">
        <span><label></label></span>
        <p class="header-title">购物车</p></div>
      <div class="cartheader  ">
        <div class="header-login">
          <a class="btn-login">登录</a>
          <span class="login-tip">你可以在登录后同步电脑与手机购物车中的商品</span>
        </div>
      </div>
      <div class="cartheader ">
        <div class="header-login">
          <input type="text" maxlength="15" placeholder="礼品兑换处，请输入兑换码"
                 class="exch-ipt">
          <input type="button" value="兑换" class="exch-btn">
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .cartheader {
    background-color: #f0fae6;
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

  .cartheader .login-tip {
    width: 100%;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    font-size: 1.4rem;
    color: #333;
    line-height: 1.5rem;
  }

  .header-login {
    width: 74%;
    min-height: 2.8rem;
    display: table;
    overflow: hidden;
    margin: 6px auto;
    padding: 0 0 0 21%;
    position: relative;
  }
  .exch-ipt {
    padding-left: 10px;
    width: 80%;
    height: 2.8rem;
    line-height: 2.8rem;
    display: inline-block;
    border-radius: 0;
    border: 1px solid #e7e7e7;
    background: #fff;
    text-align: left;
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
