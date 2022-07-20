路由 hash

vue3  base outDir
export default defineConfig({
  base: '/jxgm/',
  build: {
    outDir: 'jxgm',
    chunkSizeWarningLimit: 50000,
    rollupOptions: {
      output:{
          manualChunks(id) {
            if (id.includes('node_modules')) {
              
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
        }
      }
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    port: 5420,
    host: "0.0.0.0",
    open: true,
    proxy: {
      '/api': {
        target: 'http://192.168.169.165:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    },
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ]
})



vue2
publicPath
outputDir

var CONFIG = {
	publicPath: '/wxbpc/',
	outputDir: 'wxbpc',
	assetsDir: 'static',
	devServer: {
		host: 'localhost',
		port: 7098,
		proxy: {
			'/jxwxb': {
				target: 'http://5kz7me.natappfree.cc',
				// target: 'http://sakula.mynatapp.cc',
				ws: true,//是否代理websockets
				changeOrigin: true,
				pathRewrite: {
					'^/jxwxb': '/jxwxb',
				}
			},
		}
	},
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@components', resolve('src/components'))
			.set('@static', resolve('src/static'))
	},
	configureWebpack: {
		externals: {
			'AMap': 'AMap' // 高德地图配置
		},
		plugins: [
			new webpack.DllReferencePlugin({
				context: process.cwd(),
				manifest: require('./public/vendor/vendor-manifest.json')
			}),
			// 将 dll 注入到 生成的 html 模板中
			new AddAssetHtmlPlugin({
				// dll文件位置
				filepath: path.resolve(__dirname, './public/vendor/*.js'),
				// dll 引用路径
				publicPath: './vendor',
				// dll最终输出的目录
				outputPath: './vendor'
			})
		]
	},
}