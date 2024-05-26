<template>
    <div id="app">
      <v-container class="container-class">
        <v-card class="v-card-container">
            <v-card-title>
                <v-img src="@/assets/logo.png" max-height="125" cover></v-img>
            </v-card-title>
            <v-card-text>
                <v-row class="d-flex flex-column">
                    <v-col class="">
                        <v-text-field
                        v-model="form.username"
                        class="mx-4"
                        label="Username"
                        dense
                        outlined
                        hide-details
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="form.password"
                            class="mx-4"
                            label="Password"
                            dense
                            outlined
                            hide-details
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
                <v-btn class="" dark large color="teal" @click="submit()"> LOGIN </v-btn>
            </v-card-actions>
        </v-card>
  </v-container>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
/* eslint-disable */
export default {
  name: "Home",
  data(){
    return{
      form: {
        username: '',
        password: ''
      },
    }
  },
  computed: {
    ...mapGetters(["GET_CREDENTIAL"])
  },
  mounted() {
  },

  methods: {
    async submit() {
    let payload = {
        url: 'login',
        email: this.form.username,
        password: this.form.password
    };
    try {
        await this.$store.dispatch('credentialPost', payload).then(response => {
          localStorage.setItem("token", response.token);
          this.$router.push({ name: 'dashboard' });
        });
        
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  },
  watch: {
    GET_CREDENTIAL: {
      handler(val){
        // console.log(val)
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style>
#app{
    background-color: #43f7bb;
    width: 100%;
    height: 100%;
}
.container-class {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
.v-card-container{
    width: 70%;
    height: auto;
}
</style>
