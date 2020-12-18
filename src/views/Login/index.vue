<template>
  <div class="login">
    <div class="login-form-container">
      <h1 class="login-title">欢迎登录</h1>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item> -->
        <el-form-item class="login-btn-container">
          <el-button type="primary" @click="submitLoginForm('ruleForm')"
            >登录</el-button
          >
          <!-- <el-button @click="resetLoginForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "Login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username:"",
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
    };
  },
  computed: {
    redirect() {
      return this.$route.query.redirect;
    },
  },
  methods: {
    ...mapActions('user', ['login', 'getUserInfo']),
    submitLoginForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login().then((val) => {
            console.log(val)
            this.$router.push("/home")
        // this.getUserInfo({ id: 1, token: 'ddsd09090dd' })
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetLoginForm(formName) {
      this.$refs[formName].resetFields();
    },
    // login() {
    //   this.$store.commit("setToken", "KJKJ989899");
    //   this.$store.commit("setUsername", "登录成功");
    //   this.$router.replace(this.redirect || "/home");
    // },
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  &-form-container{
    width: 360px;
    padding: 20px 30px;
    background-color: #fff;
  }
  &-title{
    text-align: center;
  }
  &-btn-container{
    display: flex;
    justify-content: center;
    .el-button{
      width: 120px;
    }
  }
}
</style>