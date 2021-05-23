<template>
  <form @submit.prevent="login()">
    <v-card>
      <v-card-title>
        Sign In
      </v-card-title>

      <v-card-text>
        <v-text-field
          outlined
          v-model="email"
          persistent-hint
          label="Email address"
        ></v-text-field>

        <v-text-field
          outlined
          v-model="password"
          persistent-hint
          type="password"
          label="Password"
        ></v-text-field>
      </v-card-text>

      <v-card-actions class="px-4 pb-5">
        <v-btn
          type="submit"
          color="blue"
          x-large
          block
          dark
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
      email:'',
      password: ''
    }
  },
  methods: {
    login(){
      let data = {};
      data.email = this.email;
      data.password = this.password
      axios.post(`${process.env.BASE_URL}/auth/login`, data)
      .then(response => response.data)
      .then(data => {
        if(data.status){
          this.$router.push({name: 'Dashboard'});
        }
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });    
    }
  }
}
</script>
