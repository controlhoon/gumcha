<template>
  <div id="app">
    <div class="nav">
      <div class="logo">
        <h1>정밀검차</h1>
      </div>

      <div class="navbar">
        <!--<ul>
          <li><router-link tag="a" to="/">Home</router-link></li>
          <li><router-link tag="a" to="/about">About</router-link></li>
        </ul> -->
        <ul style="margin-left: 0;">
          <li><router-link tag="a" to="/">Home</router-link></li>
          <li><router-link tag="a" to="/login/signup">{{ nickname ? "" : "SignUp" }}</router-link></li>
          <li><router-link tag="a" to="/login">{{ nickname ? nickname : "Log in" }}</router-link></li>
          <li><router-link @click.native="clearSession" to="/">{{ nickname ? "Log out" : logout }}</router-link></li>
        </ul>
      </div>

    </div>
    <router-view/>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  data: function() {
    return {
      logout:''
    }
  },
  computed: {
    ...mapState({
      nickname: state => state.user.nickname,
    })
  },
  methods: {
    ...mapMutations(['setUser']),
    ...mapMutations(['ClearLogin']),
    //clear in server user session
    clearSession: function() {
      this.$http.post("/api/clearSession")
      .then((response) => {
        this.setUser(response.data);
        this.$cookies.remove('user');
      })
    },
  },
  //load to server user session
  created: function () {
   console.log(this.$cookies.get('user'));
   if(this.$cookies.get('user') === null) {
     this.setUser(0);
     this.$http.get("/api/checkUser")
     .then((response) => {
        this.setUser(response.data);
      });
      } else {
      this.setUser(this.$cookies.get('user'));
    }
  }
}
</script>
