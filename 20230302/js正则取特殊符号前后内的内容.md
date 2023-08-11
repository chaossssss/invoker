	//e=8天
	e = e.match(/(\S*)天/)
	console.log(e)//["8天", "8", index: 0, input: "8天", groups: undefined]
	
	//特定字符（天）前的数字
	e = e.match(/(\S*)天/)[1]
	console.log(e)//8
	
	e = e.match(/(\S*)天/)[1]
	console.log(e)//8天