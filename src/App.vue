<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
      return {

      }
    },
    mounted() {
      
    }
}
</script>

<style lang="less">
@import './less/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
