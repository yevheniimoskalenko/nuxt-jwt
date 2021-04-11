<template>
  <div>
    <h1>Profile</h1>
    {{ user.payload.obj.email }}
  </div>
</template>
<script>
export default {
  layout: 'empty',
  middleware: ['auth'],
  async fetch({ store }) {
    await store.dispatch('user');
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
<style lang="scss" scoped></style>
