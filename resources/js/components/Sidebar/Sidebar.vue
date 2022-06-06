<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <router-link to="/" id="sidenavHeader"
        ><h3 class="brand">
          <span><i class="fas fa-feather"></i></span>
          <span>AttendMS</span>
        </h3>
      </router-link>

      <span for="sidebar-toggle" style="cursor: pointer">
        <i class="fas fa-bars"></i>
      </span>
    </div>
    <div class="sidebar-menu">
      <ul>
        <li>
          <a class="sub-btn">
            <span>
              <a class="side-btn">
                <span class="fronticon"><i class="fas fa-home"></i></span
                >Dashboard
                <i class="fas fa-angle-down dropdown"></i>
              </a>
            </span>
          </a>
          <div class="sub-menu">
            <ul>
              <li>
                <router-link
                  to="/department"
                  active-class="active"
                  exact
                  class="sub-item"
                  >Department</router-link
                >
              </li>
              <li>
                <router-link
                  to="/employee"
                  active-class="active"
                  exact
                  class="sub-item"
                  >Employee</router-link
                >
              </li>
              <li>
                <router-link
                  to="/transaction"
                  active-class="active"
                  exact
                  class="sub-item"
                  >Transaction</router-link
                >
              </li>
              <li>
                <router-link
                  to="/advanceSearch"
                  active-class="active"
                  exact
                  class="sub-item"
                  >Advance Search</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <!-- <li>
          <a href="">
            
            <span>
              <router-link to="/department"  active-class="active"
                exact
                tag="button"
                class="side-btn"><span class="fronticon"><i class="fas fa-briefcase"></i></span>Department </router-link>
            </span>
          </a>
        </li>
        <li>
          <a href="">
            
            <span><router-link to="/employee"  active-class="active"
                exact
                tag="button"
                class="side-btn"> <span class="fronticon"><i class="fas fa-users"></i></span>Employee </router-link></span>
          </a>
        </li>
        <li>
          <a href="">
            
            <span><router-link to="/transaction"  active-class="active"
              exact
              tag="button"
              class="side-btn"><span class="fronticon"><i class="far fa-money-bill-alt"></i></span>Transaction </router-link></span></span>
          </a>
        </li> -->
        <!-- <li>
          <a href="">
            <span class="ti-folder"></span>
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="ti-time"></span>
            <span>Timesheet</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="ti-book"></span>
            <span>Contacts</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="ti-settings"></span>
            <span>Account</span>
          </a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery/dist/jquery";
export default {
  name: "SideBar",
  components: {},
  data() {
    return {};
  },
  methods: {},
  async mounted() {
    $(document).ready(function () {
      $(".sub-btn").click(function () {
        $(this).next(".sub-menu").slideToggle();
        $(this).find(".dropdown").toggleClass("rotate");
      });

      //jquery for expand and collapse the sidebar
      $(".menu-btn").click(function () {
        $(".side-bar").addClass("active");
        $(".menu-btn").css("visibility", "hidden");
      });

      $(".close-btn").click(function () {
        $(".side-bar").removeClass("active");
        $(".menu-btn").css("visibility", "visible");
      });
    });
  },
};
</script>

<style>
.sidebar-menu .sub-menu {
  display: flex;
  flex-direction: column;
  padding-left: 45px;
  margin-top: 15px;
  line-height: 15px;
}

.sidebar-menu .sub-menu ul li {
  list-style-type: square;
}

#sidebar-toggle {
  display: none;
}

#sidenavHeader {
  color: white;
}
.sidebar {
  height: 100%;
  width: 240px;
  font-size: 14px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: rgb(27, 2, 2);
  color: #fff;
  overflow-y: auto;
  transition: width 500ms;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0rem 1rem;
}

.sidebar-menu {
  padding: 1rem 0.5rem;
}

.sidebar ul {
  padding: 0;
}

.sidebar li {
  margin-bottom: 1.2rem;
}

.sidebar a {
  text-decoration: none;
  color: #fff;
  /* font-size: 0.9rem; */
}

.sidebar a:hover {
  color: orange;
}

/* .sidebar a:hover {
  background-color: orange;
} */

/* New Code For Active  */
.side-btn:focus {
  outline: none;
}

.side-btn.active {
  position: relative;
  color: rgb(229, 123, 2);
  border-radius: 30px 0 0 30px;
}

.side-btn {
  border: none;
  padding: 3px 0px;
  cursor: pointer;
  font-size: 15px;
  color: white;
  background-color: transparent;
}

.side-btn .fronticon {
  margin-right: 10px;
}

/* New Code For Active  */

.sidebar a span:last-child {
  padding-left: 0.6rem;
}

#sidebar-toggle:checked ~ .sidebar {
  width: 60px;
}

#sidebar-toggle:checked ~ .sidebar .sidebar-header h3 span,
#sidebar-toggle:checked ~ .sidebar li span:last-child {
  display: none;
}

#sidebar-toggle:checked ~ .sidebar .sidebar-header,
#sidebar-toggle:checked ~ .sidebar li {
  display: flex;
  justify-content: center;
}

#sidebar-toggle:checked ~ .main-content {
  margin-left: 60px;
}

#sidebar-toggle:checked ~ .main-content header {
  width: calc(100% - 60px);
  left: 60px;
}

@media only screen and (max-width: 1200px) {
  .sidebar {
    width: 60px;
    z-index: 150;
  }

  .sidebar .sidebar-header h3 span,
  .sidebar li span:last-child {
    display: none;
  }

  .sidebar .sidebar-header,
  .sidebar li {
    display: flex;
    justify-content: center;
  }
  #sidebar-toggle:checked ~ .sidebar {
    width: 240px;
  }

  #sidebar-toggle:checked ~ .sidebar .sidebar-header h3 span,
  #sidebar-toggle:checked ~ .sidebar li span:last-child {
    display: inline;
  }

  #sidebar-toggle:checked ~ .sidebar .sidebar-header {
    display: flex;
    justify-content: space-between;
  }

  #sidebar-toggle:checked ~ .sidebar li {
    display: block;
  }

  #sidebar-toggle:checked ~ .main-content {
    margin-left: 60px;
  }

  #sidebar-toggle:checked ~ .main-content header {
    left: 60px;
    width: calc(100%-60px);
  }
}

.menu {
  position: fixed;
  height: 100vh;
  width: 240px;
  left: 0;
  top: 0;
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
}

.sidebar-menu .sub-btn .side-btn .dropdown {
  position: absolute;
  right: 0;
  margin: 5px 20px;
  transition: 0.3s ease;
}

.rotate {
  transform: rotate(-90deg);
}
</style>