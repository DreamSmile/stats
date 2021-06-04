<template>
  <div class="cart">
    <div class="mian">
      <!-- 订单列表 -->
      <div class="list" v-for="(item, i) in 5" :key="i">
        <div class="top">
          <input type="radio" class="radio" />
          <span class="name"
            >店名<i class="iconfont" color="#ccc">&#xe61f;</i></span
          >
        </div>
        <div class="content">
          <div
            class="imgs"
            :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
          ></div>
          <div class="info">
            <p class="name">商品名称商品名称商品名称商品名称商品名称商品名</p>
            <p class="sort">XL码 蓝色</p>
            <div class="money_box">
              <div class="money">
                <span class="now"
                  >￥77 <span class="old">距加购降12</span></span
                >
                <div class="number">
                  <i class="iconfont">&#xe637;</i>
                  <span>1</span>
                  <i class="iconfont">&#xe607;</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部购买按钮 -->
    <div class="buy">
      <div class="buy_box">
        <div class="all_product"><input type="radio" class="radio" />全选</div>
        <div class="all_money">
          <span class="money"
            >合计：<span class="money_color"><em>￥2000</em>.03</span></span
          >
          <button>结算(6)</button>
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
};
</script>
<style scoped lang="less">
.cart {
  background-color: #f8f8f7;
  .mian {
    min-height: calc(100vh - 50px);
    box-sizing: border-box;
    padding: 16px;
    margin-bottom: 50px;
    .list {
      background-color: #fff;
      border-radius: 10px;
      padding: 12px;
      margin-bottom: 12px;
      .top {
        margin-bottom: 14px;
        .radio {
          color: #ccc;
          zoom: 164%;
          vertical-align: middle;
          margin-right: 10px;
        }
        .name {
          font-weight: 600px;
          .iconfont {
            margin-left: 4px;
            font-size: 12px;
          }
        }
      }
      .content {
        display: flex;

        .imgs {
          background-position: 50%;
          background-size: cover;
          height: 90px;
          width: 90px;
          border-radius: 8px;
          margin-right: 10px;
          margin-left: 40px;
        }
        .info {
          flex: 1;
          position: relative;
          .name {
            font-weight: 600;
          }
          .sort {
            font-size: 12px;
            color: #e2e2e2;
            margin-top: 8px;
          }
          .money_box {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            .money {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .now {
                color: #fd6416;
                font-weight: 600;
                font-size: 16px;
                .old {
                  font-size: 12px;
                  color: #fd6416;
                  font-weight: 400;
                }
              }
              .number {
                .iconfont {
                }
                span {
                  padding: 0 6px;
                }
              }
            }
          }
        }
      }
    }
  }
  // 底部结算
  .buy {
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-sizing: border-box;

    .buy_box {
      padding: 10px 16px;
      height: 100%;
      .all_product {
        float: left;
        line-height: 40px;
        margin-left: 12px;
        .radio {
          zoom: 164%;
          line-height: 50px;
          vertical-align: middle;
        }
      }
      .all_money {
        text-align: right;
        .money {
          margin-right: 10px;
          .money_color {
          }
        }
        button {
          border-radius: 20px;
          background-image: linear-gradient(to right, #ff6034, #ee0a24);
          height: 40px;
          width: 110px;
          border: none;
          color: #fff;
        }
      }
    }
  }
}
</style>