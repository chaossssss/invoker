    <HsTable :loading="loading" :data="dataList" :span-method="spanMethod" :header-cell-style="headerStyle">

  </HsTable>

const headerStyle = ({ row, rowIndex }) => {
  row.forEach((i) => {
    if (i.label === '总排名') {
      i.rowSpan = 2
    }
    if (i.label === '分数' || i.label === '排名') {
      i.rowSpan = 1
    }
  })
}