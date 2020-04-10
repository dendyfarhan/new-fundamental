var readline = require('readline-sync');

//piramid
var n = readline.question('masukkan angka : ');
{
for (var i = 1; i <=n;i++){
    var str = '';
    for (var j = i; j <=n;j++) {
        str = str + '_';
    }
    for (var k = 1;k <= i;k++){
        str = str + '*';
    }
    for (var l = 1;l <=i-1;l++){
        var str = str + '*';
    }
    console.log(str);
    }
}
console.log('\n');

//segitiga siku
for(var i =  1 ;i <=n; i++){
    var a = '';
    for(var j = 1;j <=i;j++){
        var a = a + '*';
    }
    console.log(a);
}
console.log('\n');

//segitiga siku terbalik
for(var i= n; i > 0;i--){
    var a = '';
    for(var j = 1; j <=i;j++){
        var a = a + '*';
    }
    console.log(a);
}
console.log('\n');

//segitiga siku beda sisi terbalik
for(var i = 1; i<=n;i++){
    var a = '';
    for (var b = 1; b <=i;b++){
        var a= a+'_';
    }
    for (var o = i; o <=n;o++){
        var a = a+ '*';
    }
    console.log(a);
}
console.log('\n');

//segitiga siku beda sisi 
for (var i = 1;i <=5;i++){
    var a = '';
    for (var b=i;b<=5;b++){
        var a= a+ '_';
    }
    for (var c=1;c<=i;c++){
        var a= a+ '*';
    }
    console.log(a);
}
console.log('\n');

//segitiga piramid terbalik
for (var i = 1; i <=n;i++){
    var a = '';
    for(var b = 1;b <=i;b++){
        var a = a + '_';
    }
    for (var j = i; j <=n;j++){
        var a = a+ '*';
    }
    for (var k = i+1; k <=n;k++){
        var a = a+'*';
    }
    console.log(a);
}
