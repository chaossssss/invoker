海数

列表自定义传值
getTableData(true, formatParams(conditionsModel.name, conditionsModel.type, nodeCode.value))

不自动加载
const { page, getParams, tableData, loading, conditionsModel, getTableData } = useQuery(crud, () => {}, {
autoLoad: false
})

配置 autoload

Crud 需要自定义配置

const { page, tableData, loading, conditionsModel, conditions, getTableData } = useQuery({
...crud,
query: params => {
console.log(params)
let newParams = JSON.parse(JSON.stringify(params))
newParams.conditions = []
let villageCode = {
isValid: true,
key: "villageCode",
operation: "=",
prefixion: "",
value: props.villageCode
}
let townCode = {
isValid: true,
key: "townCode",
operation: "=",
prefixion: "",
value: props.townCode
}
if(conditionsModel.createTime) {
let startTime = {
isValid: true,
key: "createStartTime",
operation: ">=",
prefixion: "",
value: conditionsModel.createTime[0]
}
let endTime = {
isValid: true,
key: 'createEndTime',
operation: "<=",
prefixion: "",
value:conditionsModel.createTime[1]
}
newParams.conditions.push(startTime, endTime);
}else if(props.townCode) {
newParams.conditions.push(townCode)
} else if (props.villageCode) {
newParams.conditions.push(villageCode)
}
return crud.query(newParams)
}
})

const query = {
query: data => {
return service.post(`${baseUrl}/queryCompanyList`,data)
},
delete: id => {
return service.delete(`${baseUrl}/${id}`)
}
}

const { form, submit } = useLayerForm(
{
detail: () => {
return service.get(`answerReport/${props.layer.row.id}`).then(res => {
res.data.dealDayLabel = res.data.dealDay / 7 + '周'
return res
})
},
update: () => {
if (props.type === 'rectify') {
return service.post(`answerReport/dealQuestion`, form.value)
} else if (props.type === 'approval') {
return service.post(`answerReport/auditQuestion`, form.value)
}
}
},
props
)

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
