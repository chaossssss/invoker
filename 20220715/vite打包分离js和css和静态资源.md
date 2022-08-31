rollupOptions: {
  output: {
    assetFileNames: assetInfo => {
      var info = assetInfo.name.split('.')
      var extType = info[info.length - 1]
      if (
        /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
      ) {
        extType = 'media'
      } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
        extType = 'img'
      } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
        extType = 'fonts'
      }
      return `static/${extType}/[name]-[hash][extname]`
    },
    chunkFileNames: 'static/js/[name]-[hash].js',
    entryFileNames: 'static/js/[name]-[hash].js'
  }
}