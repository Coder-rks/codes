//JSON Pretty outputs
const protein = {steak: 'jack', bacon: 'carlson'};
console.log(JSON.stringify(protein));
console.log(JSON.stringify(protein, null, 2));
console.log(JSON.stringify(protein, null, "\t"));
console.log(JSON.stringify(protein, null, 3));	
console.log(JSON.stringify(protein, null, "I 💛"));
console.log(JSON.stringify(protein, ['steak'], 20));