<template>
  <div class="details">
    <!-- 遮罩层 -->
    <div class="cover" v-show="hasCart" @click="closeCart"></div>
    <!-- 商品介绍 -->
    <div class="info">
      <div class="show_img">
        <!-- 图片上方返回按钮 -->
        <div class="site">
          <div class="out">
            <div class="icon_bg out_icon" @click="out">
              <i class="iconfont">&#xe641;</i>
            </div>
            <div class="icon_bg other_icon">
              <i class="iconfont">&#xe618;</i>
            </div>
          </div>
        </div>
        <img :src="$imgsrc + 'food.png'" />
      </div>
      <!-- 主要介绍区 -->
      <div class="main_info">
        <div class="container base_data">
          <p class="money">
            ￥<em>24.33</em> <span>价格<em>67.33</em></span>
          </p>
          <h2>商品名称商品名称商品名称商品名称商品名称商品名</h2>
          <div class="btns">
            <div class="btn" v-for="(item, i) in 3" :key="i">
              <i class="iconfont">&#xe646;</i>分享
            </div>
          </div>
        </div>
        <!-- 其他保障区 -->
        <div class="other container">
          <div class="rows">
            <span class="problem">选择</span>
            <div class="answer">
              <span class="name">颜色分类/尺码</span
              ><i class="iconfont answer_right" style="color: #c1c3c5"
                >&#xe61f;</i
              >
            </div>
          </div>
          <div class="rows">
            <span class="problem">发货</span>
            <div class="answer">
              <span class="name">广东广州</span>
              <span class="answer_right num">月销100+</span>
            </div>
          </div>
          <div class="rows">
            <span class="problem">保障</span>
            <div class="answer">
              <span class="name">七天无理由 * 运费险</span
              ><i class="iconfont answer_right" style="color: #c1c3c5"
                >&#xe61f;</i
              >
            </div>
          </div>
        </div>
        <!-- 评论区 -->
        <div class="comment container">
          <div class="title">
            <span>评论(107)</span>
            <div>查看全部<i class="iconfont">&#xe61f;</i></div>
          </div>
          <div class="labels">
            <span>和原图一样(2)</span>
            <span>颜色很美(4)</span>
          </div>
          <div class="comment_example">
            <div class="user">
              <div
                class="face"
                :style="{ backgroundImage: 'url(' + $imgsrc + 'user.jpg)' }"
              ></div>

              <div class="info">
                <p class="name">张**三</p>
                <p class="time">6天前</p>
              </div>
            </div>
            <div class="content">
              <p>这是评价这是评价这是评价这是评价这是评价这是评价这是评价</p>
              <div
                class="imgs"
                v-for="(item, i) in 3"
                :key="i"
                :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
              ></div>
            </div>
            <hr />
            <div class="inquiry">
              <div class="title">
                <span>问大家(5)</span>
                <div>查看全部<i class="iconfont">&#xe61f;</i></div>
              </div>
              <div class="rows" v-for="(item, i) in 2" :key="i">
                <div><i class="iconfont">&#xe646;</i>值得买吗</div>
                <span>3个回答</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 店铺信息 -->
        <div class="shop container">
          <div class="base">
            <div class="banner">
              <div
                class="logo"
                :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
              ></div>
              <div class="info">
                <p class="name">店铺名称</p>
                <p class="stars">
                  综合体验
                  <i class="iconfont" v-for="(item, i) in 4" :key="i"
                    >&#xe642;</i
                  ><i class="iconfont">&#xe646;</i>
                </p>
              </div>
            </div>
            <div class="score">
              <div class="rows" v-for="(item, j) in 3" :key="j">
                宝贝描述3.6 <em>低</em>
              </div>
            </div>
          </div>
          <div class="btns">
            <button class="btn">进店逛逛</button>
            <button class="btn">全部宝贝</button>
          </div>
          <hr />
          <div class="recommend">
            <div class="title">
              <span>店铺推荐</span>
              <div>查看全部<i class="iconfont">&#xe61f;</i></div>
            </div>
            <div class="list">
              <div class="items" v-for="(item, i) in 6" :key="i">
                <div
                  class="imgs"
                  :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
                ></div>
                <p class="name">
                  推荐商品名称推荐商品名称推荐商品名称推荐商品名称推荐商品名称
                </p>
                <p class="money">￥<em>13.09</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 宝贝详情 -->
      <div class="detailed_photo">
        <span class="title">宝贝详情</span>
        <div class="photos">
          <img
            :src="$imgsrc + 'food.png'"
            v-for="(item, i) in 2"
            :key="i"
            class="photo"
          />
        </div>
      </div>
    </div>
    <!-- 底部购买 -->
    <div class="action">
      <div class="tag_box">
        <div class="tags" v-for="(item, i) in 3" :key="i">
          <i class="iconfont" :class="{ Selected: isSelected }">&#xe646;</i>
          <p>客服</p>
        </div>
      </div>
      <div class="btns">
        <button class="cart btn" @click="cartOpen">加入购物车</button>
        <button class="buy btn">购买</button>
      </div>
    </div>
    <!-- 购物车界面 -->
    <div class="dia" v-show="hasCart">
      <div class="close">
        <i class="iconfont" @click="closeCart">&#xe612;</i>
      </div>
      <div class="base_data">
        <div class="info">
          <div
            class="imgs"
            :style="{ backgroundImage: 'url(' + $imgsrc + 'food.png)' }"
          ></div>
          <span> ￥25 </span>
        </div>
        <div class="stock">库存{{ allNum }}件</div>
      </div>
      <div class="option">
        <p class="title">尺码</p>
        <ul>
          <li
            v-for="(item, i) in potionList1"
            :key="i"
            :class="{
              over: item.isOver,
              sel: sizeSel == item.id ? true : false,
            }"
            @click="sel('size', $event, item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="option">
        <p class="title">颜色分类</p>
        <ul>
          <li
            v-for="(itemc, j) in potionList2"
            :key="j"
            :class="{
              over: itemc.isOver,
              sel: colorSel == itemc.id ? true : false,
            }"
            @click="sel('color', $event, itemc)"
          >
            {{ itemc.name }}
          </li>
        </ul>
      </div>
      <!-- 购买数量 -->
      <div class="buy_num">
        <span class="tips">购买数量</span>
        <div class="quantity">
          <i class="iconfont" @click="reduce">&#xe637;</i>
          <span> {{ buyNum }} </span>
          <i class="iconfont" @click="add">&#xe62f;</i>
        </div>
      </div>
      <!-- 确定按钮 -->
      <div class="sure">
        <button @click="closeCart">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelected: false,
      hasCart: false,
      buyNum: 0,
      allNum: 9,
      sizeSel: 0,
      colorSel: 0,
      potionList1: [
        { id: 1, name: "S码数", isSelected: true, isOver: false },
        { id: 2, name: "M码数", isSelected: false, isOver: true },
        { id: 3, name: "L码数", isSelected: false, isOver: false },
        { id: 4, name: "XL码数", isSelected: true, isOver: false },
        { id: 5, name: "XXL码数", isSelected: false, isOver: false },
        { id: 6, name: "XXXL码数", isSelected: true, isOver: false },
        { id: 7, name: "收藏加购送礼品", isSelected: false, isOver: false },
      ],
      potionList2: [
        { id: 1, name: "蓝色", isSelected: true, isOver: false },
        { id: 2, name: "红色", isSelected: false, isOver: true },
        { id: 3, name: "黑色", isSelected: false, isOver: false },
        { id: 4, name: "彩色", isSelected: true, isOver: false },
        { id: 5, name: "紫色", isSelected: false, isOver: false },
        { id: 7, name: "收藏加购送礼品", isSelected: false, isOver: false },
      ],
    };
  },
  methods: {
    cartOpen() {
      this.hasCart = true;
    },
    // 关闭购物车
    closeCart() {
      this.hasCart = false;
    },
    // 返回上一页
    out() {
      this.$router.push("/mallHome");
    },
    // 选中分类
    sel(type, el, item) {
      console.log(type);
      if (type == "size" && !item.isOver) {
        item.id == this.sizeSel ? (this.sizeSel = 0) : (this.sizeSel = item.id);
      } else if (type == "color" && !item.isOver) {
        item.id == this.colorSel
          ? (this.colorSel = 0)
          : (this.colorSel = item.id);
      }
    },
    // 购物车商品减
    reduce() {
      this.buyNum > 0 ? this.buyNum-- : this.buyNum == this.buyNum;
    },
    // 购物车增加
    add() {
      this.buyNum < 9 ? this.buyNum++ : this.buyNum == this.buyNum;
    },
  },
};
</script>
<style scoped lang="less">
.details {
  color: #1b1c1c;
  background-color: rgba(247, 248, 250, 1);
  min-height: 100vh;
  hr {
    background-color: #f0f0f0;
    height: 1px;
    border: none;
    margin: 16px 0;
    width: 100%;
  }
  // 图片展示区，包括返回按钮
  .info {
    .show_img {
      position: relative;
      .site {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        .out {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          padding: 0 20px;
          .icon_bg {
            background-color: #666;
            border-radius: 50%;
            width: 34px;
            height: 34px;
            text-align: center;
            opacity: 0.8;
            .iconfont {
              color: #fff !important;
              line-height: 34px;
            }
          }
        }
      }
      img {
        width: 100%;
        height: 370px;
      }
    }
  }
  .main_info {
    padding: 12px;
    .container {
      background-color: #fff;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
    }
    // 基础商品信息
    .base_data {
      .money {
        color: #fd6416;
        font-size: 26px;
        font-weight: 500;
        span {
          color: #ccc;
          font-weight: 400;
          font-size: 12px;
          em {
            text-decoration: line-through;
          }
        }
      }
      h2 {
        font-weight: bold;
        font-size: 16px;
        margin: 4px 0;
      }
      .btns {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 10px;
        color: #999999;
        .btn {
          .iconfont {
            margin-right: 4px;
            vertical-align: center;
          }
        }
      }
    }
    // 其他商品信息
    .other {
      .rows {
        display: flex;
        box-sizing: content-box;
        align-items: center;
        height: 26px;
        .problem {
          color: #9f9f9f;
          width: 40px;
        }
        .answer {
          flex: 1;
          position: relative;
          .answer_right {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            font-size: 12px;
            color: #9f9f9f;
          }
          .num {
            font-size: 14px;
          }
        }
      }
    }
    // 评论区
    .comment {
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          font-weight: bold;
          font-size: 16px;
        }
        div {
          font-size: 14px;
          color: #fd6416;
          .iconfont {
            margin-left: 4px;
            vertical-align: middle;
            font-size: 12px;
            vertical-align: 1px;
          }
        }
      }
      .labels {
        margin: 14px 0;
        span {
          background-color: #ffeded;
          font-size: 14px;
          padding: 5px 10px;
          border-radius: 20px;
          margin-right: 10px;
        }
      }
      .comment_example {
        box-sizing: border-box;
        .user {
          display: flex;
          align-items: center;
          margin: 20px 0;
          .face {
            background-position: 50%;
            background-size: cover;
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background-color: #ddd;
            margin-right: 10px;
          }
          .info {
            flex: 1;
            font-size: 14px;
            .time {
              color: #ccc;
            }
          }
        }
        .content {
          box-sizing: border-box;
          p {
            margin-bottom: 10px;
          }
          .imgs {
            margin-right: 2px;
            width: 80px;
            height: 80px;
            background-position: 50%;
            background-size: cover;
            background-color: #ddd;
            display: inline-block;
          }
          .imgs:first-of-type {
            border-radius: 8px 0 0 8px;
          }
          .imgs:last-child {
            border-radius: 0 8px 8px 0;
          }
        }

        .inquiry {
          .title {
            margin-bottom: 8px;
          }
          .rows {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 20px;
            div {
              .iconfont {
                color: #fd6416 !important;
                vertical-align: middle;
                margin-right: 4px;
              }
            }
            span {
              color: #959595;
            }
          }
        }
      }
    }
    // 店铺信息
    .shop {
      .base {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .banner {
          flex: 1;
          box-sizing: border-box;
          .logo {
            background-position: 50%;
            background-size: cover;
            width: 70px;
            height: 70px;
            border-radius: 12px;
            background-color: #ddd;
            display: inline-block;
            vertical-align: middle;
            margin-right: 10px;
          }
          .info {
            height: 56px;
            display: inline-block;
            vertical-align: middle;
            .name {
              font-size: 18px;
              font-weight: bold;
            }
            .stars {
              margin-top: 14px;
              font-size: 10px;
              background-color: #cccccc;
              border-radius: 20px;
              padding: 2px 6px;
              color: #fff;
              .iconfont {
                font-size: 10px;
                color: #e10a36;
              }
            }
          }
        }
        .score {
          font-size: 12px;
          display: flex;
          flex-direction: column;
          height: 70px;
          .rows {
            flex: 1;
            em {
              color: #ccc;
            }
          }
        }
      }
      .btns {
        box-sizing: border-box;
        text-align: center;
        margin: 16px 0;
        .btn {
          padding: 4px 12px;
          border: 1px solid #fd6416;
          background-color: #fff;
          color: #fd6416;
          border-radius: 16px;
          margin: 0 6px;
        }
      }
      .recommend {
        margin-top: 10px;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-weight: bold;
            font-size: 16px;
          }
          div {
            font-size: 14px;
            color: #fd6416;
            .iconfont {
              margin-left: 4px;
              vertical-align: middle;
              font-size: 12px;
              vertical-align: 1px;
            }
          }
        }
        .list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 10px;
          .items {
            width: 30%;
            margin-bottom: 10px;

            .imgs {
              background-position: 50%;
              background-size: cover;
              background-color: #ddd;
              width: 100%;
              height: 96px;
              border-radius: 8px;
            }
            .name {
              margin: 6px 0;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              display: -webkit-box;
            }
            .money {
              color: #fd6416;
            }
          }
        }
      }
    }
  }
  // 宝贝详情图片
  .detailed_photo {
    text-align: center;
    .title {
      width: 120px;
      font-size: 12px;
      margin: 0 auto;
      color: #676767;
      position: relative;
      display: block;
      margin-bottom: 20px;
    }
    .title:before,
    .title:after {
      content: ""; /*CSS伪类用法*/
      position: absolute; /*定位背景横线的位置*/
      top: 52%;
      background: #d1d1d1; /*宽和高做出来的背景横线*/
      width: 30px;
      height: 1px;
    }
    .title::before {
      left: 0;
    }
    .title::after {
      right: 0;
    }
    .photos {
      .photo {
        width: 100%;
      }
    }
  }
  //   遮罩
  .cover {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  //   底部选择区
  .action {
    background-color: #fff;
    font-size: 14px;
    position: sticky;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    align-items: center;
    box-sizing: border-box;
    .tag_box {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tags {
        text-align: center;
        .Selected {
          color: rgb(255, 80, 0);
        }
        p {
          font-size: 12px;
        }
      }
    }
    .btns {
      margin-left: 16px;
      .btn {
        height: 40px;
        width: 110px;
        border: none;
        color: #fff;
      }
      .cart {
        border-radius: 20px 0 0 20px;
        background-color: red; /* 不支持渐变的时候显示 */
        background-image: linear-gradient(to right, #ffd01e, #ff8917);
      }
      .buy {
        border-radius: 0 20px 20px 0;
        background-image: linear-gradient(to right, #ff6034, #ee0a24);
      }
    }
  }
  //   购物车弹出层界面
  .dia {
    height: 80%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 2;
    border-radius: 20px 20px 0 0;
    padding: 18px 16px 16px 16px;
    box-sizing: border-box;
    .close {
      text-align: right;
      .iconfont {
        font-size: 24px;
      }
    }
    .base_data {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      .info {
        .imgs {
          background-position: 50%;
          background-size: cover;
          display: inline-block;
          background-color: #ddd;
          height: 76px;
          width: 76px;
        }
        span {
          font-size: 16px;
          color: #fd6416;
          font-weight: 500;
        }
      }
      .stock {
        color: #979797;
        font-size: 12px;
      }
    }
    .option {
      .title {
        font-size: 14px;
        font-weight: 500;
        color: #1b1c1c;
        padding: 16px 0;
      }
      ul {
        box-sizing: border-box;

        li {
          background-color: #eeeeef;
          padding: 6px 18px;
          margin: 0 14px 16px 0;
          color: #1b1c1c;
          font-size: 12px;
          font-weight: 500;
          display: inline-block;
          box-sizing: border-box;
        }
        .over {
          color: #999999;
        }
        .sel {
          //   border: 1px solid #fd6416;
          //   background-color: #fff;
          background-color: #fd6416;
          color: #fff;
        }
      }
    }
    .buy_num {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tips {
        font-size: 14px;
        font-weight: 500;
      }
      .quantity {
        .iconfont {
          color: #979797;
        }
        span {
          font-weight: 500;
          font-size: 14px;
          margin: 0 12px;
          padding: 4px;
          border: 1px solid #e2e2e2;
        }
      }
    }
    .sure {
      position: fixed;
      bottom: 10px;
      left: 0;
      right: 0;
      margin: 0 16px;
      box-sizing: border-box;
      button {
        background-image: linear-gradient(to right, #ff7a00, #fe560a);
        border: none;
        border-radius: 20px;
        width: 100%;
        height: 40px;
        color: #fff;
        font-weight: 500;
      }
    }
  }
}
</style>