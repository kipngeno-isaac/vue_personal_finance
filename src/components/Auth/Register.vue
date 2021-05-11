<template>
  <form @submit.prevent="register()">
    <v-card>
      <v-card-title>
        Hey Register for cool books
      </v-card-title>

      <v-card-text>
        <v-text-field
          outlined
          label="Full name"
          v-model="userData.name"
        ></v-text-field>

        <v-text-field
          outlined
          label="Email address"
          v-model="userData.email"
        ></v-text-field>

        <v-text-field
          outlined
          label="Username"
          v-model="userData.username"
        ></v-text-field>

        <v-text-field
          outlined
          label="Password"
          v-model="userData.password"
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
          Register User
        </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
export default {
  data () {
    return {
      userData: {
        name: "Isaac",
        email: "isaks@soma.com",
        password: "password",
        username: "ZakR",
      }
    }
  },

  methods: {
    register () {
      
    }
  }
}
</script>
