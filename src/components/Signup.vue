<template>
  <div class="from-inline" id="">
    <h3>註冊</h3>
    <div class="form-group">
      <input type="email" placeholder="email" class="form-control" v-model="email">
      <br>
      <input type="password" placeholder="password" class="form-control" v-model="password">
      <br>
      <button  class="btn btn-primary" @click="signUp">註冊</button>
    </div>

    <br>
    <p>{{error.message}}</p>
    <br>
    <router-link to="/signin">已經是用戶了? 登入</router-link>
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
   signUp(){
     firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)

     .catch(error => { this.error = error })

   }
 }
}
</script>
<style>
</style>
