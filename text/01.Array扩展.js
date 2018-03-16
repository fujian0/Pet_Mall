var obj = {
  name:'tom',
  age:18
}
//将js对象转换为json对象
var jsonObj = JSON.stringify(obj);
console.log(jsonObj,typeof jsonObj);

var arr = [1,2 ,3,4,];

//将js数组转换为json数组
var jsonArr = JSON.stringify(arr);
console.log(jsonArr,typeof jsonArr);//{"name":"tom","age":18} string

//将json数组转换为js数组
arr =JSON.parse(jsonArr); //[1,2,3,4] string
console.log(arr, typeof arr); //[ 1, 2, 3, 4 ]'object'
console.log(arr instanceof Array); // true
