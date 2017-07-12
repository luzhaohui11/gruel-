<template>
   <div>

    <div >
      <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
      >
        <div id="wrapper-content">
          <div id="band-img">
            <mt-swipe :auto="4000">
              <mt-swipe-item>
                <router-link to="">
                  <img src="./1.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="">
                  <img src="./2.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="">
                  <img src="./3.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="">
                  <img src="./4.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="">
                  <img src="./5.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="">
                  <img src="./6.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="">
                  <img src="./7.jpg" alt="">
                </router-link>
              </mt-swipe-item>
              <mt-swipe-item>
                <router-link to="">
                  <img src="./8.jpg" alt="">
                </router-link>
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div id="mini-band"><img src="./band.jpg" alt="">
          </div>
          <div data-v-60df7298="" class="item-combo">
            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 150px;"><img data-v-46782024="" usemap="#planetmap1" src="http://i.lifevccdn.com/upload/combinationchart/9518bc17021a40d28bffa8eb521f6878_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 150px;"> <map data-v-46782024="" name="planetmap1" id="planetmap1"><area data-v-46782024="" shape="rect" coords="0,1,375,148"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">
            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 925px;"><img data-v-46782024="" usemap="#planetmap2" src="http://i.lifevccdn.com/upload/combinationchart/c8d8ca2a7c6b468f95faefd8eb3959c1_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 925px;"> <map data-v-46782024="" name="planetmap2" id="planetmap2"><area data-v-46782024="" shape="rect" coords="0,64,375,231"><area data-v-46782024="" shape="rect" coords="0,240,375,407"><area data-v-46782024="" shape="rect" coords="0,407,375,573"><area data-v-46782024="" shape="rect" coords="0,573,123,749"><area data-v-46782024="" shape="rect" coords="123,573,251,749"><area data-v-46782024="" shape="rect" coords="251,573,375,749"><area data-v-46782024="" shape="rect" coords="0,749,123,925"><area data-v-46782024="" shape="rect" coords="123,749,251,925"><area data-v-46782024="" shape="rect" coords="251,749,375,925"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 238px;"><img data-v-46782024="" usemap="#planetmap3" src="http://i.lifevccdn.com/upload/combinationchart/7d75b0fe2e8244bdbad79f4b39f8b62f_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 238px;"> <map data-v-46782024="" name="planetmap3" id="planetmap3"><area data-v-46782024="" shape="rect" coords="0,26,371,235"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 310px;"><img data-v-46782024="" usemap="#planetmap4" src="http://i.lifevccdn.com/upload/combinationchart/3cea975b99f9458198e9ed706af9b391_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 310px;"> <map data-v-46782024="" name="planetmap4" id="planetmap4"><area data-v-46782024="" shape="rect" coords="3,46,86,158"><area data-v-46782024="" shape="rect" coords="93,46,191,164"><area data-v-46782024="" shape="rect" coords="191,46,281,164"><area data-v-46782024="" shape="rect" coords="285,46,371,164"><area data-v-46782024="" shape="rect" coords="3,170,90,294"><area data-v-46782024="" shape="rect" coords="93,170,183,294"><area data-v-46782024="" shape="rect" coords="187,170,281,294"><area data-v-46782024="" shape="rect" coords="281,170,375,294"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 100px;"><img data-v-46782024="" usemap="#planetmap5" src="http://i.lifevccdn.com/upload/combinationchart/fdbd35036c1c485b975a85ff7572708b_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 100px;"> <map data-v-46782024="" name="planetmap5" id="planetmap5"><area data-v-46782024="" shape="rect" coords="0,2,375,101"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 689px;"><img data-v-46782024="" usemap="#planetmap7" src="http://i.lifevccdn.com/upload/combinationchart/5e1e40565e5147a8849f73b630ba0a60_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 689px;"> <map data-v-46782024="" name="planetmap7" id="planetmap7"><area data-v-46782024="" shape="rect" coords="0,0,375,151"><area data-v-46782024="" shape="rect" coords="7,165,183,330"><area data-v-46782024="" shape="rect" coords="191,158,371,330"><area data-v-46782024="" shape="rect" coords="7,330,183,503"><area data-v-46782024="" shape="rect" coords="191,330,367,496"><area data-v-46782024="" shape="rect" coords="7,503,183,675"><area data-v-46782024="" shape="rect" coords="187,503,367,675"></map></div></div><div data-v-60df7298="" class="item-combo"><div data-v-46782024="" data-v-60df7298="" title="组合图活动"><div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 689px;"><img data-v-46782024="" usemap="#planetmap6" src="http://i.lifevccdn.com/upload/combinationchart/5a65492b159d4e6eae9953baf218d42a_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 689px;"> <map data-v-46782024="" name="planetmap6" id="planetmap6"><area data-v-46782024="" shape="rect" coords="0,0,375,151"><area data-v-46782024="" shape="rect" coords="3,158,168,330"><area data-v-46782024="" shape="rect" coords="187,158,367,330"><area data-v-46782024="" shape="rect" coords="3,337,180,509"><area data-v-46782024="" shape="rect" coords="183,337,367,509"><area data-v-46782024="" shape="rect" coords="3,516,180,682"><area data-v-46782024="" shape="rect" coords="187,516,367,675"></map></div></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div> <div data-v-46782024="" class="img-wrap" style="height: 484px;"><img data-v-46782024="" usemap="#planetmap8" src="http://i.lifevccdn.com/upload/combinationchart/1e3cea01343b4608853918c1e9e281de_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 484px;"> <map data-v-46782024="" name="planetmap8" id="planetmap8"><area data-v-46782024="" shape="rect" coords="0,0,375,150"><area data-v-46782024="" shape="rect" coords="11,164,127,314"><area data-v-46782024="" shape="rect" coords="131,159,243,309"><area data-v-46782024="" shape="rect" coords="247,164,360,309"><area data-v-46782024="" shape="rect" coords="11,314,123,474"><area data-v-46782024="" shape="rect" coords="127,314,243,469"><area data-v-46782024="" shape="rect" coords="247,314,360,469"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div>
              <div data-v-46782024="" class="img-wrap" style="height: 689px;"><img data-v-46782024="" usemap="#planetmap9" src="http://i.lifevccdn.com/upload/combinationchart/6d9ec06b24ef43a089ec173e9303fa09_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 689px;"> <map data-v-46782024="" name="planetmap9" id="planetmap9"><area data-v-46782024="" shape="rect" coords="0,0,375,151"><area data-v-46782024="" shape="rect" coords="11,158,183,330"><area data-v-46782024="" shape="rect" coords="187,158,371,337"><area data-v-46782024="" shape="rect" coords="11,330,180,503"><area data-v-46782024="" shape="rect" coords="183,330,371,503"><area data-v-46782024="" shape="rect" coords="7,503,176,675"><area data-v-46782024="" shape="rect" coords="183,503,367,675"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div>
              <div data-v-46782024="" class="img-wrap" style="height: 689px;"><img data-v-46782024="" usemap="#planetmap10" src="http://i.lifevccdn.com/upload/combinationchart/d38c4504d1ae4d1bac0257b52cef4fdb_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 689px;"> <map data-v-46782024="" name="planetmap10" id="planetmap10"><area data-v-46782024="" shape="rect" coords="0,0,375,151"><area data-v-46782024="" shape="rect" coords="11,158,183,330"><area data-v-46782024="" shape="rect" coords="187,158,371,337"><area data-v-46782024="" shape="rect" coords="11,330,180,503"><area data-v-46782024="" shape="rect" coords="183,330,371,503"><area data-v-46782024="" shape="rect" coords="7,503,176,675"><area data-v-46782024="" shape="rect" coords="183,503,367,675"></map></div></div></div>
          <div data-v-60df7298="" class="item-combo">

            <div data-v-46782024="" data-v-60df7298="" title="组合图活动">
              <div data-v-46782024="" class="combo-title"></div>
              <div data-v-46782024="" class="img-wrap" style="height: 484px;"><img data-v-46782024="" usemap="#planetmap11" src="http://i.lifevccdn.com/upload/combinationchart/35f9e6158c1b422b916b3b0a69d156a9_d1242x0.jpg" lazy="loaded" style="width: 100%; height: 484px;"> <map data-v-46782024="" name="planetmap11" id="planetmap11"><area data-v-46782024="" shape="rect" coords="0,0,375,150"><area data-v-46782024="" shape="rect" coords="11,164,123,314"><area data-v-46782024="" shape="rect" coords="131,164,243,314"><area data-v-46782024="" shape="rect" coords="247,164,360,314"><area data-v-46782024="" shape="rect" coords="11,314,123,469"><area data-v-46782024="" shape="rect" coords="131,314,243,469"><area data-v-46782024="" shape="rect" coords="247,314,360,469"></map></div></div></div>
        </div>
      </scroller>


    </div>
   </div>
</template>

<script>

    export default {
        data () {
            return {
              allLoaded : true
            }
        },
        methods: {
          refresh(){

          },
          infinite(){

          }
        }

    }
</script>

<style>

#band-img{
  width: 100%;
  height:250px;
}

._v-container[data-v-ecaca2b0]{
  top:80px
}
#header-band li a:focus{
  color:#80b532;
  border-bottom:2px solid #80b532;
}

.mint-swipe{
  height: 250px;
}
#band-img img{
  display: inline-block;
  width: 100%;
}
  /*#mini-band{*/
    /*height: 90px;*/
  /*}*/
  #mini-band img{
  width: 100%;
   }/*滚动条 start*/

</style>
