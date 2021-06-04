<template>
  <div class="tabbar">
    <div class="items">
      <div
        class="item"
        :class="{ selected: path == '/mallHome' ? true : false }"
        @click="go('/mallHome')"
      >
        <i class="iconfont">&#xe63d;</i>
        <p>主页</p>
      </div>
      <div
        class="item"
        :class="{ selected: path == '/mallCart' ? true : false }"
        @click="go('/mallCart')"
      >
        <i class="iconfont">&#xe6ab;</i>
        <p>购物车</p>
      </div>
      <div
        class="item"
        :class="{ selected: path == '/mallUser' ? true : false }"
        @click="go('/mallUser')"
      >
        <i class="iconfont">&#xeb7f;</i>
        <p>我的</p>
      </div>
    </div>
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
    go(space) {
      if (this.path == space) {
        return;
      }
      this.$router.push(space);
    },
  },
};
</script>
<style scoped lang="less">
.tabbar {
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #fff;
  height: 50px;
  width: 100%;
  z-index: 3;
  border-top: 1px solid #e2e2e2;
  .items {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    .item {
      text-align: center;
      color: #e2e2e2;
      font-size: 14px;
      .iconfont {
        font-size: 24px;
      }
    }
    .selected {
      color: #fd6416;
    }
  }
}
</style>