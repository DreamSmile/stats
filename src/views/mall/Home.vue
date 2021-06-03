<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="swipe">
      <div class="photo">
        <img @click="goProduct" :src="$imgsrc + 'food.png'" />
        <img @click="goProduct" :src="$imgsrc + 'user.jpg'" />
        <img @click="goProduct" :src="$imgsrc + 'food.png'" />
      </div>
    </div>
    <!-- 热门滑动区 -->
    <div class="hot">
      <div class="title">
        <h2>热门</h2>
        <div class="all" @click="goRanking">
          <span>榜单</span><i class="iconfont">&#xe61f;</i>
        </div>
      </div>
      <div class="bg">
        <div class="item" v-for="(item, i) in 5" :key="i" @click="goProduct">
          <div
            class="imgs"
            :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
          ></div>
          <p class="money">
            <span class="now">￥25</span><span class="old">￥102</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="list">
      <div class="title">
        <h2>推荐</h2>
        <div class="more">
          <span>更多</span><i class="iconfont">&#xe61f;</i>
        </div>
      </div>
      <div class="item" v-for="(list, j) in 4" :key="j" @click="goProduct">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
        ></div>
        <div class="info">
          <p class="title">
            这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题这是标题
          </p>
          <div class="absolute">
            <div class="money_box">
              <span class="money">￥25</span>
              <span class="space">13.6公里</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script>
import Tabbar from "../../components/Tabbar";
export default {
  components: {
    Tabbar,
  },
  methods: {
    goRanking() {
      this.$router.push("/mallRanking");
    },
    goProduct() {
      this.$router.push("/details");
    },
  },
};
</script>
<style scoped lang="less">
.home {
  font-family: PingFangSC-Medium, PingFang SC;
  background-color: #f8f8f7;
  color: #1b1c1c;
  .swipe {
    width: 100%;
    height: 190px;
    overflow: hidden;
    .photo {
      width: 1200px;
      animation: switch 5s ease-out infinite;
      img {
        float: left;
        width: 400px;
        height: 300px;
      }
    }

    @keyframes switch {
      0%,
      25% {
        margin-left: 0;
      }
      35%,
      60% {
        margin-left: -400px;
      }
      70%,
      100% {
        margin-left: -800px;
      }
    }
  }
  .hot {
    padding: 0 20px;
    margin-top: 20px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      h2 {
        font-size: 20px;
        font-weight: bold;
        background: linear-gradient(to bottom, #fd6416, #fddf17);
        -webkit-background-clip: text;
        color: transparent;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
      }
      .all {
        color: #fc6413;
        .iconfont {
          font-size: 12px;
          vertical-align: 1px;
        }
      }
    }
    .bg {
      background: linear-gradient(
        180deg,
        rgba(253, 100, 22, 0.9) 0%,
        rgba(253, 100, 22, 0) 100%
      );
      border-radius: 16px;
      padding: 16px;
      box-sizing: border-box;
      overflow-y: hidden;
      white-space: nowrap;
      .item {
        background-color: #fff;
        padding: 6px 6px 0px 6px;
        width: 98px;
        height: 120px;
        margin-right: 10px;
        border-radius: 8px;
        box-sizing: border-box;
        display: inline-block;

        .imgs {
          background-size: cover;
          background-position: 50%;
          background-color: #ddd;
          width: 100%;
          height: 88px;
          margin: 0 auto;
        }
        .money {
          color: #fc6413;
          padding: 3px 0 5px 0;
          .now {
            font-size: 14px;
            line-height: 17px;
          }
          .old {
            font-size: 10px;
            line-height: 14px;
            text-decoration: line-through;
            font-weight: 400;
            margin-left: 4px;
          }
        }
      }
    }
  }
  //   列表
  .list {
    padding: 20px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-weight: 500;
        font-size: 16px;
      }
      .more {
        color: #757575;
        .iconfont {
          vertical-align: 1px;
          font-size: 12px;
        }
      }
    }
    .item {
      display: flex;
      padding: 12px;
      box-sizing: border-box;
      margin-top: 14px;
      background-color: #fff;
      .imgs {
        background-position: 50%;
        background-size: cover;
        background-color: #ddd;
        width: 105px;
        height: 105px;
        margin-right: 18px;
      }
      .info {
        position: relative;
        flex: 1;
        border-radius: 8px;
        .title {
          font-size: 14px;
          font-weight: 500;
        }
        .absolute {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          .money_box {
            position: relative;
            .money {
              font-size: 16px;
              font-family: Helvetica;
              color: #fd6416;
            }
            .space {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #e2e2e2;
              position: absolute;
              right: 0;
              bottom: 0;
            }
          }
        }
      }
    }
    .item:last-child {
      margin-bottom: 50px;
    }
  }
}
</style>