<template>
  <el-dialog title="收货地址" :visible.sync="$props.dialogVisible" :before-close="handleClose">
    <el-form :label-position="labelPosition" label-width="80px" :model="formData">
      <el-form-item label="名称">
        <el-input v-model="$props.formData.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="$props.formData.region"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'Vue2LearnModel',
  props: {
    dialogVisible: Boolean,
    type: String,
    formData: Object
  },
  data() {
    return {
      labelPosition: 'right',
    };
  },

  mounted() {

  },

  methods: {
    handleClose() {
      this.$emit('close')
    }
  },
};
</script>

<style lang="scss" scoped></style>