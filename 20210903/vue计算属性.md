computed: {
  fullName: {
    get: function(){
      return this.firstName + ' ' + this.lastName
    },
    set: function(newValue){
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}



computed: {
  example: {
    cache: false,
    get: function(){
      return Date.now() + this.msg
    }
  }
}