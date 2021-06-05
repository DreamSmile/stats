<template>
  <div class="ranking">
    <header class="hearders">
      <!-- 头部标题及返回栏 -->
      <div class="navBar">
        <i class="iconfont" @click="out">&#xe641;</i>
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
      <div class="item" v-for="(items, i) in pList" :key="i">
        <div
          class="imgs"
          :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
        ></div>
        <div class="info">
          <h2 class="name">
            {{ items.name || "名称" }}
          </h2>
          <div class="rows">
            <span class="money">￥889</span>
            <span class="old">￥1024</span>
          </div>
          <div class="rows">
            <div class="speed">
              <div class="line">
                <div class="scale" :style="{ width: items.speed }"></div>
              </div>
              <p>已售{{ items.num }}/{{ items.all }}</p>
            </div>
            <div class="btn">
              <button>立即抢购</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSel: 1,
      pList: [
        {
          name: "标题标题90%标题标题90%标题标题90%标题标题90%标题标题90%",
          speed: "90%",
          num: 103,
          all: 115,
        },
        {
          name:
            "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
          speed: "10%",
          num: 12,
          all: 120,
        },
        {
          name: "已出售50%已出售50%已出售50%已出售50%已出售50%已出售50%",
          speed: "50%",
          num: 45,
          all: 90,
        },
        {
          name: "卖不出去卖不出去卖不出去卖不出去卖不出去卖不出去卖不出去",
          speed: "0",
          num: 0,
          all: 78,
        },
        {
          name: "商品名字商品名字商品名字商品名字商品名字商品名字商品名字",
          speed: "10%",
          num: 1,
          all: 10,
        },
      ],
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
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 14px;
      box-sizing: border-box;
      .imgs {
        background-position: 50%;
        background-size: cover;
        background-color: #ddd;
        width: 106px;
        height: 106px;
        margin-right: 16px;
        border-radius: 6px;
      }
      .info {
        flex: 1;
        .name {
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
        }
        .rows {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
          box-sizing: border-box;
          .money {
            color: #fd6416;
          }
          .old {
            font-size: 12px;
            text-decoration: line-through;
            color: #ccc;
          }
          .speed {
            font-size: 12px;
            .line {
              width: 60px;
              background-color: #ddd;
              height: 3px;
              .scale {
                background-color: #fd6416;
                height: 100%;
              }
            }
            p {
              margin-top: 4px;
              color: #d1d1d1;
            }
          }
          .btn {
            button {
              border: none;
              padding: 10px;
              border-radius: 8px;
              color: #fff;
              background-color: #fd6416;
            }
          }
        }
        .rows:last-child {
          align-items: flex-end;
        }
      }
    }
    .item:last-child {
      margin-bottom: 16px;
    }
  }
}
</style>