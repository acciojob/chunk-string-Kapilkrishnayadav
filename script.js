function stringChop(str, size) {
	if(str==null)
		return [];
	let arr=[];
	for (let i = 0; i < str.length; i=i+size) {
		{
			arr.push(str.slice(i,i+size));
		}	
	}
	
  return arr;
}

Do not change the code below
const str = prompt("Enter String.");
const size = Number(prompt("Enter Chunk Size.")); // convert to number
alert(stringChop(str, size));
