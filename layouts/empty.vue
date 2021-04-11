<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(value) {
      console.log(value);
      this.$message({
        type: value.status,
        message: value.message,
      });
    },
  },
};
</script>
