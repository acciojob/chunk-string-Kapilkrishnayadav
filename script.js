function stringChop(str, size) {
  // your code here
	let strSize=str.length;
	let x=Math.floor(strSize/size);
	let arr=[];
	for(let i=0;i<=x;i++)
	{
		if(strSize>i*size)
				arr.push(str.slice(i*size,(i*size)+size));	
	}
	return arr;
}

// // Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
