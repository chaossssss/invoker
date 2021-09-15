function* main(){
  console.log(1)
  yiled;
  console.log(2)
  yiled;
  console.log(3)
}
let it = main()
it.next() //1
it.next() //2
it.next() //3