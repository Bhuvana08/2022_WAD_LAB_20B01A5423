/*Caller function*/
const addNum = (a,b, addNums) => {
  setTimeout(()=> {
      addNums(a+b)
  },2000)

}
/*calling function*/
addNum(4,5,(c)=>{
  console.log(c)
})