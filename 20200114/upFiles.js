import { cityRequest, shopRequest } from 'promiseApi'
const api = require('../config/api')


var chooseImageFun = (t, url, type, modifydata) => {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        let tempFilePaths = res.tempFilePaths
        console.log(res);
        let uploadTask = wx.uploadFile({
          url: url,
          filePath: tempFilePaths[0],
          formData: {
            type
          },
          name: 'pic',
          success(res) {
            console.log('图片上传返回:',res.data)
            var res_Json = JSON.parse(res.data);
            if(res_Json.code == "OK"){
              if(modifydata != '' || modifydata != undefined){
                let realvalue = res_Json.data
                t.setData({
                  [modifydata]: realvalue
                })
              }
            }else{
              wx.showToast({
                title: res_Json.context,
                icon: 'none',
                duration: 5000,
                success(){
    
                }
              })
            }
          }
        })
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress);
          // t.setData({
          //   progress: res.progress + '%'
          // })
        })
      }
    })
  }

  var chooseImages = function (t,type,picsArr) {
    let that = t
    // 选择图片
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
        that.setData({
          [picsArr]: that.data[picsArr].concat(tempFilePaths)
        });
        for(let i = 0; i < that.data[picsArr].length; i++){
          let uploadTask = wx.uploadFile({
            url: api.Upload,
            filePath: that.data[picsArr][i],
            formData: {
              type
            },
            name: 'pic',
            success(res) {
              console.log('图片上传返回:',res.data)
              var res_Json = JSON.parse(res.data);
              if(res_Json.code == "OK"){

              }else{
                wx.showToast({
                  title: res_Json.context,
                  icon: 'none',
                  duration: 5000,
                  success(){
      
                  }
                })
              }
            },
            fail(res){
              console.log('失败',res)
            }
          })
          uploadTask.onProgressUpdate((res) => {
            console.log('上传进度', res.progress);
            // t.setData({
            //   progress: res.progress + '%'
            // })
          })          
        }
      }
    })
  }
  // 图片预览
  var previewImage = function (e,t,picsArr) {
    let that = t
    //console.log(this.data.images);
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: that.data[picsArr]
    })
  }
  var deletePics = function (e,t,picsArr) {
    let that = t
    var index = e.currentTarget.dataset.index; var images = that.data[picsArr];
    images.splice(index, 1);
    that.setData({
      [picsArr]: images
    });
  }



const chooseImage = (t, count) =>{
    wx.chooseImage({
        count: count,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
            var imgArr = t.data.upImgArr || [];
            let arr = res.tempFiles;
            // console.log(res)
            arr.map(function(v,i){
                v['progress'] = 0;
                imgArr.push(v)
            })
            t.setData({
                upImgArr: imgArr
            })

            let upFilesArr = getPathArr(t);
            if (upFilesArr.length > count-1) {
                let imgArr = t.data.upImgArr;
                let newimgArr = imgArr.slice(0, count)
                t.setData({
                    upFilesBtn: false,
                    upImgArr: newimgArr
                })
            }
        },
    });
}
const chooseVideo = (t,count) => {
    wx.chooseVideo({
        sourceType: ['album'],
        maxDuration: 30,
        compressed:true,
        camera: 'back',
        success: function (res) {
          console.log(res);
          var filePathArr = res.tempFilePath.split(".");
          var format = filePathArr[filePathArr.length - 1];
          // console.log('format',format);
          var classname = wx.getStorageSync("classname");
          var courseID = wx.getStorageSync("courseID");
          var myDate = new Date();
          var year = myDate.getFullYear();
          var month = myDate.getMonth() + 1;
          var date = myDate.getDate();
          var h = myDate.getHours();
          var m = myDate.getMinutes();
          var s = myDate.getSeconds();
          var timestring = "_" + String(year) + String(month) + String(date) + String(h) + String(m) + String(s);
          var fileNameSplicing = 'SourceVideo/' + classname + timestring + '.' + format;
          wx.setStorageSync("duration", res.duration);
          wx.setStorageSync("file", fileNameSplicing);


          var fdata = { name: res.tempFilePath, key: fileNameSplicing };
          request({
            url: 'https://api.chinadd.com/mbaapi/AliOssAuthJson',
            data: { bucket: 'resunphoto', dir:'SourceVideo/' }
          })
            .then(
              (res) => {
                console.log(res);
                return Promise.resolve(res)
              },
              (err) => {
                return Promise.reject(err)
              }
            )
            .then(
              (data) => {
                fdata.policy = data.data.policy;
                fdata.OSSAccessKeyId = data.data.accessid;
                fdata.success_action_status = '200';
                fdata.signature = data.data.signature;
                console.log(fdata);
                let uploadTask = wx.uploadFile({
                  url: 'https://resunphoto.oss-cn-shanghai.aliyuncs.com',
                  filePath: fdata.name,
                  name: 'file',
                  formData: fdata,
                  success: function (res) {
                    console.log('上传状态',res);
                  }
                })
                uploadTask.onProgressUpdate((res) => {
                  // console.log(res.progress);
                  t.setData({
                    uploadProgress: res.progress
                  })
                })
                
              }
            )

            let videoArr = t.data.upVideoArr || [];
            let videoInfo = {};
            videoInfo['tempFilePath'] = res.tempFilePath;
            videoInfo['size'] = res.size;
            videoInfo['height'] = res.height;
            videoInfo['width'] = res.width;
            videoInfo['thumbTempFilePath'] = res.thumbTempFilePath;
            videoInfo['progress'] = 0;
            // console.log('videoInfo',videoInfo);
            videoArr.push(videoInfo)
            console.log(videoArr);
            t.setData({
                upVideoArr: videoArr
            })
            let upFilesArr = getPathArr(t);
            if (upFilesArr.length > count - 1) {
                t.setData({
                    upFilesBtn: false,
                })
            }
            // console.log(res)
        }
    })
}

// 获取 图片数组 和 视频数组 以及合并数组
var getPathArr = t => {
    let imgarr = t.data.upImgArr || [];
    let upVideoArr = t.data.upVideoArr || [];
    let imgPathArr = [];
    let videoPathArr = [];
    imgarr.map(function (v, i) {
        imgPathArr.push(v.path)
    })
    upVideoArr.map(function (v, i) {
        videoPathArr.push(v.tempFilePath)
    })
    let filesPathsArr = imgPathArr.concat(videoPathArr);
    return filesPathsArr;
}


module.exports = { chooseImage, chooseVideo, getPathArr, chooseImageFun, chooseImages, previewImage, deletePics}