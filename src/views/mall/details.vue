<template>
  <div class="details">
    <!-- 遮罩层 -->
    <div class="cover" v-show="hasCart" @click="closeCart"></div>
    <!-- 商品介绍 -->
    <div class="info">商品介绍</div>
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
          <i class="iconfont" @click="add">&#xe607;</i>
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
    position: fixed;
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