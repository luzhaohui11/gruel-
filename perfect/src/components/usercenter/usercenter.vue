<template>
  <div class="wrapper">
    <header class="header">
      <p class="header-title">账户中心</p>
      <router-link to='/setting' class="editcart">设置</router-link>
    </header>
    <scroller >
      <div>
      <div class="acct-user-wrap">
        <div class="acct-nolog"><span class="state">您还未登录</span>
          <div class="btn-entry">
            <router-link to="/login" class="font-large">登录</router-link>
            <span
              dclass="split"></span>
            <router-link to="/register" class="font-large">注册</router-link>
          </div>
        </div>
      </div>
      <div id="user-band">
        <ul>
          <li>
            <router-link to=""><span id="icon1" class="icon"></span>
              <span class="item-title">待支付</span></router-link>
          </li>
          <li>
            <router-link to=""><span id="icon2" class="icon"></span><span class="item-title">待发货</span></router-link>
          </li>
          <li>
            <router-link to=""><span id="icon3" class="icon"></span><span class="item-title">待收货</span></router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to=""><span id="icon4" class="icon"></span><span class="item-title">待评论</span></router-link>
          </li>
          <li>
            <router-link to=""><span id="icon5" class="icon"></span><span class="item-title">回复</span></router-link>
          </li>
          <li>
            <router-link to=""><span id="icon6" class="icon"></span><span class="item-title">退换货</span></router-link>
          </li>
        </ul>
      </div>
      <div  class="dashboard">
        <ul style="margin-bottom: 1rem;">
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_list_cm.png" class="item-i"> <span
            class="item-title">我的订单</span> <span class="arr-r"></span></a></li>
        </ul>
        <ul style="margin-bottom: 1rem;">
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_coupon_cm.png" class="item-i"> <span
            class="item-title">我的优惠券</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_pig_cm.png" class="item-i"> <span
            class="item-title">现金积分</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_invoice.png" class="item-i"> <span
            class="item-title">关于发票</span> <span class="arr-r"></span> <!----></a></li>
        </ul>
        <ul style="margin-bottom: 1rem;">
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_gear_cm.png" class="item-i"> <span
            class="item-title">密码和登录信息</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_dialoguebubble3_cm.png" class="item-i"> <span
            class="item-title">老会员建议</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/i_customerservice_cm.png" class="item-i"> <span
            class="item-title">客户服务</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/ic_currentnode_cm.png" class="item-i"> <span
            class="item-title">地址管理</span> <span class="arr-r"></span> <!----></a></li>
          <li><a><img src="http://i.lifevccdn.com/upload/centermenuimg/sms_cm.png" class="item-i"> <span
            class="item-title">手机验证</span> <span class="arr-r"></span> <!----></a></li>
        </ul>
      </div>
      </div>
    </scroller>

  </div>
</template>

<script>
  export default {}
</script>

<style>
  .header{
    z-index: 999;
  }
  ._v-container[data-v-ecaca2b0]{
    top:40px
  }
  .arr-r{
    width: 10px;
    height: 10px;
    display: inline-block;
    float: right;
    border-right: 2px solid #bbb;
    border-top: 2px solid #bbb;
    margin: 25px 10px 0 0;
    transform:rotate(45deg)
  }

  #user-band {
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    border-top: 1px solid #eee;
    margin: 0 auto;
  }

  #user-band ul {
    width: 100%;
    height: 5rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    margin: 0;
    padding: 0;
  }

  #user-band ul li {
    width: 33%;
    height: 2.5rem;
    float: left;
    border-right: 1px solid #dedede;
    line-height: 2rem;
    margin: 1.5rem 0 0;
    padding: 0;
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

  .acct-user-wrap {
    width: 100%;
    height: 9rem;
    background-image: url(http://i1.lifevccdn.com/images/h5/core/background.png);
    background-size: 100% 100%;
  }

  .acct-nolog {
    width: 100%;
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
    padding: .5rem 0 0;
  }

  .acct-nolog .state {

    display: block;
    color: #222;
  }

  .acct-nolog .btn-entry, .acct-nolog .btn-entry a {
    display: inline-block;
    color: #009c42;
    padding: 0 10px;
  }

  .acct-nolog .btn-entry {
    height: 3rem;
    background: hsla(0, 0%, 100%, .4);
    border: 1px solid #009c42;
    border-radius: 1.5rem;
    margin: .5rem auto 0;
  }

  .acct-nolog .btn-entry, .acct-nolog .state {
    text-align: center;
    font-size: 1.6rem;
    line-height: 3rem;
  }

  .acct-nolog .btn-entry a {
    text-decoration: none;
    margin: 0;
  }

  .acct-nolog .btn-entry, .acct-nolog .btn-entry a {
    display: inline-block;
    color: #009c42;
    padding: 0 10px;
  }

  .acct-nolog .btn-entry .split {
    width: 1px;
    height: 1.2rem;
    display: inline-block;
    border-left: 1px solid #009c42;
  }

  .editcart {
    font-size: 1.8rem;
    color: #fff;
    line-height: 4rem;
    margin-right: 2%;
    position: absolute;
    right: 2%;
    top: 0;
    z-index: 9;
  }

  /*.user-band span{*/
  /*display: inline-block;*/
  /*}*/
  #user-band a {
    display: block;
    text-align: center;
    color: #585858;
    text-decoration: none;
    padding: 0;
  }

  #user-band li .item-title {
    display: inline-block;
    vertical-align: 56%;
    font-size: 1.2rem;
    color: #585858;
    line-height: 2.5rem;
    text-decoration: none;
  }

  #user-band icon {
    display: inline-block;
    height: 3rem;
    width: 3.5rem;
    background-repeat: no-repeat;
    background-size: 99% 120%;
  }

  #user-band icon1 {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAE+klEQVR42u2dW4hVVRjHx2xMI+hiUlb4UFEGKTFSYgURVPQQgdAxCKKZOWfm7JlxqgkxH5QRMXypl6AC6cVeur2EdqXbS4xJiZRGaVLK4DxEMYWo1Wj2/2AR02LPOXvPntta+/eDj+OMe87e6//9z7rtfdZqaQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAUDAwOLurq6Hlbs6u7uHlb8bD+jTMQoyZfW6/VHlei39e+TivNe/NLf338RSsWV9CuV8E69vqv4MyXpflRQLXCSJLlWSV+vZH6qOJsh6ePjExQMkJ6enuuVvI2KvYp/Mib7dzUJb3q/s7+9AUUdvb29l0ikZyTKkOJMzk/TXIy/FbtVQ6yzjqBrJr7O+R4nFG9Ilwdjbz/vdYU9H0HsVdJ7Ozo6lvjl1O+fKvC+n9VqteuiS75EuU+F+yvwpP+o2FqtVm9sVFYl8CodN1bgPMNRNRtqTy+3IVEBQaypGJ2GaHpuGfdXVc0vKdaoKPNyGP69gmY7FM0QUoXZklLA3fqkrJyFa2lT7FAcbWK4t2wiR6+tk6zx1nnveXSiD4eOvVP//36K+dbHYoBvvILtyvNpmoJh3K067zZXhU+U9HO6rs/1WrMJnqmYGbRRwfhzyPCrJjq+UqnM1/m/8K7py1gMMDYu+afb29svm8Gkf9+kqv1OsUmxbBr6Pa9653q+yfFr/RFGLAaYEVerOr1ZbfXmDEkfkdgvKG6b5o7vPd55jzeq+az3719rjAb4aZqS/m2TpNtc/WuKB6y6naGiz7ObQt51rG40R1IGA1i0FZ2lU9KfzZB0m7b9QPGYiTtLZd/u9X9ezKNVlAaQCPv0evEkk55lls2OeVpJv3oOzH/c5M/6DQ4OXlBqA7gYsuGPOoQLG/zdMh2zIWPSj+nY5/S6fA5Ogu3zrvXurFpZh3myQ9G5bgAie4y5eydPNKo9MEA54sO8zScGiC9eD90ATyr2u1upJHQSkSTJHcEaoAUyYR1kmz6WZh+lmOBlDFAS1PG70L9PoJ8PYoAS4Z6n+N8dSwxQItwzFWHqiAFKriMGwAAYAANgAAyAATAABsAAGAADAAYADAAYADAAYADAAGWkUqkskB4d7oGP0bxPBWGAgHFP+hwu8lgYBgiUJEnukg6nij4XiAECpFqtXmFfTp2KB0MxQJgduR0pX5X7QfFQs3UJMED4yW+1JWf8lUP6+voWMwooAbbOUMqnfy3DwJKgZNc9LX7Ls1YBBgi/CRj0tPg4j1YYIDIDuMWyMECJDLAFA5S7E5g0W0kcA8RtgPu9GuCPPKuBYoDAcbOA5zw9ahigXP2AIU+P0axL5mKAOOYCHk+Z1z/lVjVd0Wg6GANEgH3XXxoc4GZQuZuB5QWXz8cAEXQIb3ELVWOAEtcEdnewnUfCgGEgYADAAIABAAMABgAMABgA4jRA8FugzI6GrSEb4Kx38UtJaW4Nl/o7ooV08UfGX3y9Xn+ElObDNPMMcCQkA+z0t42bwc0bg8ftK+zvPLYzJPeuSdvxAhNkS75p5evntrMPqg3bk2KCrxSVzs7Oa2y1DNL9X9IXmCamjdPI121PqJ2YETZ8KhwjwXai3ZbumKBA8k3D4Icz6tC8QzLzhdMsnuGzCnS74hW3UNIYSU7dLvawaWRa0TMCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACApvwLaJKdSOdIaK0AAAAASUVORK5CYII=);
  }

  #user-band icon2 {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABu0lEQVR42u3aP0rDYBjA4c4dPEsvoF4mf6bQOUMgRwjkIrmAk3PAWchZPvNJBweRtlaTfH0eCMGaqO/rr1Cqux0AAAAAAAAAAAAAAMAXRVEEx/WHAAQgAAEIQACpBLDE9/yN//75BSAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIIBtBbDEccsA/EuYAAQgAAEIQADrfcGz9heBd/VLFoAABCAAAQhAAAIQgAAEIAABCEAAAlgqgGmawjAMoeu60DRNqOv68xw/jo/HzwsgwQDGcQxt25719mu8Ll4vgEQC6Pv+qvfhv7tPABsMYG1/nBHA8gG85nl+zLLscT4fTudjfFwAaQfwXpbl00/3ziE8x+sEkF4AL1VVPZxzf7wuXi+ARAKYn9Vv83l/4dfYn+4TwNYCMLdFmNsizG0R5rYIc1uEuS3C3BZhboswt0WY2yLMbRHmtghzW4S5LcLcFmFuizC3RZjbIsxtEea2CHNbhLktwtwWYW6LMLdFmNsizG0R5rYIc1uEuS3C3H+6iHs9BCAAAQhAAAIAAAAAAAAAAAAAAAAAuNgHVBw8ZCHwHjsAAAAASUVORK5CYII=);
  }

  /*#icon3 {*/
    /*background-position: -2px -7px;*/
    /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFO0lEQ…PEdkunV9NeOo02AAAAAAAAAAAAAAAAAAAAAAAAAOgn/ge2oJ5yfduGOgAAAABJRU5ErkJggg==);*/
  /*}*/

  /*#icon4 {*/
    /*background-position: -6px -7px;*/
    /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAQlBMV…EHTCoxFAHr8zNgkDDqWx8/3dYnkK7rE0nHRoiIiIiI6Fk+AGIffV7bGuevAAAAAElFTkSuQmCC);*/
  /*}*/

  /*#icon5 {*/
    /*bbackground-position: -6px -4px;*/
    /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAArlBMV…RhmJ4zA+rpwxLOeQGjkJiGZ5yAevqwhSSEEEIIIYQQQhya34kz7J0a5iSwAAAAAElFTkSuQmCC);*/
  /*}*/

  /*#icon6 {*/
    /*background-position: -6px -7px;*/
    /*background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAhFBMV…WWSew+uh4eIwt+F2sepSfji4lZr2xQKBQKhUKhUCgU/y1/ABsW/A5NX6vhAAAAAElFTkSuQmCC);*/
  /*}*/
  .dashboard ul{
    background-color: white;
  }
  .wrapper{
    background: #f8f8f8
  }
  .dashboard li .item-i {
    width: 2.5rem;
    overflow: hidden;
    display: inline-block;
    float: left;
    margin: 1.3rem 1.1rem 0;
  }
  .dashboard li .item-title {
    float: left;
    vertical-align: 0;
    font-size: 1.4rem;
    color: #585858;
    display: inline-block;
    line-height: 5rem;
    text-decoration: none;
  }
  .dashboard li a {
    width: 100%;
    height: 5rem;
    display: block;
  }
</style>
