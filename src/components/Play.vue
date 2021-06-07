<template>
  <div class="play">
    <i class="iconfont">&#xe610;</i>
    <i class="iconfont">&#xe609;</i>
    <div
      class="imgs"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'hot.png)' }"
    ></div>
    <i class="iconfont">&#xe60a;</i>
    <i class="iconfont">&#xe6b8;</i>
  </div>
</template>
<style scoped lang="less">
.play {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #ccc;
  background: #fff;
  height: 70px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  .iconfont {
    font-size: 20px;
    color: red !important;
  }
  .imgs {
    background-position: 50%;
    background-size: cover;
    width: 38px;
    height: 38px;
    background-color: #ddd;
    border-radius: 50%;
  }
}
</style>