<template>
  <div class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card
      class="mx-auto pa-14 pb-8"
      elevation="10"
      max-width="500"
      width="100%"
      rounded="lg"
    >
      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      />

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="togglePassword"
      />

      <v-btn
        class="mb-4 mt-6"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        Log In
      </v-btn>

      <v-btn
        class="mb-2"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="signInWithGoogle()"
      >
      
        Sign in with Google
      </v-btn>
    </v-card>
  </div>
</template>



<script>
export default {
  layout: "auth",
  middleware: 'guest',
  methods: {
   signInWithGoogle(){
    this.$auth.loginWith('google')
    console.log("Signin with google")
   }
  }
}
</script>