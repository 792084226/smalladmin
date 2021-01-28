<template>
  <div>
    <p class="title">商品详情</p>
    <div class="wrap">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="商品名称" style="width: 400px">
          <el-input v-model="form.name" readonly></el-input>
        </el-form-item>
        <el-form-item label="商品描述" style="width: 400px">
          <el-input v-model="form.desc" readonly></el-input>
        </el-form-item>
        <el-form-item label="当前状态" style="width: 200px">
          <el-input v-model="form.status" readonly></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-select v-model="form.cate">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.cate2" style="margin-left: 20px">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品价格" style="width: 400px">
          <el-input v-model="price" readonly>
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
        <el-form-item label="商品库存" style="width: 400px">
          <el-input v-model="stock" readonly>
            <template slot="append">件</template>
          </el-input>
        </el-form-item>
        <el-form-item label="商品图片" style="width: 400px">
          <img src="favicon.ico" alt="" style="width: 100px; height: 100px" />
        </el-form-item>
        <el-form-item label="商品详情" style="width: 400px">
          <img src="favicon.ico" alt="" style="width: 150px; height: 150px" />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        desc: "",
        status: "",
        cate: "",
        cate2: "",
        price: "",
        stock: "",
      },
    };
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
.wrap {
  width: 80%;
  margin: 0 auto;
  .el-form-item {
    font-weight: 700 !important;
  }
}
</style>