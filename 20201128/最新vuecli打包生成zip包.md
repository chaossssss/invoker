
```
const FileManagerPlugin = require('filemanager-webpack-plugin');


			new FileManagerPlugin({
				events: {
					onEnd: {
						delete: ['./wxbpc.zip'],
						archive: [
							{ source: './wxbpc', destination: './wxbpc.zip' },
						],
					},
				},
			}),
```