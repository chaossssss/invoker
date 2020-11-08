  watch: {
    comIndex: {
      immediate: true,
      handler(val){
        this.realComIndex = val
        console.log(val)
      }
    }
  },