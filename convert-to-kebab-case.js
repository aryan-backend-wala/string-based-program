function kebabCase(str, anotherStr = ""){
  if(anotherStr === ""){
    return str.toLowerCase()
    .replaceAll(" ", "-");
  } else {
    return anotherStr + "-" + str.toLowerCase()
    .replaceAll(" ", "-");
  }
}

// expected output: introduction-to-algorithms
let str = "Array Sequence";
let anotherStr = "";
const _print = kebabCase(str, anotherStr);
console.log(_print);
