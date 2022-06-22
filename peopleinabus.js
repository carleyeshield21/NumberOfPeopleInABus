// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

function busStops(number){
  // Good Luck!
  let sum = 0
  for(i=0; i<=number.length-1; i++){
    // console.log(number[i][0], number[i][1])
    sum = (sum + number[i][0]) - number[i][1]
  }
  console.log(`${number}\n${sum} passengers left in the bus at the last station`)
}
busStops([[10,0],[3,5],[5,8]])
console.log('========')
busStops([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])
console.log('========')
busStops([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])
console.log('========')
busStops([[0,0]])