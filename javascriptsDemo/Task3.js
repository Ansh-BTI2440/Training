let array3D = [[[10,20],[30,40]],[[50,60],[70,80]],[[90,100],[110,120]]];

var sum = 0;
for(let i=0;i<array3D.length;i++){
    for(let j=0;j<array3D[i].length;j++){
        for(let k=0;k<array3D[i][j].length;k++){
            sum += array3D[i][j][k];
        }
    }
}

console.log("Sum of 3D array:",sum);