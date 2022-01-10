let n = 34;
const string = 'Life is not a problem to be solved, but a reality to be experienced'.toUpperCase();

function print(str, n){
    let arr = str;
    arr = arr.substring(0,n)
    return console.log(arr);
}

print(string, n);