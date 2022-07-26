    querySearchAsync(queryString, cb, type) {
      console.log(queryString)
      if (type === 'renyuan' && queryString) {
        getUserByName({
          name: queryString
        }).then(response => {
          let result = response.data.map(item => {
            item.value = item.name
            item.renyuanName = item.name
            item.renyuanId = item.id
            return item
          })
          cb(result)
        })
      } else {
        cb([])
      }
    },


:trigger-on-focus="false"