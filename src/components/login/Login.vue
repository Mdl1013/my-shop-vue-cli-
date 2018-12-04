<template>
  <el-row type="flex" justify="center" align="middle" class="login">
    <el-col  class="login-form" :xs="16" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="top"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (!valid) {
          return false;
        }
        axios
          .post("http://localhost:8888/api/private/v1/login", this.loginForm)
          .then(res => {
            console.log(res);
            console.log(this.$router);

            if (res.data.meta.status === 200) {
              localStorage.setItem("token", res.data.data.token);
              this.$router.push("/home");
              this.$message({
                message: res.data.meta.msg,
                type: "success",
                duration: 800
              });
            } else {
              this.$message({
                message: res.data.meta.msg,
                type: "error",
                duration: 800
              });
            }
          });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.login {
  height: 100%;
   background-color: #2D434C;
}
.login-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
