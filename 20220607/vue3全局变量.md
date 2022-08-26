app.config.globalProperties.$systemId = "10"


import { getCurrentInstance } from "vue";
const systemId = getCurrentInstance()?.appContext.config.globalProperties.$systemId
console.log(systemId);//控制台可以看到输出了10