el-form 获取报错信息

try {
      const valid = await formRef.value.validate()
      if (valid) {
        const res = await updateMonthEnfPlan(dataListEnf.value)
        if (res.code === 200) {
          ElMessage({ message: res.msg, type: 'success' })
          await getList()
          await getMonthEnfPlanMethod()
        } else {
          ElMessage({ message: res.msg, type: 'error' })
        }
      }
    } catch (err) {
      for (const [k, v] of Object.entries(err)) {
        dataListEnf.value[`${k.split('.')[0]}`][`${k.split('.')[1]}Err`] = true
      }
      return err
    }