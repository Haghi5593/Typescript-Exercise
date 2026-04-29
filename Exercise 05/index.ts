export{};


function echo<T>(input : T) : T {
    return input;
}

const str = echo(`Hello Developers`);
const num = echo(8483);
const arr = echo ([23, 42, 84]);
const obj = echo({name: "Mohamed",
    email: "mohamed@email.com",
    passwoed: 28872
})

str.toUpperCase();   
num.toFixed(2);      
arr.push(4);         
obj.name;              



interface ApiResult<T> {
    status: string,
    data: T
}

const result1 : ApiResult<string> = {
    status : "Success",
    data : "Hello Devs"
}

const result2 : ApiResult<{id : number, name : string}> = {
    status : "Success",
    data : {
        id : 1,
        name : "Mohamed"
    }
}

result1.data.toUpperCase();
result2.data.name; 


function first<T>(items: T[]): T {
    return items[0];
  }
  
  const firstNum = first([10, 20, 30]);
  const firstStr = first(["a", "b", "c"]);
  const firstObj = first([{ id: 1 }, { id: 2 }]);
  
  firstNum.toFixed(2); 
  firstStr.toUpperCase();
  firstObj.id;         