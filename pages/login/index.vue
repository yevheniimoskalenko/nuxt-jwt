<template>
  <div class="form-login">
    <el-card :style="{ width: '500px' }">
      <h2 class="text-center">Авторизація на сайті</h2>
      <el-form ref="form" :model="controlers" :rules="rules">
        <el-form-item label="Ваш email" prop="email">
          <el-input v-model.trim="controlers.email" />
        </el-form-item>
        <div class="mb">
          <el-form-item label="Ваш пароль" prop="password">
            <el-input
              v-model.trim="controlers.password"
              type="password"
              show-password
            />
          </el-form-item>
        </div>
        <el-button type="primary" round :loading="loading" @click="Onsubmit"
          >Війти</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Авторизація на сайті'
  },
  layout: 'empty',

  data() {
    return {
      loading: false,
      controlers: {
        email: 'testjokerqwerty@gmail.com',
        password: '12345'
      },
      rules: {
        email: [
          {
            required: true,
            message: 'email не повинен бути пустим',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'Пароль не повинен бути пустим',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    Onsubmit(e) {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          try {
            const data = {
              email: this.controlers.email,
              password: this.controlers.password
            };
            this.$store.dispatch('auth/login', data);
          } catch (e) {
          } finally {
            this.loading = false;
          }
        }
      });
      e.preventDefault();
    }
  }
};
</script>
<style lang="scss" scoped>
.form-login {
  margin-top: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
