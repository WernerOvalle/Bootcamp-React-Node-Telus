var level=7;
var row="";


const mostrarTriangulo = (nivel) => {
    for(let i=0;i<=level;i++){
        for(let j=0;j<i;j++){
            row += "#";
        }
        console.log(row);
        row="";
    }
}

if(level<3){
    console.dir("Sorry, I don't print triangles less than 3 levels.")
}
else{

    mostrarTriangulo(level);
}

 
