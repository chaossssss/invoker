main.js

app.config.globalProperties.$uesr = {
    name: 'zhangsan'
}

setup中使用

1.
const cns = getCurrentInstance();
console.log(cns.app.Context.config.globalProperties.$user)

2.
const { proxy } = getCurrentInstance();
console.log(proxy.$user)