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
                <div
                  v-if="!$v.username.required"
                  class="invalid-feedback mt-n3"
                >
                  The Username field is required.
                </div>
              </div>
              <div class="mb-3 col-md-6">
                <label>First Name <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="fname"
                  v-model="$v.first_name.$model"
                  :class="{ 'is-invalid': validationStatus($v.first_name) }"
                  class="form-control form-control-sm"
                  placeholder="Enter First Name"
                />
                <div
                  v-if="!$v.first_name.required"
                  class="invalid-feedback mt-n3"
                >
                  The First Name field is required.
                </div>
              </div>
              <div class="mb-3 col-md-6">
                <label>Last Name <span class="text-danger">*</span></label>
                <input
                  type="text"
                  name="name"
                  v-model="$v.last_name.$model"
                  :class="{ 'is-invalid': validationStatus($v.last_name) }"
                  class="form-control form-control-sm"
                  placeholder="Enter Last Name"
                />
                <div
                  v-if="!$v.last_name.required"
                  class="invalid-feedback mt-n3"
                >
                  The Last Name field is required.
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
                <div v-if="!$v.email.required" class="invalid-feedback mt-n3">
                  The Email Address is required.
                </div>
                <div v-if="!$v.email.email" class="invalid-feedback mt-n3">
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
                <div
                  v-if="!$v.password.required"
                  class="invalid-feedback mt-n3"
                >
                  The password is required.
                </div>
                <div
                  v-if="!$v.password.minLength"
                  class="invalid-feedback mt-n3"
                >
                  You must have atleast
                  {{ $v.password.$params.minLength.min }} letters.
                </div>
                <div
                  v-if="!$v.password.maxLength"
                  class="invalid-feedback mt-n3"
                >
                  You must not have greate than
                  {{ $v.password.$params.maxLength.max }} letters.
                </div>
              </div>

              <div class="mb-3 col-md-3">
                <label for="is_staff"
                  >Is Staff<span class="text-danger">*</span></label
                >
                <input
                  class="ms-3"
                  type="checkbox"
                  value="is_staff"
                  v-model="is_staff"
                  id="is_staff"
                />
              </div>

              <div class="mb-3 col-md-3">
                <label for="is_active"
                  >Is Active<span class="text-danger">*</span></label
                >
                <input
                  class="ms-3"
                  type="checkbox"
                  value="is_active"
                  v-model="is_active"
                  id="is_active"
                />
              </div>

              <div class="mb-3 col-md-4">
                <label for="is_superuser"
                  >Is Superuser<span class="text-danger">*</span></label
                >
                <input
                  class="ms-3"
                  type="checkbox"
                  value="is_superuser"
                  v-model="is_superuser"
                  id="is_superuser"
                />
              </div>
              <div class="col-md-12 mt-4">
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
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      is_staff: "",
      is_active: "",
      is_superuser: "",
    };
  },
  validations: {
    username: { required },
    first_name: { required },
    last_name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6), maxLength: maxLength(18) },
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async signupHandler() {
      if (this.is_staff == true) {
        this.is_staff = 1;
      } else {
        this.is_staff = 0;
      }

      if (this.is_active == true) {
        this.is_active = 1;
      } else {
        this.is_active = 0;
      }

      if (this.is_superuser == true) {
        this.is_superuser = 1;
      } else {
        this.is_superuser = 0;
      }
      this.$v.$touch();
      if (this.$v.pendding || this.$v.$error) return;
      let result = await axios.post("http://127.0.0.1:8000/api/register", {
        username: this.username,
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        is_staff: this.is_staff,
        is_active: this.is_active,
        is_superuser: this.is_superuser,
      });
      console.log(result);
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