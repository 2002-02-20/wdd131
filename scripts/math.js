
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let resultFilter = names.filter(name => name.startsWith('B'));
//console.log(resultFilter);

let resultMap = names.map((name) => name.length);
//console.log(resultMap);

const initialValue = 0;
let resultReduce = names.reduce((a,b) => a + b.length, initialValue) /names.length;
//console.log(resultReduce);

function calculate(a, b, callback) {
  callback(a + b);
}

function displayResult(result) {
  //console.log('The result is: ' + result);
}

//calculate(2, 3, displayResult)
const nums = [1,2,3,4,5];
nums.forEach(function(num) {
 //console.log(num);
});


const a = ['Jimmy Shah','Ram Sharma','Vikram Gupta','Shyam Sharma'];
const result = a.filter(name => name.includes('Sharma'))

function arrayFunction(a, callback) {
    const result = a.filter(name => name.includes('Sharma'));
    callback(result);
}

function displayResult(result) {
  console.log('The result is: ' + result);
}


arrayFunction(a, displayResult);