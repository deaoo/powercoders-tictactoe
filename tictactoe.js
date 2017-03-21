function shout(str) {
  if (str&&str.toUpperCase) {
    return str.toUpperCase();
  }
  return null;
}

function sayHello(person) {
  return "Hello "+person+"!";
}

function shoutHello(person) {
  return "HELLO "+shout(person)+"!";
}

function removeDuplicates(arr) {
  var arr2 =[];
  var j=0;
  for (var i = 0; i < arr.length; i++)  {
    if (arr2.indexOf(arr[i]) == -1) {
      arr2[j]=arr[i];
      j+=1;
    }
  }
  return arr2;
}

function allTheSame(arr) {
var x=arr[0];
for (var i = 0; i < arr.length; i++) {
  if (arr[i]!==x ||x==='') {
    return false;
  }
}
return true;
}


function check(arr) {
  var winner = checkRows(arr);
  if (winner != 'no winner') {
    return winner;
  }

  winner = checkRows(transpose(arr));
  if (winner != 'no winner') {
    return winner;
  }

   winner = checkRows(getDiagonal(arr));
   return winner;
}

function getDiagonal(arr){
var sArr=[
    [],
    []
  ];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i-j == 0) {
        sArr[0].push(arr[i][j]);
      }
      if (i+j == 2) {
        sArr[1].push(arr[i][j]);
      }
    }
  }
  return sArr;
}
function transpose(array)
{
  var newArray = array[0].map(function(col, i) {
  return array.map(function(row) {
    return row[i] ;
  })
});
return newArray;
}


function checkRows(arr)
{

for (var i = 0; i < arr.length; i++) {
  var sarr=arr[i];

  if (allTheSame(sarr)) {
    return sarr[0];
  }
}
return "no winner";
// var varr1= [];
// var varr2=[];
// var varr3=[];
// varr1.push(sarr[0]);
// varr2.push(sarr[1]);
// varr3.push(sarr[2]);
// if (allTheSame(varr1)) {
//   return varr1[0];
// }
//
// if (allTheSame(varr2)) {
//   return varr2[0];
// }
//
// if (allTheSame(varr3)) {
//   return varr3[0];
// }
}

module.exports = {
  shout,
  sayHello,
  shoutHello,
  removeDuplicates,
  allTheSame,
  check
}
