<template>
  <div class="mind">
    <div class="clearfix pt5 pl10 pr10 pb5">
      <div class="epet-search bgf">
        <div class="fl rela ft14 location">
          <a :href="EpetJs.Common.createUrl('place','?pet_type='+pet_type)">
            <span class="catordog c89">狗狗</span>
            <span class="c89">|</span>
            <span data-name="my-place" class="myposition c89 ft13">重庆</span>
            <i></i>
          </a>
        </div>
        <p class="search-text">
          <a :href="EpetJs.Common.createUrl('search', '?pet_type='+pet_type)">
            <input type="search" placeholder="搜索商品和品牌" disabled="">
            <span class="eico serach-ico"></span>
          </a>
        </p>
        <a :href='EpetJs.Common.createUrl("wappms/pms", "")' class="epet-category">
          <img :src="shareurl + '/static_web/wap/src/images/mydope.png'">
        </a>
      </div>
    </div>



  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mind


</style>
