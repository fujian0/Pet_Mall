var obj1 = {
  n:12
}
//
var obj2 = Object.create(obj1);
console.log(obj2.n); //12

obj2 = Object.create(obj1,{
  m:{
    value:'abc',
    writable:true //是否可写 //
  }
})
console.log(obj2.m); //'abc'
obj2.m = 'xxx';
console.log(obj2.m); //'xxx'



var person ={
  firsName:'sun',
  lastName:'wukong'
}

Object.defineProperties(person,{//配置对象
  FullName:{

    get:() => { //箭头函数没有自己的this
      console.log('get()') //get是回调函数，读取当前属值 自动调用
      return person.firsName + '-' + this.lastName
      //console.log(person.FullName);//sun-undefined
    },
    set:function(value){
      console.log('get()') //修改当前属性值的时候自动调用
    }
}
})
console.log(person.FullName);//sun-undefined
person.firsName = 'fu';
person.lastName = 'jian';
console.log(person.FullName);//fu-undefined
