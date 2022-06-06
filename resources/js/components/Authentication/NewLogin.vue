<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="signup-form">
          <form
            class="mt-5 border p-4 bg-light shadow"
            v-on:submit.prevent="loginHandler"
          >
            <h4 class="mb-4 text-primary">Login into Account</h4>
            <div class="row">
              <div class="mb-3 col-md-12">
                <label>Username <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="username"
                  v-model.trim="$v.username.$model"
                  :class="{ 'is-invalid': validationStatus($v.username) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Username"
                />
                <div
                  v-if="!$v.username.required"
                  class="invalid-feedback mt-n3"
                >
                  The username field is required.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label>Password <span class="text-danger">*</span></label>
                <input
                  type="password"
                  name="password"
                  v-model.trim="$v.password.$model"
                  :class="{ 'is-invalid': validationStatus($v.password) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Password"
                />
                <div
                  v-if="!$v.password.required"
                  class="invalid-feedback mt-n3"
                >
                  The password field is required
                </div>
                <div
                  v-if="!$v.password.minLength"
                  class="invalid-feedback mt-n3"
                >
                  You must have at least
                  {{ $v.password.$params.minLength.min }} letters.
                </div>
                <div
                  v-if="!$v.password.maxLength"
                  class="invalid-feedback mt-n3"
                >
                  You must not have greater then
                  {{ $v.password.$params.maxLength.max }} letters.
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-primary btn-sm float-end">
                  Login Now
                </button>
              </div>
            </div>
          </form>
          <p class="text-center mt-3 text-dark">
            If you have no account, Please
            <router-link class="text-decoration-none" to="/register"
              >Signup Now</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  validations: {
    username: { required },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async loginHandler() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      let result = await axios.post(
        `http://127.0.0.1:8000/api/login?username=${this.username}&password=${this.password}`
      );
      console.log(result);

      if (result.status == 200 && result.data.user) {
        localStorage.setItem("user-data", JSON.stringify(result.data));
        this.$router.push({ name: "HomePage" });
      } else if (result.data.message == "Username is invalid") {
        alert("No Username Not Match");
      } else if (result.data.message == "password did not match") {
        alert("No Password Not Match");
      } else {
        alert("Errors");
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-data");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style>
</style>