    <el-table ref="cluesTable" v-loading="loading" :data="cluesList" @selection-change="handleSelectionChange"
      :key="recoverState">

    </el-table>

    修改recoverState时
    recoverMethod() {
      this.recoverState = !this.recoverState
      if (this.recoverState) {
        this.$refs.cluesTable.doLayout()
      }
    },