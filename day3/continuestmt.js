console.log("prog started");

for (let index = 0; index < 10; index++) {
    if(index==6 || index==8){
        continue; // skip iteration
    }
    console.log(" index " + index);
}

console.log("prog ended");