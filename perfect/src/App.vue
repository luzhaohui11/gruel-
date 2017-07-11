<template>
  <div id="app">
    <router-view></router-view>
    <div id="footer">
     <ul id="footermenuNav">
         <li>
           <router-link to="/">
           <div class="icon icon1"></div>
             <span>首页</span>
           </router-link>
         </li>
         <li>
           <router-link to="/all">
           <div class="icon icon2"></div>
             <span>全部产品</span>
           </router-link>
         </li>
       <li>
       <router-link to="/stroll">
           <div class="icon icon3"></div>
          <span>闲逛</span>
       </router-link>
       </li>
         <li>
           <router-link to="/cart">
           <div class="icon icon4"></div>
             <span>购物车</span>
           </router-link>
         </li>
       <li>
       <router-link to="/usercenter">
           <div class="icon icon5"></div>
            <span>账户中心</span>
       </router-link>
       </li>
     </ul>
    </div>
  </div>
</template>

<script>
export default {
created () {

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
#footermenuNav li{
  width: 20%;
  float: left;
  margin: 0 auto;
  position: relative
}
#footermenuNav li a{
  margin-top: 0;
  display: block;
  color: #ababab;
  line-height: .1rem;
  font-size: 1.1rem;
  vertical-align: bottom;
  text-align: center;
  text-decoration: none;
}
.icon{
  width: 100%;
  height: 3.3rem;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 28%;
  margin-bottom: .2rem;
 }
.icon1{
  background-image :url("./img/footer/icon-1.2.png")
}
.icon2{
  background-image:url("./img/footer/icon-2.2.png")
}
.icon3{
  background-image:url("./img/footer/icon-3.2.png")
}
.icon4{
  background-image:url("./img/footer/icon-4.2.png")
}
.icon5{
  background-image: url("./img/footer/icon-5.2.png")
}

</style>

