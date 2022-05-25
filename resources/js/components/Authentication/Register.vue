<template>
  <div class="login">
    <h4>Register Page</h4>
    <div class="form">
      <div class="mb-1">
        <label> Username</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="register.username"
          placeholder="Username"
          aria-label=".form-control-sm example"
          required
        />
      </div>
      <div class="mb-1">
        <label> Name</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="register.name"
          placeholder="Name"
          aria-label=".form-control-sm example"
          required
        />
      </div>
      <div class="mb-1">
        <label> Email Address</label>
        <input
          class="form-control form-control-sm"
          type="email"
          v-model="register.email"
          placeholder="Email Address"
          aria-label=".form-control-sm example"
          required
        />
      </div>
      <div class="mb-1">
        <label> Password</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="register.password"
          placeholder="Password"
          aria-label=".form-control-sm example"
          required
        />
      </div>
      <div class="mb-1">
        <label> Is Staff</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="register.is_staff"
          placeholder="Is Staff"
          aria-label=".form-control-sm example"
          required
        />
      </div>

      <div class="mb-1">
        <label> Is Active</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="register.is_active"
          placeholder="Is Active"
          aria-label=".form-control-sm example"
          required
        />
      </div>
      <div class="mb-1">
        <label> Is Superuser</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="register.is_superuser"
          placeholder="Is Superuser"
          aria-label=".form-control-sm example"
          required
        />
      </div>
      <div class="mb-4">
        <label> Last Login</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="register.last_login"
          placeholder="Last Login"
          aria-label=".form-control-sm example"
          required
        />
      </div>

      <div class="mb-1 text-center">
        <button class="loginBtn" v-on:click="registerHandler">Register</button>
      </div>

      <div class="mb-1 text-center">
        <p class="signUpText">
          Already a member?
          <span class="forgotPassword">
            <router-link to="/login">Login</router-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RegisterPage",
  components: {},
  data() {
    return {
      register: {
        username: "",
        name: "",
        email: "",
        password: "",
        is_staff: "",
        is_active: "",
        is_superuser: "",
        last_login: "",
      },
    };
  },
  methods: {
    async registerHandler() {
      let result = await axios.post("http://127.0.0.1:8000/api/register", {
        username: this.register.username,
        name: this.register.name,
        email: this.register.email,
        password: this.register.password,
        is_staff: this.register.is_staff,
        is_active: this.register.is_active,
        is_superuser: this.register.is_superuser,
        last_login: this.register.last_login,
      });
      if (result.status == 201) {
        this.$router.push({ name: "LoginPage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user) {
      this.$router.push({ name: "LoginPage" });
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