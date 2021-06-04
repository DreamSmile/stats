<template>
  <div class="ranking">
    <header class="hearders">
      <!-- 头部标题及返回栏 -->
      <div class="navBar">
        <i class="iconfont" @click="out">&#xe607;</i>
        <h1>榜单</h1>
      </div>
      <!-- 排行选择 -->
      <div class="sort">
        <div
          class="item"
          :class="{ selected: isSel == 1 ? true : false }"
          @click="sel(1)"
        >
          <span>默认</span>
          <i class="iconfont">&#xe60c;</i>
        </div>
        <div
          class="item"
          :class="{ selected: isSel == 2 ? true : false }"
          @click="sel(2)"
        >
          <span>价格</span>
          <i class="iconfont">&#xe60c;</i>
        </div>
        <div
          class="item"
          :class="{ selected: isSel == 3 ? true : false }"
          @click="sel(3)"
        >
          <span>数量</span>
          <i class="iconfont">&#xe60c;</i>
        </div>
      </div>
    </header>
    <!-- 列表 -->
    <div class="list">
      <div class="item" v-for="(item, i) in 4" :key="i"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSel: 1,
    };
  },
  methods: {
    sel(num) {
      this.isSel = num;
    },
    out() {
      this.$router.push("/mallHome");
    },
  },
};
</script>
<style scoped lang="less">
.ranking {
  background-color: #f8f8f7;
  min-height: 100vh;
  .hearders {
    background-color: #f8f8f7;
    background: linear-gradient(321deg, #ff9d31 0%, #fd6717 100%, #fd6416 100%);
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    .navBar {
      padding: 24px 18px;
      box-sizing: border-box;
      display: flex;
      .iconfont {
        color: #fff;
        font-size: 14px;
      }
      h1 {
        flex: 1;
        text-align: center;
        font-size: 20px;
        font-family: Helvetica;
        font-weight: bold;
        color: #fddf17;
        line-height: 24px;
      }
    }
    .sort {
      display: flex;
      justify-content: space-around;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      color: #f8f8f7;
      padding-bottom: 12px;
    }
    .selected {
      font-size: 16px;
    }
  }
  //   列表
  .list {
    padding: 0 20px;
    .item {
      margin-top: 22px;
      height: 170px;
      background-color: #fff;
      border-radius: 8px;
    }
  }
}
</style>