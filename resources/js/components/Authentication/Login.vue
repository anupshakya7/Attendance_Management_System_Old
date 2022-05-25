<template>
  <div class="login">
    <h4>Login Page</h4>
    <div class="form">
      <div class="mb-1">
        <label> Username</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="username"
          placeholder="Username"
          aria-label=".form-control-sm example"
        />
      </div>
      <div class="mb-4">
        <label class="label"> Password</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="password"
          placeholder="Password"
          aria-label=".form-control-sm example"
        />
      </div>

      <div class="mb-1 text-center">
        <button class="loginBtn" @click="loginHandler">Login</button>
      </div>

      <div class="mb-1 text-center">
        <p class="signUpText">
          Don't have an account?
          <span class="forgotPassword">
            <router-link to="/register"> Sign Up</router-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async loginHandler() {
      let result = await axios.post(
        `http://127.0.0.1:8000/api/login?username=${this.username}&password=${this.password}`
      );
      if (result.status == 200) {
        localStorage.setItem("user", JSON.stringify(result.data.user));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>
<style scoped>
.login {
  width: 500px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px;
  padding: 5px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.login h4 {
  background-color: rgb(42, 73, 165);
  padding: 8px;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  box-shadow: 1px 2px 10px;
}

.login .loginBtn {
  border: none;
  width: 100%;
  background-color: rgb(42, 73, 165);
  padding: 5px 15px;
  border-radius: 5px;
  color: #fff;
  transition: 0.3s ease-in-out;
}

.login .loginBtn:hover {
  background-color: rgb(14, 39, 116);
}

.login .signUpText {
  font-size: 14px;
}
</style>