<template>
  <div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
