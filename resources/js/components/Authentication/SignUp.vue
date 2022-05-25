<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="signup-form">
          <form
            class="mt-5 border p-4 bg-light shadow"
            v-on:submit.prevent="signupHandler"
          >
            <h4 class="mb-4 text-primary">Create your Account</h4>
            <div class="row">
              <div class="mb-3 col-md-12">
                <label>Username <span class="text-danger">*</span> </label>
                <input
                  type="text"
                  name="uname"
                  v-model.trim="$v.username.$model"
                  :class="{ 'is-invalid': validationStatus($v.username) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Username"
                />
                <div v-if="!$v.username.required" class="invalid-feedback">
                  The Username field is required.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label>Name <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="name"
                  v-model="$v.name.$model"
                  :class="{ 'is-invalid': validationStatus($v.name) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Name"
                />
                <div v-if="!$v.name.required" class="invalid-feedback">
                  The Name field is required.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label>Email Address <span class="text-danger">*</span></label>
                <input
                  type="email"
                  name="email"
                  v-model="$v.email.$model"
                  :class="{ 'is-invalid': validationStatus($v.email) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Email Address"
                />
                <div v-if="!$v.email.required" class="invalid-feedback">
                  The Email Address is required.
                </div>
                <div v-if="!$v.email.email" class="invalid-feedback">
                  The Email is not validate.
                </div>
              </div>

              <div class="mb-3 col-md-12">
                <label>Password <span class="text-danger">*</span></label>
                <input
                  type="password"
                  name="password"
                  v-model="$v.password.$model"
                  :class="{ 'is-invalid': validationStatus($v.password) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Password"
                />
                <div v-if="!$v.password.required" class="invalid-feedback">
                  The password is required.
                </div>
                <div v-if="!$v.password.minLength" class="invalid-feedback">
                  You must have atleast
                  {{ $v.password.$params.minLength.min }} letters.
                </div>
                <div v-if="!$v.password.maxLength" class="invalid-feedback">
                  You must not have greate than
                  {{ $v.password.$params.maxLength.max }} letters.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label> Is Staff <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="is_staff"
                  v-model.trim="$v.is_staff.$model"
                  :class="{
                    'is-invalid': validationStatus($v.is_staff),
                  }"
                  class="form-control form-control-sm"
                  placeholder="Enter Is Staff or Not(1 or 0)"
                />
                <div v-if="!$v.is_staff.required" class="invalid-feedback">
                  The Is Staff is required.
                </div>
              </div>

              <div class="mb-3 col-md-12">
                <label>Is Active <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="is_active"
                  v-model="$v.is_active.$model"
                  :class="{ 'is-invalid': validationStatus($v.is_active) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Is Active"
                />
                <div v-if="!$v.is_active.required" class="invalid-feedback">
                  The Is Active is required.
                </div>
              </div>

              <div class="mb-3 col-md-12">
                <label>Is Superuser <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="is_superuser"
                  v-model="$v.is_superuser.$model"
                  :class="{ 'is-invalid': validationStatus($v.is_superuser) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Is Superuser"
                />
                <div v-if="!$v.password.required" class="invalid-feedback">
                  The Is Superuser is required.
                </div>
              </div>
              <div class="mb-3 col-md-12">
                <label> Last Login <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="last_login"
                  v-model.trim="$v.last_login.$model"
                  :class="{
                    'is-invalid': validationStatus($v.last_login),
                  }"
                  class="form-control form-control-sm"
                  placeholder="Enter Last Login (date format)"
                />
                <div v-if="!$v.last_login.required" class="invalid-feedback">
                  The Last Login is required.
                </div>
              </div>
              <div class="col-md-12">
                <button class="btn btn-primary btn-sm float-end">
                  Signup Now
                </button>
              </div>
            </div>
          </form>
          <p class="text-center mt-3 text-dark">
            If you have account, Please
            <router-link class="text-decoration-none" to="/login"
              >Login Now</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "SignUpPage",
  data() {
    return {
      username: "",
      name: "",
      email: "",
      password: "",
      is_staff: "",
      is_active: "",
      is_superuser: "",
      last_login: "",
    };
  },
  validations: {
    username: { required },
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
    is_staff: { required },
    is_active: { required },
    is_superuser: {
      required,
    },
    last_login: { required },
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async signupHandler() {
      this.$v.$touch();
      if (this.$v.pendding || this.$v.$error) return;
      let result = await axios.post("http://127.0.0.1:8000/api/register", {
        username: this.username,
        name: this.name,
        email: this.email,
        password: this.password,
        is_staff: this.is_staff,
        is_active: this.is_active,
        is_superuser: this.is_superuser,
        last_login: this.last_login,
      });
      console.log("login response :    " + result);
      if (result.status == 201) {
        this.$router.push({ name: "LoginPage" });
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