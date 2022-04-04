let num = [4,9,7] ;
num.push(1);
num.sort();
console.log(`O vetor tem ${num.length} posições`);
console.log(`o vetor é ${num}`);

for(let pos=0; pos<num.length; pos++){
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}