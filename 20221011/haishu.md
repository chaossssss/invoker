海数


列表自定义传值
getTableData(true, formatParams(conditionsModel.name, conditionsModel.type, nodeCode.value))



不自动加载
const { page, getParams, tableData, loading, conditionsModel, getTableData } = useQuery(crud, () => {}, {
  autoLoad: false
})

配置autoload


Crud 需要自定义配置
const query = {
    query: data => {
        return service.post(`${baseUrl}/queryCompanyList`,data)
    },
    delete: id => {
        return service.delete(`${baseUrl}/${id}`)
    }
}


useLayerForm


const { form, submit } = useLayerForm({
  add: () => {
    form.value.codes = props.selectionCurrent.map(item => item.code)
    return batchCancel(form.value)
  }
}, props, form => {
  return form
})



const { form, submit } = useLayerForm(
  {
    detail: async params => {
      const { data } = await crud.detail(params)
      const departmentId =
        data.departmentInfos[0]?.deptType == 'ORGANIZATION_DEPT' ? data.departmentInfos.map(d => d.code) : data.departmentInfos[0]?.code
      return {
        data: {
          ...data,
          departmentId,
          departmentInfos: data.departmentInfos[0] ? data.departmentInfos : [{}]
        }
      }
    },
    update: params => {
      return crud.update(params)
    },
    add: params => {
      params.relationType = '1'
      return crud.add(params)
    }
  },
  props,
  form => {
    if (!form.roleInfos) {
      form.roleInfos = []
    }
    if (!form.departmentInfos) {
      form.departmentInfos = [{}]
    }
    return form
  }
)