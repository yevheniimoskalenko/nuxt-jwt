<template>
  <div class="form-register">
    <el-card :style="{ width: '500px' }">
      <h2 class="text-center">Реєстрація в системі</h2>
      <el-form ref="form" :model="controlers" :rules="rules">
        <el-form-item label="Введіть ваш email" prop="email">
          <el-input v-model="controlers.email" />
        </el-form-item>
        <el-form-item label="Введіть пароль для реєстрації:" prop="password">
          <el-input v-model.trim="controlers.password" show-password />
        </el-form-item>
        <el-form-item label="Правила сайта" prop="rules">
          <el-checkbox v-model="controlers.rules">
            <nuxt-link to="/rules">Згодин з правилами</nuxt-link>
          </el-checkbox>
        </el-form-item>
        <div class="mt">
          <el-button type="primary" round :loading="loading" @click="register"
            >Зареєструватися</el-button
          >
        </div>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  layout: 'empty',
  head: {
    title: 'Реєстрація в сисемі'
  },
  data() {
    return {
      loading: false,
      controlers: {
        email: 'testjokerqwerty@gmail.com',
        password: '12345',
        rules: true
      },
      rules: {
        password: [
          {
            required: true,
            message: 'Пароль не повинен бути пустим',
            trigger: 'blur'
          }
        ],
        rules: [
          {
            required: true,
            message: 'Підтвердіть згоду з правилами',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: 'Email не повинен бути пустим',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Ведіть вірний email',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    register() {
      this.$refs.form.validate(valid => {
        if (valid) {
          const data = {
            email: this.controlers.email,
            password: this.controlers.password
          }
          this.$store.dispatch('auth/register', data)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.form-register {
  margin-top: 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
