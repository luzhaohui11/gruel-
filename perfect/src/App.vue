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

