<template>
  <div class="like">
    <music-top></music-top>
    <div class="main">我的喜欢</div>
    <play></play>
  </div>
</template>
<style scoped lang="less">
.like {
  .main {
    min-height: calc(100vh - 143px);
  }
}
</style>
<script>
import MusicTop from "../../components/MusicTop.vue";
import Play from "../../components/Play.vue";
export default {
  components: { MusicTop, Play },
};
</script>
