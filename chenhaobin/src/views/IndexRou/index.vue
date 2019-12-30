<template>
  <div>
      账号：<input type="text" v-model="username" class="ip1"><br>
      密码：<input type="text" v-model="pwd" class="ip2"><br>
      <button @click="BindLogin()">登录</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username:'',
            pwd:''
        }
    },
    created() {
    },
    methods: {
       BindLogin() {
           if(this.username && this.pwd) {
                   this.$http.get('/api/login',{
               params:{
                   user:this.username,
                   pwd:this.pwd
               }
           }).then(res => {
               console.log(res,'res');
               localStorage.setItem('token',res.data.token)
               this.$router.push({
                   path:`/tab3`
               })
           })
           }
       }
    },
}
</script>

<style>
.ip1,.ip2{
    background: #eee;
}

</style>