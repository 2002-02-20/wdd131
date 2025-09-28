
let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
let resultFilter = names.filter(name => name.startsWith('B'));
console.log(resultFilter);

let resultMap = names.map((name) => name.length);
console.log(resultMap);

const initialValue = 0;
let resultReduce = names.reduce((a,b) => a + b.length, initialValue) /names.length;
console.log(resultReduce);