  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        value:store.getState()
      })
    })
  }