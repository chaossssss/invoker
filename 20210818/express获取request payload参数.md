app.post('/getUserInfo', async (req, res) => {
  try {
    var str="",requestCode = '';
    req.on("data",function(chunk){
      str+=chunk
    })
    req.on("end",async function(){
      console.log(str)
    })
  }
})

获取参数巨麻烦。。。