<template>
  <div class="home">
    <div class="btn">
      <router-link to="/lawyer"><button>律师简介界面</button></router-link>
      <router-link to="/details"><button>商城</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped lang="less">
.home {
  // padding: 20px;

  .btn {
    // display: grid;
    // grid-template-columns: auto auto auto;
    // grid-template-rows: auto auto auto;
    // grid-gap: 10px;
    button {
      background-color: #fff;
      border: 1px solid #1989fa;
      color: #1989fa;
      padding: 8px 11px;
      margin: 10px;
    }
  }
}
</style>
