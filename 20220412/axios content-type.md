表单
      axios({
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        url,
        data: JSON.stringify(data)
      }).then(res => {

      })



浏览器的原生 form 表单  application/x-www-form-urlencoded 


multipart/form-data 


application/json 


text/xml 