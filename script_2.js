let num = "";
num = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
let result = factorialize(num);
let output = `Le résultat est : ${result}`;
console.log(output);