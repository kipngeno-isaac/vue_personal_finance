<template>
  <form>
    <v-card>
      <v-card-title>
        Sign In
      </v-card-title>

      <v-card-text>
        <v-text-field
          outlined
          persistent-hint
          label="Email address"
        ></v-text-field>

        <v-text-field
          outlined
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

export default {
  
}
</script>
