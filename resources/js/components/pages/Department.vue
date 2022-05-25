<template>
  <div class="department">
    <div class="container py-5 overflow-y:auto">
      <h3 style="color: rgb(42, 73, 165)" class="mb-4">Department</h3>
      <table
        id="example"
        class="table table-striped border rounded py-5 text-center"
        style="width: 100%"
      >
        <thead>
          <tr>
            <th>Department Number</th>
            <th>Department Name</th>
            <th>Parent</th>
            <th>View</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="department in departmentData" v-bind:key="department.id">
            <td>{{ department.departmentNumber }}</td>
            <td>{{ department.departmentName }}</td>
            <td>{{ department.parent }}</td>
            <td>{{ department.view }}</td>
            <td>
              <router-link :to="'/departmentUpdate/' + department.id">
                Update
              </router-link>
              <button type="button" class="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "DepartmentPage",
  data() {
    return {
      departmentData: [],
    };
  },
  async mounted() {
    let departmentTable = await axios.get("http://localhost:3000/department");
    this.departmentData = departmentTable.data;
  },
};
</script>
<style scoped>
.department {
  font-size: 14px;
  color: gray;
  font-weight: 600;
  width: 100%;
  /* display: flex; */
  justify-content: center;
  align-items: center;
}
</style>