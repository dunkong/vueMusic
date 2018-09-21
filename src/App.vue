<template>
  <div id="app">
    <router-view></router-view>
    <div class="tab">
    <!-- <mt-tabbar v-model="selected">
  <mt-tab-item id="首页" @click.native="goindex">
    <img slot="icon" src="@/assets/100x100.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="个人中心" @click.native="gouser">
    <img slot="icon" src="@/assets/100x100.png">
    个人中心
  </mt-tab-item>
</mt-tabbar> -->
</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      selected:"首页"
    }
  },
  methods:{
    goindex:function(){
      this.$router.push('/')
    },
    gouser:function(){
      this.$router.push('/user')
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.tab{
  position:fixed;
  width:100%;
  bottom:0;
  left:0;
}
</style>
