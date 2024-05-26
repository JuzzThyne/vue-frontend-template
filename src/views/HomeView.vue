<template>
    <div id="app">
        <v-btn @click="logout()">logout</v-btn>
        <router-view/>
    </div>
</template>

<script>
import LoginComponentVue from '@/components/authentication/LoginComponent.vue';
import { mapGetters } from 'vuex';
/* eslint-disable */
export default {
  name: "Home",
  components: {
    LoginComponentVue
  },
  computed: {
    ...mapGetters(["GET_CREDENTIAL"]),
  },
  data(){
    return{
    }
  },
  methods:{
    async logout() {
      let payload = {
          url: 'logout',
      };
      try {
          await this.$store.dispatch('credentialPost',payload).then(response => {
            localStorage.clear();
            this.$router.push({ name: 'login' });
          });
          
      } catch (error) {
        console.error("Login failed:", error);
      }
      
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
</style>
