(Element ui plus Form 表单验证失败后，自动滚动到失败的位置)[https://blog.csdn.net/shmilyyxj/article/details/126622332]


const submitForm=()=> {      
        proxy.$refs["postRef"].validate((valid,ValidateFieldsError) => {
            console.log(ValidateFieldsError);
            if (valid) {
                state.submitLoading=true
                state.form.creater=parseInt(store.getters.userInfo[0].userId)
                if(state.form.inDate){
                    state.form.beginTime=state.form.inDate[0]
                    state.form.endTime=state.form.inDate[1]
                }
                addPost(state.form).then(response => {
                    ElMessage.success("新增成功");
                    state.open = false;
                    state.submitLoading=false
                    getList();
                });    
            }else{
                Object.keys(ValidateFieldsError).forEach((key,i) => {
                    const propName=ValidateFieldsError[key][0].field
                    if(i==0){
                        proxy.$refs["postRef"].scrollToField(propName)
                    }
                })
            }
        });
    }