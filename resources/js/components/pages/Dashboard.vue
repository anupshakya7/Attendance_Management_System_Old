<template>
  <div class="dashboardMain">
    <!-- <div class="row mt-3">
      <div class="col-sm-9"></div>
      <div class="col-sm-3">
        <div class="logout text-center">
          <button v-on:click="logoutHandler" class="logoutBtn">logout</button>
        </div>
      </div>
    </div> -->
    <!-- <div class="row dashboardMains text-center">
      <div class="col-sm-2 bline">
        <div class="row data">
          <div class="col-sm-4">
            <img src="../../../images/department.png" alt="DepartmentLogo" />
          </div>
          <div class="col-sm-8">
            <p>Department</p>
            <p>Number of Department</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2 bline">
        <div class="row data">
          <div class="col-sm-4">
            <img src="../../../images/department.png" alt="DepartmentLogo" />
          </div>
          <div class="col-sm-8">
            <p>Department</p>
            <p>Number of Department</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2 bline">
        <div class="row data">
          <div class="col-sm-4">
            <img src="../../../images/department.png" alt="DepartmentLogo" />
          </div>
          <div class="col-sm-8">
            <p>Department</p>
            <p>Number of Department</p>
          </div>
        </div>
      </div>
      <div class="col-sm-2 bline">
        <div class="row data">
          <div class="col-sm-4">
            <div class="dataImg">
              <img src="../../../images/department.png" alt="DepartmentLogo" />
            </div>
          </div>
          <div class="col-sm-8 dataGroup">
            <p class="dataTitle">Department</p>
            <p class="dataNumber">0</p>
          </div>
        </div>
      </div>
    </div> -->

    <p>Dashboard Page</p>
  </div>
</template>
<script>
export default {
  name: "DashboardPage",
  methods: {
    logoutHandler() {
      localStorage.clear();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>
<style scoped>
/* .dashboardMains {
  padding: 30px;
  height: 100%;
  width: 100%;
}

.bline {
  padding: 15px;
}

.dataImg {
  margin: 0 auto;
}
.data {
  font-family: cursive;
  cursor: pointer;
  padding: 20px;
  background: rgb(29, 35, 53);
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}
.data:hover {
  box-shadow: 1px 2px 6px;
}

.dataGroup {
  border-left: 2px solid white;
}

.dataTitle {
  color: white;
  font-size: 17px;
  font-weight: bold;
}
.dataNumber {
  color: red;
  margin-top: -15px;
  font-size: 20px;
}

.logoutBtn {
  width: 100px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}

.logoutBtn:hover {
  box-shadow: 1px 2px 10px;
} */
.dashboardMain {
  font-size: 60px;
  color: gray;
  font-weight: 600;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>