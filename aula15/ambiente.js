let num = [5 , 8, 2, 0]

num[3] = 6
num.push(7)
num.sort()
num.push(2)
console.log(num)

for(let i=0 ; i < num.length ; i++){
    console.log(`a posição ${i} tem o valor ${num[i]}`)
}
console.log('---------------')
num.sort()
for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
let po = num.indexOf(2)
console.log(po)