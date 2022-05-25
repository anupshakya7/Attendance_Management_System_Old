<template>
  <div class="departmentUpdate">
    <h4>Update Page</h4>
    <div class="form">
      <div class="mb-1">
        <label>Department Number</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="department.departmentNumber"
          placeholder="Department Number"
          aria-label=".form-control-sm example"
        />
      </div>
      <div class="mb-1">
        <label class="label"> Department Name</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="department.departmentName"
          placeholder="Department Name"
          aria-label=".form-control-sm example"
        />
      </div>
      <div class="mb-1">
        <label class="label">Parent</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="department.parent"
          placeholder="Parent"
          aria-label=".form-control-sm example"
        />
      </div>
      <div class="mb-4">
        <label class="label">View</label>
        <input
          class="form-control form-control-sm"
          type="text"
          v-model="department.view"
          placeholder="View"
          aria-label=".form-control-sm example"
        />
      </div>

      <div class="mb-1 text-center">
        <button class="UpdateBtn" v-on:click="updateHandler">Update</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "UpdatePage",
  data() {
    return {
      department: {
        departmentNumber: "",
        departmentName: "",
        parent: "",
        view: "",
      },
    };
  },
  methods: {
    async updateHandler() {
      let result = await axios.put(
        "http://localhost:3000/department/" + this.$route.params.id,
        {
          departmentNumber: this.department.departmentNumber,
          departmentName: this.department.departmentName,
          parent: this.department.parent,
          view: this.department.view,
        }
      );
      if (result.data == 200) {
        this.$router.push({ name: "department" });
      }
    },
  },
  async mounted() {
    let result = await axios.get(
      "http://localhost:3000/department/" + this.$route.params.id
    );
    this.department = result.data;
  },
};
</script>
<style scoped>
.departmentUpdate {
  width: 650px;
  border-radius: 5px;
  box-shadow: 1px 2px 3px;
  padding: 5px;
  position: absolute;
  top: 30%;
  left: 55%;
  transform: translate(-50%, -50%);
}

.departmentUpdate h4 {
  background-color: rgb(42, 73, 165);
  padding: 8px;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  box-shadow: 1px 2px 10px;
}

.departmentUpdate .UpdateBtn {
  border: none;
  width: 100%;
  background-color: rgb(42, 73, 165);
  padding: 5px 15px;
  border-radius: 5px;
  color: #fff;
  transition: 0.3s ease-in-out;
}

.departmentUpdate .UpdateBtn:hover {
  background-color: rgb(14, 39, 116);
}
</style>