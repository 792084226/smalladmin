<template>
  <div>
    <div class="title">
      <span>商品管理</span>
      <el-button type="primary" icon="el-icon-plus">添加商品</el-button>
    </div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item>
        <el-select v-model="form.cate" placeholder="活动区域">
          <el-option label="按商品id查询" value="id"></el-option>
          <el-option label="按商品名称查询" value="name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.keywords" placeholder="关键词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" stripe style="width: 100%" border>
      <el-table-column prop="date" label="id" width="100"> </el-table-column>
      <el-table-column prop="name" label="信息" width="380"> </el-table-column>
      <el-table-column prop="address" label="价格" width="180">
      </el-table-column>
      <el-table-column prop="address" label="状态" width="280">
      </el-table-column>
      <el-table-column prop="address" label="操作"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      form: {
        cate: "",
        keywords: "",
      },
      list:[]
    };
  },
  mounted() {
    // this.$http.ShopList(this.page).then((res) => {
    //   console.log(res);
    // });
  },
  methods: {
    onSubmit() {
      console.log(this.form.cate);
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 26px;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>