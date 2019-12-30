<template>
<van-tabbar v-model="active">
  <van-tabbar-item replace to="/tab1" icon="home-o">你好</van-tabbar-item>
  <van-tabbar-item  replace to="/tab2"  icon="search">还行</van-tabbar-item>
  <van-tabbar-item  replace to="/tab3"  icon="friends-o">俺需要守卫</van-tabbar-item>
</van-tabbar>

</template>

<script>
export default {
     data() {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
