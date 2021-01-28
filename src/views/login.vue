<template>
  <div>
    <div class="wrapper">
      <p class="title">请登录</p>
      <div style="padding: 10px">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="user" label-width="0">
            <el-input
              v-model="ruleForm.user"
              placeholder="User Name"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass" label-width="0">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              placeholder="Password"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button type="primary" @click="submitForm" class="btn"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        user: "",
        pass: "",
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur",
          },
        ],
        pass: [{ required: true, message: "请输入密码", trigger: "change" }],
      },
    };
  },
  mounted() {},
  methods: {
    submitForm() {
      this.$http
        .Login({ username: this.ruleForm.user, password: this.ruleForm.pass })
        .then((res) => {
          console.log(res);
          if (res.status == 0) {
            this.$store.commit("user", res.data);
            this.$router.push("/");
            this.$message({
              message: res.msg,
              type: "success",
            });
            console.log(document.cookie);
          } else {
            this.$message.error(res.msg);
          }
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 500px;
  height: 220px;
  margin: 150px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.title {
  line-height: 40px;
  background-color: #f5f5f5;
  padding-left: 10px;
}
.btn {
  background-color: #286090;
  width: 100%;
}
</style>