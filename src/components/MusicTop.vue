<template>
  <div class="music_top">
    <i class="iconfont">&#xe61e;</i>
    <span
      class="tab"
      :class="{ selected: path == '/musicRecommend' ? true : false }"
      @click="goPage('/musicRecommend')"
      >推荐</span
    >
    <span
      class="tab"
      :class="{ selected: path == '/musicLike' ? true : false }"
      @click="goPage('/musicLike')"
      >我的喜欢</span
    >
    <span
      class="tab"
      :class="{ selected: path == '/musicHall' ? true : false }"
      @click="goPage('/musicHall')"
      >音乐馆</span
    >
    <div
      class="imgs"
      :style="{ backgroundImage: 'url(' + $imgsrc + 'user.jpg)' }"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: this.$route.path,
    };
  },
  methods: {
    goPage(page) {
      this.$router.push(page);
    },
  },
};
</script>
<style scoped lang="less">
.music_top {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  .iconfont {
    font-size: 24px;
  }
  .tab {
    color: #aaaaaa;
    font-size: 16px;
  }
  .selected {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    position: relative;
  }
  .selected::after {
    content: "";
    width: 18px;
    height: 2px;
    background-color: #ff2593;
    position: absolute;
    top: 22px;
    left: 0;
  }
  .imgs {
    background-position: 50%;
    background-size: cover;
    width: 34px;
    height: 34px;
    background-color: #ddd;
    border-radius: 50%;
  }
}
</style>