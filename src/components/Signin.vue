<template>
  <div class="from-inline" id="">
    <h3>登入</h3>
    <div class="form-group">
      <input type="email" placeholder="email" class="form-control" v-model="email">
      <br>
      <input type="password" placeholder="password" class="form-control" v-model="password">
      <br>
      <button  class="btn btn-primary" @click="signIn">登入</button>
    </div>

    <br>
    <p>{{error.message}}</p>
    <br>
    <router-link to="/signup">不是用戶? 註冊</router-link>
  </div>
</template>
<script>
import { firebaseApp} from '../firebaseApp'

export default {
 data(){
   return {
     email:'',
     password:'',
    error:{
      message:''
    }
   }
 },
 methods:{
   signIn(){
     firebaseApp.auth().signInWithEmailAndPassword(this.email,this.password)
     .then((userData) => {
       alert('歡迎登入');
     })
     .catch((error) => { this.error.message = error.message });

   }
 }
}
</script>
<style>
</style>
