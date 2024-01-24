element plus table 暂无数据    
    
    
    <el-scrollbar max-height="600" height="600">
      <el-table :data="tableData" header-cell-class-name="header-cell-class" stripe style="width: 100%">
        <el-table-column align="center" prop="date" label="序号" width="120">
          <template #default="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column align="center" show-overflow-tooltip prop="mc" label="项目名称" width="400" />
        <el-table-column align="center" prop="time" label="开始时间" />
        <el-table-column align="center" prop="position" label="项目所在地" />
        <template #empty>
          <div class="noData">
            <img class="no-data" src="@/assets/images/cockpit/no-data.png" />
            <div>暂无数据</div>
          </div>
        </template>
      </el-table>
    </el-scrollbar>