"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_MainPages_Employee_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar_SearchBar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SearchBar/SearchBar.vue */ "./resources/js/components/SearchBar/SearchBar.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EmployeePage",
  components: {
    SearchBar: _SearchBar_SearchBar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      date: "2020/10/22",
      perPage: 15,
      currentPage: 1,
      fields: [{
        key: "name",
        label: "Employee Name"
      }, {
        key: "DeptName",
        label: "Department Name"
      }, {
        key: "Gender",
        label: "Gender"
      }, {
        key: "minzu",
        label: "Nationality"
      }, {
        key: "FPHONE",
        label: "Office Number"
      }, {
        key: "pager",
        label: "Mobile"
      }, {
        key: "DATE(userinfo.Birthday)",
        label: "Birthday"
      }, {
        key: "title",
        label: "Title"
      }, {
        key: "Card",
        label: "Id Card"
      }, {
        key: "SN",
        label: "Registeration Number"
      }, {
        key: "actions",
        label: "Actions"
      }],
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
        badgenum: "" // SN: "",
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
        Card: ""
      },
      searchEmployee: {
        birthday: "",
        DeptName: "",
        employee: ""
      },
      employeeData: []
    }, _defineProperty(_ref, "updateEmployee", []), _defineProperty(_ref, "departmentDropDown", []), _defineProperty(_ref, "searchBar", []), _defineProperty(_ref, "chartData", [["Department", "Project", "Employee"], ["Software Developer", 10, 50], ["Hardware Developer", 11, 60], ["Marketing", 66, 100], ["Human Resource", 10, 20]]), _defineProperty(_ref, "chartOptions", {
      chart: {
        title: "Company Performance",
        subtitle: "Project, Employee: 2014-2017"
      }
    }), _ref;
  },
  validations: {
    employee: {
      empname: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      departmentname: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      gender: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      birthday: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      nationality: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      title: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      officephone: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      mobile: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      card: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      badgenum: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      } // SN: { required },
      // FP: { required },
      // Transactions: { required },
      // Picture: { required },

    } // updateEmployee: {
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
    validationStatus: function validationStatus(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    updateData: function updateData(id) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var updateData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://127.0.0.1:8000/api/getemployeedata/" + id);

              case 2:
                updateData = _context.sent;
                _this.updateEmployee = updateData.data;
                console.log(_this.updateEmployee);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    DepartmentDataDropDown: function DepartmentDataDropDown() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var DepartmentDropDownResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://127.0.0.1:8000/api/getdepartmentlist");

              case 2:
                DepartmentDropDownResult = _context2.sent;
                _this2.departmentDropDown = DepartmentDropDownResult.data;
                console.log(_this2.departmentDropDown);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    UpdateEmployeeData: function UpdateEmployeeData(id) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var updateDataResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://127.0.0.1:8000/api/update/employee/" + id, {
                  empname: _this3.updateEmployee.name,
                  departmentname: _this3.updateEmployee.defaultdeptid,
                  gender: _this3.updateEmployee.Gender,
                  birthday: _this3.updateEmployee.DATE(userinfo.Birthday),
                  nationality: _this3.updateEmployee.minzu,
                  title: _this3.updateEmployee.title,
                  officephone: _this3.updateEmployee.FPHONE,
                  mobile: _this3.updateEmployee.pager,
                  card: _this3.updateEmployee.Card,
                  badgenum: _this3.updateEmployee.badgenumber // registerDevice: this.updateEmployee.registerDevice,
                  // FP: this.updateEmployee.FP,
                  // Transactions: this.updateEmployee.Transactions,
                  // Picture: this.updateEmployee.Picture,

                });

              case 2:
                updateDataResult = _context3.sent;

                if (updateDataResult.status == 200) {
                  alert("Employee Successfully Updated");

                  _this3.reload();
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    format_date: function format_date(value) {
      if (value) {
        return moment__WEBPACK_IMPORTED_MODULE_3___default()(String(value)).format("YYYY-MM-DD");
      }
    },
    reload: function reload() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().get("http://127.0.0.1:8000/api/getemployee");

              case 2:
                result = _context4.sent;
                _this4.employeeData = result.data;
                console.log(_this4.employeeData);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    search: function search() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var searchResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://127.0.0.1:8000/api/filteremployeedata?birthday=".concat(_this5.searchEmployee.birthday, "&departmentname=").concat(_this5.searchEmployee.DeptName, "&employee=").concat(_this5.searchEmployee.employee));

              case 2:
                searchResult = _context5.sent;
                _this5.employeeData = searchResult.data;
                console.log(employeeData);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    AddEmployeeDetails: function AddEmployeeDetails() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6() {
        var addEmpResult;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _this6.$v.$touch();

                if (!(_this6.$v.$pendding || _this6.$v.$error)) {
                  _context6.next = 3;
                  break;
                }

                return _context6.abrupt("return");

              case 3:
                _context6.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://127.0.0.1:8000/api/create/employee", {
                  empname: _this6.employee.empname,
                  badgenum: _this6.employee.badgenum,
                  departmentname: _this6.employee.departmentname,
                  gender: _this6.employee.gender,
                  birthday: _this6.employee.birthday,
                  nationality: _this6.employee.nationality,
                  title: _this6.employee.title,
                  officePhone: _this6.employee.officephone,
                  mobile: _this6.employee.mobile,
                  card: _this6.employee.card // registerDevice: this.employee.SN,
                  // FP: this.employee.FP,
                  // Transactions: this.employee.Transactions,
                  // Picture: this.employee.Picture,

                });

              case 5:
                addEmpResult = _context6.sent;
                console.log(addEmpResult);

                if (addEmpResult.status == 200) {
                  alert("Employee Added Successfully");

                  _this6.reload();

                  _this6.addBtnClear();
                }

                if (addEmpResult.status == 500) {
                  alert("Unsuccessfull Create");
                }

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    addBtnClear: function addBtnClear() {
      this.employee.empname = "", this.employee.departmentname = "", this.employee.gender = "", this.employee.birthday = "", this.employee.nationality = "", this.employee.title = "", this.employee.officephone = "", this.employee.mobile = "", this.employee.card = "", this.employee.badgenum = "";
    }
  },
  mounted: function mounted() {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee7() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this7.reload();

              _this7.DepartmentDataDropDown(); // let SearchResult = await axios.get("http://localhost:3000/employee");
              // this.searchBar = SearchResult.data;
              // console.log(SearchResult.data);


            case 2:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },
  computed: {
    rows: function rows() {
      return this.employeeData.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SearchBar",
  methods: {
    logout: function logout() {
      localStorage.clear();
      this.$router.push({
        name: "LoginPage"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.activity-grid[data-v-1344437d] {\r\n  display: grid;\r\n  grid-template-columns: 32% 32% 32%;\r\n  grid-column-gap: 1.5rem;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.logout {\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  border-radius: 50%;\r\n  transition: 0.5s ease-in-out;\n}\n.logout:hover {\r\n  color: rgb(23, 22, 22);\r\n  text-shadow: 1px 1px 8px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_id_1344437d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_id_1344437d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_id_1344437d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/MainPages/Employee.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/MainPages/Employee.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Employee_vue_vue_type_template_id_1344437d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=1344437d&scoped=true& */ "./resources/js/components/MainPages/Employee.vue?vue&type=template&id=1344437d&scoped=true&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/components/MainPages/Employee.vue?vue&type=script&lang=js&");
/* harmony import */ var _Employee_vue_vue_type_style_index_0_id_1344437d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css& */ "./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_1344437d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Employee_vue_vue_type_template_id_1344437d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1344437d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MainPages/Employee.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=374d0fcc& */ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&");
/* harmony import */ var _SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SearchBar/SearchBar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MainPages/Employee.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/MainPages/Employee.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_id_1344437d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=style&index=0&id=1344437d&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/MainPages/Employee.vue?vue&type=template&id=1344437d&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/MainPages/Employee.vue?vue&type=template&id=1344437d&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_1344437d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_1344437d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_1344437d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=template&id=1344437d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=template&id=1344437d&scoped=true&");


/***/ }),

/***/ "./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_374d0fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchBar.vue?vue&type=template&id=374d0fcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=template&id=1344437d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MainPages/Employee.vue?vue&type=template&id=1344437d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("SearchBar"),
      _vm._v(" "),
      _c("main", [
        _c("section", { staticClass: "recent" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse mt-3", attrs: { id: "collapseExample" } },
            [
              _c("div", { staticClass: "activity-grid" }, [
                _c(
                  "div",
                  {
                    staticClass: "activity-card",
                    staticStyle: { height: "fit-content" },
                  },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "graph-responsive" },
                      [
                        _c("GChart", {
                          attrs: {
                            type: "ColumnChart",
                            data: _vm.chartData,
                            options: _vm.chartOptions,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "activity-card",
                    staticStyle: { height: "fit-content" },
                  },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "graph-responsive" },
                      [
                        _c("GChart", {
                          attrs: {
                            type: "PieChart",
                            data: _vm.chartData,
                            options: _vm.chartOptions,
                            width: "1500",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "summary" }, [
                  _c("div", { staticClass: "summary-card" }, [
                    _c("div", { staticClass: "summary-single" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", [
                        _c("h5", [_vm._v(_vm._s(_vm.employeeData.length))]),
                        _vm._v(" "),
                        _c("small", [_vm._v("Number of staff")]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(4),
                    _vm._v(" "),
                    _vm._m(5),
                  ]),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _vm._m(6),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "collapse", attrs: { id: "collapseExamples" } },
            [
              _c("div", { staticClass: "activity-grid-one" }, [
                _c(
                  "div",
                  {
                    staticClass: "activity-card",
                    staticStyle: { height: "fit-content" },
                  },
                  [
                    _c("div", { staticClass: "row p-3" }, [
                      _c("div", { staticClass: "col-sm-5" }, [
                        _c("label", [_vm._v("Department Name: ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.searchEmployee.DeptName,
                              expression: "searchEmployee.DeptName",
                            },
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            type: "text",
                            name: "departmentName",
                            placeholder: "Enter Department Name",
                          },
                          domProps: { value: _vm.searchEmployee.DeptName },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.searchEmployee,
                                "DeptName",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-5" }, [
                        _c("label", [_vm._v(" Search Employees ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.searchEmployee.employee,
                              expression: "searchEmployee.employee",
                            },
                          ],
                          staticClass: "form-control form-control-sm",
                          attrs: {
                            type: "text",
                            name: "employeeName",
                            placeholder: "Enter Employee Name",
                          },
                          domProps: { value: _vm.searchEmployee.employee },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.searchEmployee,
                                "employee",
                                $event.target.value
                              )
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-2" }, [
                        _c("label", { attrs: { for: "" } }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm w-100",
                            attrs: { type: "button" },
                            on: { click: _vm.search },
                          },
                          [
                            _c("i", { staticClass: "fas fa-search" }),
                            _vm._v(
                              "\n                  Search\n                "
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "activity-grid-second" }, [
                _c(
                  "div",
                  {
                    staticClass: "activity-card",
                    staticStyle: { height: "fit-content" },
                  },
                  [
                    _c("div", { staticClass: "row" }, [
                      _vm._m(7),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-1" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm mt-3",
                            attrs: { type: "button" },
                            on: { click: _vm.reload },
                          },
                          [
                            _c("i", {
                              staticClass: "fa-solid fa-arrow-rotate-left",
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(8),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            attrs: {
                              id: "exampleModal",
                              tabindex: "-1",
                              "aria-labelledby": "exampleModalLabel",
                              "aria-hidden": "true",
                            },
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "modal-dialog modal-lg" },
                              [
                                _c("div", { staticClass: "modal-content" }, [
                                  _vm._m(9),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-body" }, [
                                    _c("div", { staticClass: "row" }, [
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(10),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value:
                                                  _vm.$v.employee.empname
                                                    .$model,
                                                expression:
                                                  "$v.employee.empname.$model",
                                                modifiers: { trim: true },
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.empname
                                                ),
                                            },
                                            attrs: {
                                              type: "text",
                                              name: "employeeName",
                                              placeholder:
                                                "Enter Employee Name",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.empname.$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee.empname,
                                                  "$model",
                                                  $event.target.value.trim()
                                                )
                                              },
                                              blur: function ($event) {
                                                return _vm.$forceUpdate()
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.empname.required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Employee Name is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(11),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.$v.employee.departmentname
                                                    .$model,
                                                expression:
                                                  "$v.employee.departmentname.$model",
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.departmentname
                                                ),
                                            },
                                            attrs: {
                                              type: "number",
                                              name: "departmentName",
                                              placeholder:
                                                "Enter Department Name",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.departmentname
                                                  .$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee
                                                    .departmentname,
                                                  "$model",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.departmentname
                                            .required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Department Name is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 mt-2 col-md-6" },
                                        [
                                          _vm._m(12),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticStyle: { float: "left" } },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.$v.employee.gender
                                                        .$model,
                                                    expression:
                                                      "$v.employee.gender.$model",
                                                  },
                                                ],
                                                class: {
                                                  "is-invalid":
                                                    _vm.validationStatus(
                                                      _vm.$v.employee.gender
                                                    ),
                                                },
                                                staticStyle: {
                                                  "margin-left": "20px",
                                                },
                                                attrs: {
                                                  type: "radio",
                                                  id: "male",
                                                  value: "m",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.$v.employee.gender
                                                      .$model,
                                                    "m"
                                                  ),
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    return _vm.$set(
                                                      _vm.$v.employee.gender,
                                                      "$model",
                                                      "m"
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                  },
                                                  attrs: { for: "male" },
                                                },
                                                [_vm._v("Male")]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.$v.employee.gender
                                                        .$model,
                                                    expression:
                                                      "$v.employee.gender.$model",
                                                  },
                                                ],
                                                class: {
                                                  "is-invalid":
                                                    _vm.validationStatus(
                                                      _vm.$v.employee.gender
                                                    ),
                                                },
                                                staticStyle: {
                                                  "margin-left": "20px",
                                                },
                                                attrs: {
                                                  type: "radio",
                                                  id: "female",
                                                  value: "f",
                                                },
                                                domProps: {
                                                  checked: _vm._q(
                                                    _vm.$v.employee.gender
                                                      .$model,
                                                    "f"
                                                  ),
                                                },
                                                on: {
                                                  change: function ($event) {
                                                    return _vm.$set(
                                                      _vm.$v.employee.gender,
                                                      "$model",
                                                      "f"
                                                    )
                                                  },
                                                },
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "label",
                                                {
                                                  staticStyle: {
                                                    "font-size": "13px",
                                                  },
                                                  attrs: { for: "female" },
                                                },
                                                [_vm._v("Female")]
                                              ),
                                              _vm._v(" "),
                                              !_vm.$v.employee.gender.required
                                                ? _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback mt-n1",
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                The Gender is required.\n                              "
                                                      ),
                                                    ]
                                                  )
                                                : _vm._e(),
                                            ]
                                          ),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(13),
                                          _vm._v(" "),
                                          _c("span", [
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    _vm.$v.employee.birthday
                                                      .$model,
                                                  expression:
                                                    "$v.employee.birthday.$model",
                                                },
                                              ],
                                              staticClass:
                                                "form-control form-control-sm",
                                              class: {
                                                "is-invalid":
                                                  _vm.validationStatus(
                                                    _vm.$v.employee.birthday
                                                  ),
                                              },
                                              attrs: {
                                                type: "date",
                                                name: "birthDay",
                                                placeholder: "Enter Birthday",
                                              },
                                              domProps: {
                                                value:
                                                  _vm.$v.employee.birthday
                                                    .$model,
                                              },
                                              on: {
                                                input: function ($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.$v.employee.birthday,
                                                    "$model",
                                                    $event.target.value
                                                  )
                                                },
                                              },
                                            }),
                                            _vm._v(" "),
                                            !_vm.$v.employee.birthday.required
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "invalid-feedback mt-n3",
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                The Birthday is required.\n                              "
                                                    ),
                                                  ]
                                                )
                                              : _vm._e(),
                                          ]),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(14),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value:
                                                  _vm.$v.employee.nationality
                                                    .$model,
                                                expression:
                                                  "$v.employee.nationality.$model",
                                                modifiers: { trim: true },
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.nationality
                                                ),
                                            },
                                            attrs: {
                                              type: "text",
                                              name: "nationality",
                                              placeholder: "Enter Nationality",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.nationality
                                                  .$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee.nationality,
                                                  "$model",
                                                  $event.target.value.trim()
                                                )
                                              },
                                              blur: function ($event) {
                                                return _vm.$forceUpdate()
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.nationality.required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                  staticStyle: {
                                                    width: "auto !important",
                                                  },
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Nationality is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(15),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value:
                                                  _vm.$v.employee.title.$model,
                                                expression:
                                                  "$v.employee.title.$model",
                                                modifiers: { trim: true },
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.title
                                                ),
                                            },
                                            attrs: {
                                              type: "text",
                                              name: "title",
                                              placeholder: "Enter Title",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.title.$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee.title,
                                                  "$model",
                                                  $event.target.value.trim()
                                                )
                                              },
                                              blur: function ($event) {
                                                return _vm.$forceUpdate()
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.title.required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Title is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(16),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  _vm.$v.employee.officephone
                                                    .$model,
                                                expression:
                                                  "$v.employee.officephone.$model",
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.officephone
                                                ),
                                            },
                                            attrs: {
                                              type: "phone",
                                              name: "officePhone",
                                              placeholder: "Enter Office Phone",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.officephone
                                                  .$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee.officephone,
                                                  "$model",
                                                  $event.target.value
                                                )
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.officephone.required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Office Phone is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(17),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value:
                                                  _vm.$v.employee.mobile.$model,
                                                expression:
                                                  "$v.employee.mobile.$model",
                                                modifiers: { trim: true },
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.mobile
                                                ),
                                            },
                                            attrs: {
                                              type: "phone",
                                              name: "mobileNumber",
                                              placeholder:
                                                "Enter Mobile Number",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.mobile.$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee.mobile,
                                                  "$model",
                                                  $event.target.value.trim()
                                                )
                                              },
                                              blur: function ($event) {
                                                return _vm.$forceUpdate()
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.mobile.required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Mobile is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(18),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value:
                                                  _vm.$v.employee.card.$model,
                                                expression:
                                                  "$v.employee.card.$model",
                                                modifiers: { trim: true },
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.card
                                                ),
                                            },
                                            attrs: {
                                              type: "number",
                                              name: "idCard",
                                              placeholder:
                                                "Enter Id Card Number",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.card.$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee.card,
                                                  "$model",
                                                  $event.target.value.trim()
                                                )
                                              },
                                              blur: function ($event) {
                                                return _vm.$forceUpdate()
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.card.required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Id Card is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "mb-3 col-md-6" },
                                        [
                                          _vm._m(19),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value:
                                                  _vm.$v.employee.badgenum
                                                    .$model,
                                                expression:
                                                  "$v.employee.badgenum.$model",
                                                modifiers: { trim: true },
                                              },
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            class: {
                                              "is-invalid":
                                                _vm.validationStatus(
                                                  _vm.$v.employee.badgenum
                                                ),
                                            },
                                            attrs: {
                                              type: "number",
                                              name: "badgeNumber",
                                              placeholder:
                                                "Enter Id Card Number",
                                            },
                                            domProps: {
                                              value:
                                                _vm.$v.employee.badgenum.$model,
                                            },
                                            on: {
                                              input: function ($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.$v.employee.badgenum,
                                                  "$model",
                                                  $event.target.value.trim()
                                                )
                                              },
                                              blur: function ($event) {
                                                return _vm.$forceUpdate()
                                              },
                                            },
                                          }),
                                          _vm._v(" "),
                                          !_vm.$v.employee.badgenum.required
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "invalid-feedback mt-n3",
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                              The Badge Number is required.\n                            "
                                                  ),
                                                ]
                                              )
                                            : _vm._e(),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "modal-footer" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary btn-sm",
                                        attrs: { type: "button" },
                                        on: { click: _vm.AddEmployeeDetails },
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-plus me-1",
                                        }),
                                        _vm._v("Add\n                        "),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "table-responsive" },
                      [
                        _c("b-table", {
                          attrs: {
                            id: "my-table",
                            fields: _vm.fields,
                            striped: "",
                            hover: "",
                            items: _vm.employeeData,
                            "per-page": _vm.perPage,
                            "current-page": _vm.currentPage,
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "cell(actions)",
                              fn: function (row) {
                                return [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-secondary btn-sm",
                                      staticStyle: { cursor: "pointer" },
                                      attrs: {
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#exampleModal1",
                                      },
                                      on: {
                                        click: function ($event) {
                                          return _vm.updateData(row.item.userid)
                                        },
                                      },
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fas fa-user-edit",
                                      }),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "modal fade",
                                      attrs: {
                                        id: "exampleModal1",
                                        tabindex: "-1",
                                        "aria-labelledby": "exampleModalLabel",
                                        "aria-hidden": "true",
                                      },
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "modal-dialog modal-lg",
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "modal-content" },
                                            [
                                              _c(
                                                "div",
                                                { staticClass: "modal-header" },
                                                [
                                                  _c(
                                                    "h5",
                                                    {
                                                      staticClass:
                                                        "modal-title",
                                                      attrs: {
                                                        id: "exampleModalLabel",
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                            Update Department Details\n                          "
                                                      ),
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-danger btn-sm",
                                                      attrs: {
                                                        type: "button",
                                                        "data-bs-dismiss":
                                                          "modal",
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-times",
                                                      }),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "modal-body" },
                                                [
                                                  _c(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Employee Name\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model.trim",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .name,
                                                                expression:
                                                                  "updateEmployee.name",
                                                                modifiers: {
                                                                  trim: true,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "text",
                                                              name: "employeeName",
                                                              placeholder:
                                                                "Enter Employee Name",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .name,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "name",
                                                                  $event.target.value.trim()
                                                                )
                                                              },
                                                              blur: function (
                                                                $event
                                                              ) {
                                                                return _vm.$forceUpdate()
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Department Name\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "select",
                                                            {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model.trim",
                                                                  value:
                                                                    _vm
                                                                      .updateEmployee
                                                                      .defaultdeptid,
                                                                  expression:
                                                                    "updateEmployee.defaultdeptid",
                                                                  modifiers: {
                                                                    trim: true,
                                                                  },
                                                                },
                                                              ],
                                                              staticClass:
                                                                "form-select form-select-sm",
                                                              staticStyle: {
                                                                "font-size":
                                                                  "12px",
                                                              },
                                                              on: {
                                                                change:
                                                                  function (
                                                                    $event
                                                                  ) {
                                                                    var $$selectedVal =
                                                                      Array.prototype.filter
                                                                        .call(
                                                                          $event
                                                                            .target
                                                                            .options,
                                                                          function (
                                                                            o
                                                                          ) {
                                                                            return o.selected
                                                                          }
                                                                        )
                                                                        .map(
                                                                          function (
                                                                            o
                                                                          ) {
                                                                            var val =
                                                                              "_value" in
                                                                              o
                                                                                ? o._value
                                                                                : o.value
                                                                            return val
                                                                          }
                                                                        )
                                                                    _vm.$set(
                                                                      _vm.updateEmployee,
                                                                      "defaultdeptid",
                                                                      $event
                                                                        .target
                                                                        .multiple
                                                                        ? $$selectedVal
                                                                        : $$selectedVal[0]
                                                                    )
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              _c(
                                                                "option",
                                                                {
                                                                  attrs: {
                                                                    hidden: "",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Select Country"
                                                                  ),
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              _vm._l(
                                                                _vm.departmentDropDown,
                                                                function (
                                                                  departmentDropdownItem
                                                                ) {
                                                                  return _c(
                                                                    "option",
                                                                    {
                                                                      key: departmentDropdownItem.id,
                                                                      domProps:
                                                                        {
                                                                          value:
                                                                            departmentDropdownItem.DeptID,
                                                                        },
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                  " +
                                                                          _vm._s(
                                                                            departmentDropdownItem.DeptName
                                                                          ) +
                                                                          "\n                                "
                                                                      ),
                                                                    ]
                                                                  )
                                                                }
                                                              ),
                                                            ],
                                                            2
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 mt-2 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Gender\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "span",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                              },
                                                            },
                                                            [
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .updateEmployee
                                                                        .Gender,
                                                                    expression:
                                                                      "updateEmployee.Gender",
                                                                  },
                                                                ],
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "20px",
                                                                },
                                                                attrs: {
                                                                  type: "radio",
                                                                  id: "Male",
                                                                  value: "m",
                                                                },
                                                                domProps: {
                                                                  checked:
                                                                    _vm._q(
                                                                      _vm
                                                                        .updateEmployee
                                                                        .Gender,
                                                                      "m"
                                                                    ),
                                                                },
                                                                on: {
                                                                  change:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.$set(
                                                                        _vm.updateEmployee,
                                                                        "Gender",
                                                                        "m"
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticStyle: {
                                                                    "font-size":
                                                                      "13px",
                                                                  },
                                                                  attrs: {
                                                                    for: "male",
                                                                  },
                                                                },
                                                                [_vm._v("Male")]
                                                              ),
                                                              _vm._v(" "),
                                                              _c("input", {
                                                                directives: [
                                                                  {
                                                                    name: "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .updateEmployee
                                                                        .Gender,
                                                                    expression:
                                                                      "updateEmployee.Gender",
                                                                  },
                                                                ],
                                                                staticStyle: {
                                                                  "margin-left":
                                                                    "20px",
                                                                },
                                                                attrs: {
                                                                  type: "radio",
                                                                  id: "Female",
                                                                  value: "f",
                                                                },
                                                                domProps: {
                                                                  checked:
                                                                    _vm._q(
                                                                      _vm
                                                                        .updateEmployee
                                                                        .Gender,
                                                                      "f"
                                                                    ),
                                                                },
                                                                on: {
                                                                  change:
                                                                    function (
                                                                      $event
                                                                    ) {
                                                                      return _vm.$set(
                                                                        _vm.updateEmployee,
                                                                        "Gender",
                                                                        "f"
                                                                      )
                                                                    },
                                                                },
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "label",
                                                                {
                                                                  staticStyle: {
                                                                    "font-size":
                                                                      "13px",
                                                                  },
                                                                  attrs: {
                                                                    for: "female",
                                                                  },
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Female"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                Birthday\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .Birthday,
                                                                expression:
                                                                  "updateEmployee.Birthday",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "date",
                                                              name: "birthDay",
                                                              placeholder:
                                                                "Enter Birthday",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .Birthday,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "Birthday",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                Nationality\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model.trim",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .minzu,
                                                                expression:
                                                                  "updateEmployee.minzu",
                                                                modifiers: {
                                                                  trim: true,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "text",
                                                              name: "nationality",
                                                              placeholder:
                                                                "Enter Nationality",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .minzu,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "minzu",
                                                                  $event.target.value.trim()
                                                                )
                                                              },
                                                              blur: function (
                                                                $event
                                                              ) {
                                                                return _vm.$forceUpdate()
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                Title\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model.trim",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .title,
                                                                expression:
                                                                  "updateEmployee.title",
                                                                modifiers: {
                                                                  trim: true,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "text",
                                                              name: "title",
                                                              placeholder:
                                                                "Enter Title",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .title,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "title",
                                                                  $event.target.value.trim()
                                                                )
                                                              },
                                                              blur: function (
                                                                $event
                                                              ) {
                                                                return _vm.$forceUpdate()
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                Office Phone\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .FPHONE,
                                                                expression:
                                                                  "updateEmployee.FPHONE",
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "phone",
                                                              name: "officePhone",
                                                              placeholder:
                                                                "Enter Office Phone",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .FPHONE,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "FPHONE",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Mobile\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model.trim",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .pager,
                                                                expression:
                                                                  "updateEmployee.pager",
                                                                modifiers: {
                                                                  trim: true,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "mobile",
                                                              name: "mobile",
                                                              placeholder:
                                                                "Enter Mobile Number",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .pager,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "pager",
                                                                  $event.target.value.trim()
                                                                )
                                                              },
                                                              blur: function (
                                                                $event
                                                              ) {
                                                                return _vm.$forceUpdate()
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Id Card\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model.trim",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .Card,
                                                                expression:
                                                                  "updateEmployee.Card",
                                                                modifiers: {
                                                                  trim: true,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "text",
                                                              name: "idCard",
                                                              placeholder:
                                                                "Enter ID Card",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .Card,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "Card",
                                                                  $event.target.value.trim()
                                                                )
                                                              },
                                                              blur: function (
                                                                $event
                                                              ) {
                                                                return _vm.$forceUpdate()
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "mb-3 col-md-6",
                                                        },
                                                        [
                                                          _c(
                                                            "label",
                                                            {
                                                              staticStyle: {
                                                                float: "left",
                                                                "font-size":
                                                                  "14px",
                                                              },
                                                            },
                                                            [
                                                              _vm._v(
                                                                "Badge Number\n                                "
                                                              ),
                                                              _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "text-danger",
                                                                },
                                                                [_vm._v("*")]
                                                              ),
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model.trim",
                                                                value:
                                                                  _vm
                                                                    .updateEmployee
                                                                    .badgenumber,
                                                                expression:
                                                                  "updateEmployee.badgenumber",
                                                                modifiers: {
                                                                  trim: true,
                                                                },
                                                              },
                                                            ],
                                                            staticClass:
                                                              "form-control form-control-sm",
                                                            attrs: {
                                                              type: "number",
                                                              name: "badgeNumber",
                                                              placeholder:
                                                                "Enter Id Card Number",
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm
                                                                  .updateEmployee
                                                                  .badgenumber,
                                                            },
                                                            on: {
                                                              input: function (
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.updateEmployee,
                                                                  "badgenumber",
                                                                  $event.target.value.trim()
                                                                )
                                                              },
                                                              blur: function (
                                                                $event
                                                              ) {
                                                                return _vm.$forceUpdate()
                                                              },
                                                            },
                                                          }),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                { staticClass: "modal-footer" },
                                                [
                                                  _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary btn-sm",
                                                      attrs: {
                                                        type: "button",
                                                        "data-bs-dismiss":
                                                          "modal",
                                                      },
                                                      on: {
                                                        click: function (
                                                          $event
                                                        ) {
                                                          return _vm.UpdateEmployeeData(
                                                            _vm.updateEmployee
                                                              .userid
                                                          )
                                                        },
                                                      },
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-user-edit",
                                                      }),
                                                      _vm._v(
                                                        "\n                            Update\n                          "
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      ),
                                    ]
                                  ),
                                ]
                              },
                            },
                          ]),
                        }),
                        _vm._v(" "),
                        _c("b-pagination", {
                          staticClass: "justify-content-center",
                          attrs: {
                            "total-rows": _vm.rows,
                            "per-page": _vm.perPage,
                            "aria-controls": "my-table",
                          },
                          model: {
                            value: _vm.currentPage,
                            callback: function ($$v) {
                              _vm.currentPage = $$v
                            },
                            expression: "currentPage",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row bg-light",
        staticStyle: {
          "box-shadow": "2px 2px 2px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px",
        },
      },
      [
        _c("div", { staticClass: "col-sm-10" }, [
          _c("h4", { staticClass: "mt-3" }, [_vm._v("Employee Graph")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c("p", { staticStyle: { float: "right" } }, [
            _c(
              "button",
              {
                staticClass: "badge badge-primary text-dark mt-3",
                attrs: {
                  "data-toggle": "collapse",
                  "data-target": "#collapseExample",
                  "aria-expanded": "false",
                  "aria-controls": "collapseExample",
                },
              },
              [_vm._v("\n              -\n            ")]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("i", { staticClass: "fas fa-user-tie" })])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "summary-single" }, [
      _c("span", [_c("i", { staticClass: "fas fa-ban" })]),
      _vm._v(" "),
      _c("div", [
        _c("h5", [_vm._v("16")]),
        _vm._v(" "),
        _c("small", [_vm._v("Number of leave")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "summary-single" }, [
      _c("span", [_c("i", { staticClass: "far fa-grin-alt" })]),
      _vm._v(" "),
      _c("div", [
        _c("h5", [_vm._v("12")]),
        _vm._v(" "),
        _c("small", [_vm._v("Profile update request")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "row bg-light mt-3",
        staticStyle: {
          "box-shadow": "2px 2px 2px rgba(0, 0, 0, 0.2)",
          "border-radius": "10px",
        },
      },
      [
        _c("div", { staticClass: "col-sm-10" }, [
          _c("h4", { staticClass: "mt-3" }, [_vm._v("Employee Table")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c("p", { staticStyle: { float: "right" } }, [
            _c(
              "button",
              {
                staticClass: "badge badge-primary text-dark mt-3",
                attrs: {
                  type: "button",
                  "data-toggle": "collapse",
                  "data-target": "#collapseExamples",
                  "aria-expanded": "false",
                  "aria-controls": "collapseExamples",
                },
              },
              [_vm._v("\n              -\n            ")]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-11" }, [
      _c("h3", [_vm._v("Employee Activity")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-primary btn-sm mt-3 ml-3",
        attrs: {
          type: "button",
          "data-bs-toggle": "modal",
          "data-bs-target": "#exampleModal",
        },
      },
      [_c("i", { staticClass: "fas fa-plus" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [
          _vm._v(
            "\n                          Add Employee Details\n                        "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-danger btn-sm",
          attrs: { type: "button", "data-bs-dismiss": "modal" },
        },
        [_c("i", { staticClass: "fas fa-times" })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Employee Name\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Department Name\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Gender\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Birthday\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Nationality\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Title "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Office Phone\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Mobile\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Id Card\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticStyle: { float: "left", "font-size": "14px" } },
      [
        _vm._v("Badge Number\n                              "),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SearchBar/SearchBar.vue?vue&type=template&id=374d0fcc& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "social-icons" }, [
      _c("span", { staticClass: "ti-bell" }),
      _vm._v(" "),
      _c("span", { staticClass: "ti-comment" }),
      _vm._v(" "),
      _c("span", { staticClass: "logout", on: { click: _vm.logout } }, [
        _c("i", { staticClass: "fas fa-sign-out-alt" }),
      ]),
      _vm._v(" "),
      _c("div"),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-wrapper" }, [
      _c("span", [_c("i", { staticClass: "fas fa-search" })]),
      _vm._v(" "),
      _c("input", { attrs: { type: "search", placeholder: "Search" } }),
    ])
  },
]
render._withStripped = true



/***/ })

}]);