// this code is test of eval()'s alternative.

function str2code(code) {
    Function(code)();
}

let code = "console.log('hello')";
str2code(code);

let str = "hello world";
let code2 = "console.log('" + str + "')"; 
str2code(code2);