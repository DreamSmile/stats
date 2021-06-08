<template>
  <div class="recDetails">
    <!-- 头部返回 -->
    <div class="out">
      <i class="iconfont" @click="out">&#xe622;</i>
      <h1>专辑详情</h1>
    </div>
    <!-- 专辑信息 -->
    <div class="details">
      <div
        class="imgs"
        :style="{ backgroundImage: 'url(' + $imgsrc + 'recommend.png)' }"
      ></div>
      <h2>ALLINE新专辑-听海</h2>
      <p class="author">ALLINE</p>
      <div class="stars">
        <i class="iconfont star" v-for="(star, j) in 5" :key="j">&#xe642;</i>
        <span>6.0分</span>
      </div>
      <div class="btns">
        <button class="btn">播放</button>
        <button class="btn">下载</button>
      </div>
    </div>
    <!-- 专辑列表 -->
    <div class="list">
      <div class="title">
        <h3 class="name">专辑列表</h3>
        <i class="iconfont">&#xe6b8;</i>
      </div>
      <div class="item" v-for="(list, i) in 7" :key="i">
        <div class="name">{{ i }}.歌曲名称</div>
        <div class="edit">
          <span class="time">03:20</span>
          <i class="iconfont">&#xe618;</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    out() {
      this.$router.push("/musicRecommend");
    },
  },
};
</script>
<style scoped lang="less">
.recDetails {
  color: #333;
  .out {
    padding: 0 20px;
    text-align: center;
    position: relative;
    height: 40px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    .iconfont {
      position: absolute;
      left: 20px;
      top: 50%;
      font-size: 16px;
      margin-top: -10px;
    }
    h1 {
      line-height: 40px;
      font-size: 18px;
      font-weight: 600;
    }
  }
  .details {
    margin-top: 28px;
    padding: 0 20px;
    text-align: center;
    box-sizing: border-box;
    .imgs {
      background-position: 50%;
      background-size: cover;
      background-color: #ddd;
      width: 100%;
      height: 361px;
      border-radius: 16px;
    }
    h2 {
      font-size: 18px;
      font-weight: 600;
      margin: 18px 0 4px 0;
    }
    .author {
      color: #aaa;
      font-size: 12px;
    }
    .stars {
      margin: 8px 0 16px 0;
      .star {
        color: #ffb300 !important;
      }
      span {
        font-family: SF Pro Text;
        font-size: 14px;
        color: #c8c8c8;
        margin-left: 4px;
      }
    }
    .btns {
      box-sizing: border-box;
      .btn {
        background-color: #ff2593;
        border: none;
        border-radius: 16px;
        color: #fff;
        padding: 4px 20px;
      }
      .btn:last-child {
        margin-left: 20px;
      }
    }
  }
  .list {
    padding: 0 20px;
    margin-top: 22px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      .name {
        font-size: 18px;
        font-weight: 600;
      }
      .iconfont {
        font-size: 16px;
        font-weight: 600;
      }
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      .name {
        font-weight: 500;
        font-size: 16px;
      }
      .edit {
        .time {
          color: #c8c8c8;
          margin-right: 10px;
          font-size: 12px;
          vertical-align: middle;
        }
        .iconfont {
          font-size: 20px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>