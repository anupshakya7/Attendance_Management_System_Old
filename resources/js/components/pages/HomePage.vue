<template>
  <div class="dashboard">
    <SideBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import SideBar from "../NavBar/SideNav.vue";
export default {
  name: "HomePage",
  components: {
    SideBar,
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
.dashboard {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 6fr;
  background: rgb(42, 73, 165);
  min-height: 100vh;
  height: auto;
  width: 100%;
}

.content {
  background-color: white;
  border-radius: 20px;
  margin: 10px 10px 10px 0px;
  box-shadow: 1px 2px 3px;
  width: 100%;
}
</style>