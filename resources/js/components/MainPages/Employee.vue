<template>
  <div>
    <SearchBar />
    <main>
      <section class="recent">
        <div
          class="row bg-light"
          style="
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          "
        >
          <div class="col-sm-10"><h4 class="mt-3">Employee Graph</h4></div>
          <div class="col-sm-2">
            <p style="float: right">
              <button
                class="badge badge-primary text-dark mt-3"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                -
              </button>
            </p>
          </div>
        </div>

        <div class="collapse mt-3" id="collapseExample">
          <div class="activity-grid">
            <div class="activity-card" style="height: fit-content">
              <div class="row">
                <div class="col-sm-12"></div>
              </div>

              <div class="graph-responsive">
                <GChart
                  type="ColumnChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </div>

            <div class="activity-card" style="height: fit-content">
              <div class="row">
                <div class="col-sm-12"></div>
              </div>

              <div class="graph-responsive">
                <GChart
                  type="PieChart"
                  :data="chartData"
                  :options="chartOptions"
                  width="1500"
                />
              </div>
            </div>

            <div class="summary">
              <div class="summary-card">
                <div class="summary-single">
                  <span><i class="fas fa-user-tie"></i></span>
                  <div>
                    <h5>{{ employeeData.length }}</h5>
                    <small>Number of staff</small>
                  </div>
                </div>
                <div class="summary-single">
                  <span><i class="fas fa-ban"></i></span>
                  <div>
                    <h5>16</h5>
                    <small>Number of leave</small>
                  </div>
                </div>
                <div class="summary-single">
                  <span><i class="far fa-grin-alt"></i></span>
                  <div>
                    <h5>12</h5>
                    <small>Profile update request</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="row bg-light mt-3"
          style="
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
          "
        >
          <div class="col-sm-10"><h4 class="mt-3">Employee Table</h4></div>
          <div class="col-sm-2">
            <p style="float: right">
              <button
                class="badge badge-primary text-dark mt-3"
                type="button"
                data-toggle="collapse"
                data-target="#collapseExamples"
                aria-expanded="false"
                aria-controls="collapseExamples"
              >
                -
              </button>
            </p>
          </div>
        </div>

        <div class="collapse" id="collapseExamples">
          <div class="activity-grid-one">
            <div class="activity-card" style="height: fit-content">
              <div class="row p-3">
                <div class="col-sm-5">
                  <label>Department Name: </label>
                  <!-- <select
                    v-model="searchEmployee.departmentName"
                    class="form-select form-select-sm"
                    aria-label="Default select example"
                  >
                    <option disabled value="">Select Department</option>
                    <option
                      v-for="employeeNamess in searchBar"
                      v-bind:key="employeeNamess.id"
                    >
                      {{ employeeNamess.departmentName }}
                    </option>
                  </select> -->
                  <input
                    type="text"
                    name="departmentName"
                    v-model="searchEmployee.DeptName"
                    class="form-control form-control-sm"
                    placeholder="Enter Department Name"
                  />
                </div>
                <div class="col-sm-5">
                  <label> Search Employees </label>
                  <!-- <select
                    v-model="searchEmployee.employee"
                    class="form-select form-select-sm"
                    aria-label="Default select example"
                  >
                    <option disabled value="">Select Employee</option>
                    <option
                      v-for="employeeNames in searchBar"
                      v-bind:key="employeeNames.id"
                    >
                      {{ employeeNames.employeeName }}
                    </option>
                  </select> -->
                  <input
                    type="text"
                    name="employeeName"
                    v-model="searchEmployee.employee"
                    class="form-control form-control-sm"
                    placeholder="Enter Employee Name"
                  />
                </div>
                <div class="col-sm-2">
                  <label for=""></label>
                  <button
                    v-on:click="search"
                    type="button"
                    class="btn btn-success btn-sm w-100"
                  >
                    <i class="fas fa-search"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="activity-grid-second">
            <div class="activity-card" style="height: fit-content">
              <div class="row">
                <div class="col-sm-11">
                  <h3>Employee Activity</h3>
                </div>
                <div class="col-sm-1">
                  <button
                    type="button"
                    v-on:click="reload"
                    class="btn btn-primary btn-sm mt-3"
                  >
                    <i class="fa-solid fa-arrow-rotate-left"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm mt-3 ml-3"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">
                            Add Employee Details
                          </h5>
                          <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            data-bs-dismiss="modal"
                          >
                            <i class="fas fa-times"></i>
                          </button>
                        </div>
                        <div class="modal-body">
                          <div class="row">
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Employee Name
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="employeeName"
                                v-model.trim="$v.employee.empname.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.empname
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Employee Name"
                              />
                              <div
                                v-if="!$v.employee.empname.required"
                                class="invalid-feedback mt-n3"
                              >
                                The Employee Name is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Department Name
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                name="departmentName"
                                v-model="$v.employee.departmentname.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.departmentname
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Department Name"
                              />
                              <div
                                v-if="!$v.employee.departmentname.required"
                                class="invalid-feedback mt-n3"
                              >
                                The Department Name is required.
                              </div>
                            </div>

                            <div class="mb-3 mt-2 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Gender
                                <span class="text-danger">*</span></label
                              >
                              <span style="float: left">
                                <input
                                  type="radio"
                                  id="male"
                                  value="m"
                                  style="margin-left: 20px"
                                  v-model="$v.employee.gender.$model"
                                  :class="{
                                    'is-invalid': validationStatus(
                                      $v.employee.gender
                                    ),
                                  }"
                                />
                                <label for="male" style="font-size: 13px"
                                  >Male</label
                                >
                                <input
                                  type="radio"
                                  id="female"
                                  value="f"
                                  style="margin-left: 20px"
                                  v-model="$v.employee.gender.$model"
                                  :class="{
                                    'is-invalid': validationStatus(
                                      $v.employee.gender
                                    ),
                                  }"
                                />
                                <label for="female" style="font-size: 13px"
                                  >Female</label
                                >
                                <div
                                  v-if="!$v.employee.gender.required"
                                  class="invalid-feedback mt-n1"
                                >
                                  The Gender is required.
                                </div>
                              </span>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Birthday
                                <span class="text-danger">*</span></label
                              >
                              <span>
                                <input
                                  type="date"
                                  name="birthDay"
                                  v-model="$v.employee.birthday.$model"
                                  :class="{
                                    'is-invalid': validationStatus(
                                      $v.employee.birthday
                                    ),
                                  }"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Birthday"
                                />
                                <div
                                  v-if="!$v.employee.birthday.required"
                                  class="invalid-feedback mt-n3"
                                >
                                  The Birthday is required.
                                </div>
                              </span>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Nationality
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="nationality"
                                v-model.trim="$v.employee.nationality.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.nationality
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Nationality"
                              />
                              <div
                                v-if="!$v.employee.nationality.required"
                                class="invalid-feedback mt-n3"
                                style="width: auto !important"
                              >
                                The Nationality is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Title <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="title"
                                v-model.trim="$v.employee.title.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.title
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Title"
                              />
                              <div
                                v-if="!$v.employee.title.required"
                                class="invalid-feedback mt-n3"
                              >
                                The Title is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Office Phone
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="phone"
                                name="officePhone"
                                v-model="$v.employee.officephone.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.officephone
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Office Phone"
                              />
                              <div
                                v-if="!$v.employee.officephone.required"
                                class="invalid-feedback mt-n3"
                              >
                                The Office Phone is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Mobile
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="phone"
                                name="mobileNumber"
                                v-model.trim="$v.employee.mobile.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.mobile
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Mobile Number"
                              />
                              <div
                                v-if="!$v.employee.mobile.required"
                                class="invalid-feedback mt-n3"
                              >
                                The Mobile is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Id Card
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                name="idCard"
                                v-model.trim="$v.employee.card.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.card
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Id Card Number"
                              />
                              <div
                                v-if="!$v.employee.card.required"
                                class="invalid-feedback mt-n3"
                              >
                                The Id Card is required.
                              </div>
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Badge Number
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="number"
                                name="badgeNumber"
                                v-model.trim="$v.employee.badgenum.$model"
                                :class="{
                                  'is-invalid': validationStatus(
                                    $v.employee.badgenum
                                  ),
                                }"
                                class="form-control form-control-sm"
                                placeholder="Enter Id Card Number"
                              />
                              <div
                                v-if="!$v.employee.badgenum.required"
                                class="invalid-feedback mt-n3"
                              >
                                The Badge Number is required.
                              </div>
                            </div>
                            <!-- <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Registration Device
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="registerationDevice"
                                v-model="employee.SN"
                                class="form-control form-control-sm"
                                placeholder="Enter Registration Device"
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >FP <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="FP"
                                v-model="employee.FP"
                                class="form-control form-control-sm"
                                placeholder="Enter FP "
                              />
                            </div>
                            <div class="mb-3 col-md-6">
                              <label style="float: left; font-size: 14px"
                                >Transactions
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="text"
                                name="transactions"
                                v-model="employee.Transactions"
                                class="form-control form-control-sm"
                                placeholder="Enter Transactions "
                              />
                            </div>
                            <div class="mb-3 col-md-12">
                              <label style="float: left; font-size: 14px"
                                >Picture
                                <span class="text-danger">*</span></label
                              >
                              <input
                                type="file"
                                name="picture"
                                :v-model="employee.Picture"
                                class="form-control form-control-sm"
                              />
                            </div> -->
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            v-on:click="AddEmployeeDetails"
                            class="btn btn-primary btn-sm"
                          >
                            <i class="fas fa-plus me-1"></i>Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="col-sm-1 text-center"></div> -->
              </div>

              <div class="table-responsive">
                <!-- <table>
                  <thead>
                    <tr>
                      <th>Employee Name</th>
                      <th>Department Name</th>
                      <th>Sex</th>
                      <th>Birthday</th>
                      <th>Nationality</th>
                      <th>Title</th>
                      <th>Office Phone</th>
                      <th>Mobile</th>
                      <th>Id Card</th>
                      <th>Registration Device</th>
                      <th>FP</th>
                      <th>Transactions</th>
                      <th>Picture</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="employees in employeeData"
                      v-bind:key="employees.id"
                    >
                      <td>{{ employees.name }}</td>
                      <td>{{ employees.DeptName }}</td>
                      <td>{{ employees.Gender }}</td>
                      <td>{{ employees.Birthday }}</td>
                      <td>{{ employees.minzu }}</td>
                      <td>{{ employees.title }}</td>
                      <td>{{ employees.FPHONE }}</td>
                      <td>{{ employees.pager }}</td>
                      <td>{{ employees.Card }}</td>
                      <td>{{ employees.SN }}</td>
                      <td>{{ employees.FP }}</td>
                      <td>{{ employees.Transactions }}</td>
                      <td>{{ employees.Picture }}</td>
                      <td>
                        <span
                          class="badge bg-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                          style="cursor: pointer"
                          v-on:click="updateData(employees.id)"
                          ><i class="fas fa-pen"></i>Edit</span
                        >
                        <div
                          class="modal fade"
                          id="exampleModal1"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Update Department Details
                                </h5>
                              </div>
                              <div class="modal-body">
                                <div class="row">
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Employee Name
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="employeeName"
                                      v-model="updateEmployee.employeeName"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Department Number"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Department Name
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="departmentName"
                                      v-model="updateEmployee.departmentName"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Department Name"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Gender
                                      <span class="text-danger">*</span></label
                                    >
                                    <span style="float: left">
                                      <input
                                        type="radio"
                                        id="Male"
                                        value="Male"
                                        style="margin-left: 20px"
                                        v-model="updateEmployee.sex"
                                      />
                                      <label for="male" style="font-size: 13px"
                                        >Male</label
                                      >
                                      <input
                                        type="radio"
                                        id="Female"
                                        value="Female"
                                        style="margin-left: 20px"
                                        v-model="updateEmployee.sex"
                                      />
                                      <label
                                        for="female"
                                        style="font-size: 13px"
                                        >Female</label
                                      >
                                    </span>
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Birthday
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="date"
                                      name="birthDay"
                                      v-model="updateEmployee.birthday"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Birthday"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Nationality
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="nationality"
                                      v-model="updateEmployee.nationality"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Nationality"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Title
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="title"
                                      v-model="updateEmployee.title"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Title"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px">
                                      Office Phone
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="phone"
                                      name="officePhone"
                                      v-model="updateEmployee.officePhone"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Office Phone"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Mobile
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="mobile"
                                      name="mobile"
                                      v-model="updateEmployee.mobile"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Mobile Number"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Id Card
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="idCard"
                                      v-model="updateEmployee.idCard"
                                      class="form-control form-control-sm"
                                      placeholder="Enter ID Card"
                                    />
                                  </div>

                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Registration Device
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="registrationDevice"
                                      v-model="updateEmployee.registerDevice"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Registration Device"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >FP
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="FP"
                                      v-model="updateEmployee.FP"
                                      class="form-control form-control-sm"
                                      placeholder="Enter FP"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Transactions
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="text"
                                      name="Transactions"
                                      v-model="updateEmployee.Transactions"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Transactions"
                                    />
                                  </div>
                                  <div class="mb-3 col-md-6">
                                    <label style="float: left; font-size: 14px"
                                      >Picture
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      type="file"
                                      name="picture"
                                      :v-model="updateEmployee.picture"
                                      class="form-control form-control-sm"
                                      placeholder="Enter Transactions"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  v-on:click="
                                    UpdateEmployeeData(updateEmployee.id)
                                  "
                                  data-bs-dismiss="modal"
                                  class="btn btn-primary"
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table> -->
                <b-table
                  id="my-table"
                  :fields="fields"
                  striped
                  hover
                  :items="employeeData"
                  :per-page="perPage"
                  :current-page="currentPage"
                >
                  <template #cell(actions)="row">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      style="cursor: pointer"
                      class="btn btn-secondary btn-sm"
                      v-on:click="updateData(row.item.userid)"
                    >
                      <i class="fas fa-user-edit"></i>
                    </button>

                    <div
                      class="modal fade"
                      id="exampleModal1"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                              Update Department Details
                            </h5>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm"
                              data-bs-dismiss="modal"
                            >
                              <i class="fas fa-times"></i>
                            </button>
                          </div>
                          <div class="modal-body">
                            <div class="row">
                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px"
                                  >Employee Name
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="text"
                                  name="employeeName"
                                  v-model.trim="updateEmployee.name"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Employee Name"
                                />
                              </div>

                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px"
                                  >Department Name
                                  <span class="text-danger">*</span></label
                                >
                                <!-- <input
                                  type="text"
                                  name="departmentName"
                                  v-model="updateEmployee.defaultdeptid"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Department Name"
                                /> -->
                                <select
                                  v-model.trim="updateEmployee.defaultdeptid"
                                  class="form-select form-select-sm"
                                  style="font-size: 12px"
                                >
                                  <option hidden>Select Country</option>
                                  <option
                                    v-for="departmentDropdownItem in departmentDropDown"
                                    v-bind:key="departmentDropdownItem.id"
                                    :value="departmentDropdownItem.DeptID"
                                  >
                                    {{ departmentDropdownItem.DeptName }}
                                  </option>
                                </select>
                              </div>

                              <div class="mb-3 mt-2 col-md-6">
                                <label style="float: left; font-size: 14px"
                                  >Gender
                                  <span class="text-danger">*</span></label
                                >
                                <span style="float: left">
                                  <input
                                    type="radio"
                                    id="Male"
                                    value="m"
                                    style="margin-left: 20px"
                                    v-model="updateEmployee.Gender"
                                  />
                                  <label for="male" style="font-size: 13px"
                                    >Male</label
                                  >
                                  <input
                                    type="radio"
                                    id="Female"
                                    value="f"
                                    style="margin-left: 20px"
                                    v-model="updateEmployee.Gender"
                                  />
                                  <label for="female" style="font-size: 13px"
                                    >Female</label
                                  >
                                </span>
                              </div>
                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px">
                                  Birthday
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="date"
                                  name="birthDay"
                                  v-model="updateEmployee.Birthday"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Birthday"
                                />
                              </div>
                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px">
                                  Nationality
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="text"
                                  name="nationality"
                                  v-model.trim="updateEmployee.minzu"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Nationality"
                                />
                              </div>
                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px">
                                  Title
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="text"
                                  name="title"
                                  v-model.trim="updateEmployee.title"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Title"
                                />
                              </div>
                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px">
                                  Office Phone
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="phone"
                                  name="officePhone"
                                  v-model="updateEmployee.FPHONE"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Office Phone"
                                />
                              </div>
                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px"
                                  >Mobile
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="mobile"
                                  name="mobile"
                                  v-model.trim="updateEmployee.pager"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Mobile Number"
                                />
                              </div>

                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px"
                                  >Id Card
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="text"
                                  name="idCard"
                                  v-model.trim="updateEmployee.Card"
                                  class="form-control form-control-sm"
                                  placeholder="Enter ID Card"
                                />
                              </div>

                              <div class="mb-3 col-md-6">
                                <label style="float: left; font-size: 14px"
                                  >Badge Number
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  type="number"
                                  name="badgeNumber"
                                  v-model.trim="updateEmployee.badgenumber"
                                  class="form-control form-control-sm"
                                  placeholder="Enter Id Card Number"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              v-on:click="
                                UpdateEmployeeData(updateEmployee.userid)
                              "
                              data-bs-dismiss="modal"
                              class="btn btn-primary btn-sm"
                            >
                              <i class="fas fa-user-edit"></i>
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </b-table>

                <b-pagination
                  class="justify-content-center"
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                >
                </b-pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import SearchBar from "../SearchBar/SearchBar.vue";
import { required } from "vuelidate/lib/validators";
import axios from "axios";
import moment from "moment";
export default {
  name: "EmployeePage",
  components: {
    SearchBar,
  },
  data() {
    return {
      date: "2020/10/22",
      perPage: 15,
      currentPage: 1,
      fields: [
        { key: "name", label: "Employee Name" },
        { key: "DeptName", label: "Department Name" },
        { key: "Gender", label: "Gender" },
        { key: "minzu", label: "Nationality" },
        { key: "FPHONE", label: "Office Number" },
        { key: "pager", label: "Mobile" },
        { key: "DATE(userinfo.Birthday)", label: "Birthday" },
        { key: "title", label: "Title" },
        { key: "Card", label: "Id Card" },
        { key: "SN", label: "Registeration Number" },
        { key: "actions", label: "Actions" },
      ],
      // employee: {
      //   name: "",
      //   DeptName: "",
      //   Gender: "",
      //   Birthday: "",
      //   minzu: "",
      //   title: "",
      //   FPHONE: "",
      //   pager: "",
      //   Card: "",
      //   badgenumber: "",
      //   // SN: "",
      //   // FP: "",
      //   // Transactions: "",
      //   // Picture: "",
      // },
      employee: {
        empname: "",
        departmentname: "",
        gender: "",
        birthday: "",
        nationality: "",
        title: "",
        officephone: "",
        mobile: "",
        card: "",
        badgenum: "",
        // SN: "",
        // FP: "",
        // Transactions: "",
        // Picture: "",
      },
      updateEmployee: {
        name: "",
        badgenumber: "",
        defaultdeptid: "",
        Gender: "",
        Birthday: "",
        minzu: "",
        title: "",
        officephone: "",
        pager: "",
        Card: "",
      },
      searchEmployee: {
        birthday: "",
        DeptName: "",
        employee: "",
      },
      employeeData: [],
      updateEmployee: [],
      departmentDropDown: [],
      searchBar: [],
      chartData: [
        ["Department", "Project", "Employee"],
        ["Software Developer", 10, 50],
        ["Hardware Developer", 11, 60],
        ["Marketing", 66, 100],
        ["Human Resource", 10, 20],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Project, Employee: 2014-2017",
        },
      },
    };
  },

  validations: {
    employee: {
      empname: { required },
      departmentname: { required },
      gender: { required },
      birthday: { required },
      nationality: { required },
      title: { required },
      officephone: { required },
      mobile: { required },
      card: { required },
      badgenum: { required },
      // SN: { required },
      // FP: { required },
      // Transactions: { required },
      // Picture: { required },
    },
    // updateEmployee: {
    //   empname: { required },
    //   departmentname: { required },
    //   gender: { required },
    //   birthday: { required },
    //   nationality: { required },
    //   title: { required },
    //   officephone: { required },
    //   mobile: { required },
    //   card: { required },
    //   badgenum: { required },
    // },
  },
  methods: {
    validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    async updateData(id) {
      let updateData = await axios.get(
        "http://127.0.0.1:8000/api/getemployeedata/" + id
      );
      this.updateEmployee = updateData.data;
      console.log(this.updateEmployee);
    },
    async DepartmentDataDropDown() {
      let DepartmentDropDownResult = await axios.get(
        "http://127.0.0.1:8000/api/getdepartmentlist"
      );
      this.departmentDropDown = DepartmentDropDownResult.data;
      console.log(this.departmentDropDown);
    },
    async UpdateEmployeeData(id) {
      let updateDataResult = await axios.post(
        "http://127.0.0.1:8000/api/update/employee/" + id,
        {
          empname: this.updateEmployee.name,
          departmentname: this.updateEmployee.defaultdeptid,
          gender: this.updateEmployee.Gender,
          birthday: this.updateEmployee.DATE(userinfo.Birthday),
          nationality: this.updateEmployee.minzu,
          title: this.updateEmployee.title,
          officephone: this.updateEmployee.FPHONE,
          mobile: this.updateEmployee.pager,
          card: this.updateEmployee.Card,
          badgenum: this.updateEmployee.badgenumber,
          // registerDevice: this.updateEmployee.registerDevice,
          // FP: this.updateEmployee.FP,
          // Transactions: this.updateEmployee.Transactions,
          // Picture: this.updateEmployee.Picture,
        }
      );
      if (updateDataResult.status == 200) {
        alert("Employee Successfully Updated");
        this.reload();
      }
    },

    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },

    async reload() {
      let result = await axios.get("http://127.0.0.1:8000/api/getemployee");
      this.employeeData = result.data;
      console.log(this.employeeData);
    },
    async search() {
      let searchResult = await axios.post(
        `http://127.0.0.1:8000/api/filteremployeedata?birthday=${this.searchEmployee.birthday}&departmentname=${this.searchEmployee.DeptName}&employee=${this.searchEmployee.employee}`
      );
      this.employeeData = searchResult.data;
      console.log(employeeData);
    },
    async AddEmployeeDetails() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      let addEmpResult = await axios.post(
        "http://127.0.0.1:8000/api/create/employee",
        {
          empname: this.employee.empname,
          badgenum: this.employee.badgenum,
          departmentname: this.employee.departmentname,
          gender: this.employee.gender,
          birthday: this.employee.birthday,
          nationality: this.employee.nationality,
          title: this.employee.title,
          officePhone: this.employee.officephone,
          mobile: this.employee.mobile,
          card: this.employee.card,

          // registerDevice: this.employee.SN,
          // FP: this.employee.FP,
          // Transactions: this.employee.Transactions,
          // Picture: this.employee.Picture,
        }
      );
      console.log(addEmpResult);
      if (addEmpResult.status == 200) {
        alert("Employee Added Successfully");
        this.reload();
        this.addBtnClear();
      }

      if (addEmpResult.status == 500) {
        alert("Unsuccessfull Create");
      }
    },
    addBtnClear() {
      (this.employee.empname = ""),
        (this.employee.departmentname = ""),
        (this.employee.gender = ""),
        (this.employee.birthday = ""),
        (this.employee.nationality = ""),
        (this.employee.title = ""),
        (this.employee.officephone = ""),
        (this.employee.mobile = ""),
        (this.employee.card = ""),
        (this.employee.badgenum = "");
    },
  },
  async mounted() {
    this.reload();
    this.DepartmentDataDropDown();
    // let SearchResult = await axios.get("http://localhost:3000/employee");
    // this.searchBar = SearchResult.data;
    // console.log(SearchResult.data);
  },
  computed: {
    rows() {
      return this.employeeData.length;
    },
  },
};
</script>

<style scoped>
.activity-grid {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 1.5rem;
}
</style>