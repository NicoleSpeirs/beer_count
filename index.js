function evenNum(num) {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
}

function squared(num) {
  return num ** 2;
}


function food() {
  return ["Apple", "Chocolate", "Honey"];
}

function menu(){
  return {
    apple: "2",
    chocolate: "5",
    honey: "8"

  };
}

console.log(squared(3));
evenNum(9);
console.log(food());
console.log(menu());
