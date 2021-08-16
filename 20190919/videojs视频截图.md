```
    function savePic(fileName) {
      var fileType = "png";  // 如果文件名中没有带后缀，默认使用png
      switch (fileName) {  // 判断保存的图片格式
        case fileName.indexOf("png") > -1:
          fileType = "png";
          break;
        case fileName.indexOf("jpg") > -1:
          fileType = "jpg";
          break;
      
        case fileName.indexOf("jpeg") > -1:
          fileType = "jpeg";
          break;
        case fileName.indexOf("bmp") > -1:
          fileType = "bmp";
          break;
        case fileName.indexOf("gif") > -1:
          fileType = "gif";
          break;
        default:
          fileType = "png";
          break;
        }
        var video = document.querySelector('#example-video_html5_api');  // 找到需要截图的video标签,我这个是后来生成的video标签
        console.log(video)
        var canvas = window.canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight; 
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);  // 图片大小和视频分辨率一致
        var strDataURL = canvas.toDataURL("image/" + fileType);   // canvas中video中取一帧图片并转成dataURL
        var arr = strDataURL.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        var blob = new Blob([u8arr], {
          type: mime
        });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');  
        a.style.display = 'none';
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }, 1000);
      
      }
```