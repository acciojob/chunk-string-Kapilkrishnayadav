function stringChop(str, size) {
	if (str === null || size <= 0) return [];
  let strSize = str.length;
  let x = Math.floor(strSize / size);
  let arr = [];
  for (let i = 0; i <= x; i++) {
    if (strSize > i * size) {
      arr.push(str.slice(i * size, (i * size) + size));
    }
  }
  return arr;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = Number(prompt("Enter Chunk Size.")); // convert to number
// alert(stringChop(str, size));
