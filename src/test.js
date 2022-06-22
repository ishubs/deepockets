let pair = 3;

function generatePairs(num) {
  
  if (num == 0)
    return [""];
  
  var totalPairs = []

  for (let i = 0; i < num; i++){
    let r = generatePairs(num-i-1)
    let l = generatePairs(i)

    for (let i = 0; i < l.length; i++){
      for (let j = 0; j < r.length; j++){
        totalPairs.push("(" + l[i] + ")" + r[j]);
      }
    }
  }

  return totalPairs;
  
}

console.log(generatePairs(1))