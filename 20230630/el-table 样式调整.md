el-table 样式调整
:deep(.el-table) {
  --el-table-header-bg-color: rgba(17, 113, 187, 0.2);
  --el-table-tr-bg-color: transparent;
  --el-table-bg-color: transparent;
  --el-table-header-text-color: #0cffff;
  --el-table-border-color: transparent;
  --el-table-text-color: #fff;
  --el-table-row-hover-bg-color: transparent;
  tr.el-table__row--striped {
    background: linear-gradient(270deg, rgba(120, 192, 228, 0) 0%, rgba(67, 140, 196, 0.16) 100%);
  }
}
:deep(.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell) {
  background: transparent;
}