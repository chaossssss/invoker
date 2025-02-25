element-ui for循环生成表单时，表单校验问题

      <hs-form-item
        v-for="(item, index) in form.compartmentList"
        :key="index"
        label="房屋信息："
        :prop="'compartmentList.' + index + '.houseName'"
        required
      >
        <hs-input v-model="item.houseName" placeholder="请输入" maxlength="32" clearable />
        <el-icon style="padding-left: 20px; color: #f00"><RemoveFilled /></el-icon>
      </hs-form-item>