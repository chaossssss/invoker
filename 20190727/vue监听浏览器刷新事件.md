```
window.addEventListener('beforeunload', e => {

    localStorage.setItem("store",JSON.stringify(this.$store.state))

});
```