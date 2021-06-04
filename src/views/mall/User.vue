<template>
  <div class="user">
    <div class="main">
      <div class="bg">
        <div class="user_info">
          <div
            class="face"
            :style="{ backgroundImage: 'url(' + $imgsrc + 'user.jpg)' }"
          ></div>
          <div class="info">
            <p class="name">张三</p>
            <p class="ID">id:12345</p>
          </div>
        </div>
        <!-- 我的订单 -->
        <div class="order">
          <div class="order_p">
            <h2>订单</h2>
            <div class="container">
              <ul>
                <li v-for="(item, i) in 4" :key="i">
                  <img class="icon" :src="$imgsrc + 'order_icon.png'" />
                  <span>代发货{{ i }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 我的资产 -->
        <div class="money">
          <div class="money_p">
            <h2>资产</h2>
            <div class="container">
              <ul>
                <li v-for="(item, i) in 4" :key="i">
                  <p class="num">20</p>
                  <p name="name">红包{{ i }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 我的工具 -->
        <div class="activity">
          <div class="activity_p">
            <h2>工具与服务</h2>
            <div class="container">
              <ul>
                <li v-for="(item, i) in 7" :key="i">
                  <i class="iconfont">&#xe767;</i>
                  <p class="name">工具{{ i }}</p>
                </li>
              </ul>
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
};
</script>
<style scoped lang="less">
.user {
  background-color: #f8f8f7;
  .main {
    min-height: calc(100vh - 50px);
    .bg {
      background: linear-gradient(
        180deg,
        #fd6416 0%,
        rgba(248, 248, 247, 0.2) 50%,
        #f8f8f7 100%
      );
      .user_info {
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        padding-top: 40px;
        align-items: center;

        .face {
          margin: 0 12px 0 22px;
          background-size: cover;
          background-position: 50%;
          width: 62px;
          height: 62px;
          border-radius: 50%;
        }
        .info {
          flex: 1;
          color: #fff;
          .name {
            font-size: 16px;
            font-weight: 600;
          }
          .ID {
            font-size: 12px;
            margin-top: 6px;
          }
        }
      }
      // 订单
      .order {
        padding: 0 20px;
        margin-top: 12px;
        .order_p {
          border-radius: 8px;
          background-color: #fff;
          padding: 16px 23px 25px 23px;
          h2 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .container {
            ul {
              overflow: hidden;
              li {
                float: left;
                width: calc(100% / 4);
                text-align: center;
                color: #7c7c7c;
                font-size: 14px;
                .icon {
                  margin: 0 auto;
                  width: 30px;
                  height: 30px;
                  margin-bottom: 8px;
                }
              }
            }
          }
        }
      }
      //资产
      .money {
        padding: 0 20px;
        margin-top: 24px;
        .money_p {
          border-radius: 8px;
          background-color: #fff;
          padding: 16px 23px 25px 23px;
          h2 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .container {
            ul {
              display: flex;
              justify-content: space-around;
              li {
                text-align: center;
                font-size: 14px;
                .num {
                  margin-bottom: 26px;
                  font-family: Helvetica;
                  font-size: 18px;
                }
                .name {
                  font-size: 14px;
                  color: #7c7c7c;
                }
              }
            }
          }
        }
      }
      .activity {
        padding: 0 20px;
        margin: 24px 0;
        .activity_p {
          border-radius: 8px;
          background-color: #fff;
          padding: 16px 23px 25px 23px;
          h2 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 20px;
          }
          .container {
            ul {
              display: grid;
              grid-template-columns: repeat(4, 25%);
              // grid-column-gap: ;
              row-gap: 12px;
              li {
                justify-self: center;
                align-self: center;
                .iconfont {
                  font-size: 30px;
                }
                .name {
                  font-size: 12px;
                  color: #7c7c7c;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>