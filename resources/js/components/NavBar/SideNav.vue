<template>
  <div class="sidebar">
    <div class="title">
      <router-link to="/" style="text-decoration: none">AMS</router-link>
    </div>

    <div class="menu-items">
      <router-link
        to="/"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
        ><div class="link-container">Dashboard</div></router-link
      >
    </div>
    <div class="menu-items">
      <router-link
        to="/department"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
        ><div class="link-container">Department</div></router-link
      >
    </div>
    <div class="menu-items">
      <router-link
        to="/employee"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
        ><div class="link-container">Employee</div></router-link
      >
    </div>

    <div class="menu-items">
      <router-link
        to="/transaction"
        active-class="active"
        exact
        tag="button"
        class="side-btn"
        ><div class="link-container">Transaction</div></router-link
      >
    </div>
    <!-- <form method="post" v-on:click="logout"> -->
    <!-- @csrf -->
    <button type="submit" v-on:click="logout" class="side-btn">Logout</button>
    <!-- </form> -->
  </div>
</template>
<script>
export default {
  name: "SideNav",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },

    // async logout() {
    //   let resultLogout = await axios.post("http://127.0.0.1:8000/api/logout");
    //   console.log(resultLogout);
    // },
  },
  mounted() {
    let user = localStorage.getItem("user-data");
    if (!user) {
      this.$router.push({ name: "LoginPage" });
    }
  },
};
</script>
<style scoped>
.title {
  font-size: 30px;
  margin: 20px auto;
  width: 100px;
  text-align: center;
  background: white;
  border-radius: 40px;
}
.title a {
  text-decoration: none;
  font-family: cursive;
  color: rgb(123, 87, 4);
  /* text-shadow: 4px 5px 6px; */
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.menu-items > * {
  margin-top: 5px;
}

.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  background-color: white;
  color: rgb(42, 73, 165);
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
  position: absolute;
  content: "";
  top: -30px;
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}

.side-btn.active::after {
  position: absolute;
  content: "";
  bottom: -30px;
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}

.side-btn {
  border: none;
  padding: 16px 0px;
  cursor: pointer;
  font-size: 15px;
  color: white;
  background-color: transparent;
}

.side-btn.active .link-container::before {
  position: absolute;
  top: -60px;
  right: 0;
  content: "";
  height: 60px;
  width: 60px;
  border-radius: 80%;
  background-color: rgb(42, 73, 165);
}

.side-btn.active .link-container::after {
  position: absolute;
  bottom: -60px;
  right: 0;
  content: "";
  height: 60px;
  width: 60px;
  border-radius: 80%;
  background-color: rgb(42, 73, 165);
  z-index: 99;
}
</style>