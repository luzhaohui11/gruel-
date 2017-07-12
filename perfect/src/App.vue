<template>
  <div>
<router-view></router-view>
  </div>
</template>

<script>
export default {
created () {

}

}
</script>

<style>
  .old_user_login {
    width: 100%;
    height: 141px;
    background: #fff;
    position: relative;
  }
  .old_user_login .acct_top_back {
    width: 26px;
    height: 26px;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: .3rem;
    top: 46px;
    border: 1px solid #3aad36;
  }
  #registerWrapper{
    overflow: hidden;
  }
  .acct_top_show {
    width: 120px;
    overflow: hidden;
    display: block;
    position: absolute;
    top: 30%;
    left: 37%;
    margin-left: -1.2rem;
  }
  .bg-wrap{
    background: url(http://i1.lifevccdn.com/images/m/account/login-big-bg.jpg) no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
  }
  .login_content{
    width: 100%;
    height: 325px;
    box-sizing: border-box;
  }
  .login_content h1{
    height: 52px;
    width: 100%;
    text-align: center;
    color: #037049;
    font-size: 20px;
    line-height: 70px;
    box-sizing: border-box;
  }
  .register_distance {
    box-sizing: border-box;
    margin-bottom: 10rem;
  }
  .fm_list li{
    width: 90%;
    margin: 0 auto;
    height: 50px;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }
  .fm_list li input{
    height: 100%;
    font-size: 16px;
    width: 100%;
    background: transparent;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
  }
  .verifycode_img{
    position: absolute;
    right: -70%;
    width: 100%;
    top:10px;
  }
  .fidld_skip {
    display: inline-block;
    float: right;
    text-align: right;
    font-size: 16px;
    color: #3aad36;
    text-decoration: none;
    border: 1px solid #3aad36;
    border-radius: 4px;
    padding: 4px 14.5px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 9px;
  }
  #register-form p{
    font-size: 14px;
    color: #666;
    width: 100%;
    text-align: center;
    margin-bottom: .1rem;
  }
  .btn_login, .btn_regisiter {
    width: 80%;
    overflow: hidden;
    display: block;
    outline: none;
    text-align: center;
    font-size: 19px;
    color: #fff;
    line-height:36px;
    letter-spacing: 20px;
    text-indent: 20px;
    box-sizing: border-box;
  }
  .old_user_login .acct_top_back::after {
    content: "";
    width: 14px;
    height: 14px;
    display: block;
    border-left: 1px solid #3aad36;
    border-top: 1px solid #3aad36;
    position: absolute;
    left: 10px;
    top: 5px;
    transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .btn_login {
    margin: 0 auto 15px;
    background-color: #3aad36;
    border: 1px solid #3aad36;
    border-radius: 5px;
  }
  .btn_regisiter{
    margin: 10px auto 0;
    background-color: #8a8a8a;
    border: 1px solid #8a8a8a;
    border-radius: 5px;
    opacity: .5;
    position: absolute;
    left:10%;}
  .header {
    width: auto;
    height: 4rem;
    background: #89be48;
  }
  .header-2877{
    width: 100%;
    position: fixed;
    height: 4rem;
    z-index: 10;
    top: 4rem;
    background-color: white;
  }
  #headerwrapper{
    overflow: hidden;
  }
  #header {
    width: 100%;
    height: 4rem;
    background: #89be48;
    position: fixed;
    z-index: 99;
  }
  #header  .btn-back {
    width: 10%;
    height: 3.8rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .header-title {
    margin: 0 auto;
    line-height: 4rem;
    font-size: 2rem;
    text-align: center;
    color: #fff;
    width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  input{
    outline: none;
  }
</style>

