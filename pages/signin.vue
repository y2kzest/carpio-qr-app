<template>
    <div class="d-flex mx-auto justify-center align-center" style="height: 100vh;">
        <v-card max-width="700">
            <v-card-text>
                <h1 style="text-align: center; color: white;">Login</h1>
                <v-text-field label="Email" prepend-icon="mdi-email"></v-text-field>
                <v-text-field label="Password" prepend-icon="mdi-lock" type="password"></v-text-field>
                <v-btn
                color="primary"
                elevation="2">Sign In</v-btn>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
export default{
    layout: "auth",
}
</script>