var tower1 = [100, 80, 60, 40, 20];
var tower2 = [];
var tower3 = [];
var elemento;

const render = (id, array) => {
  let indice = id.children.length - 1;
  for (let i = 0; i < id.children.length; i++) {

    /*console.clear()
    console.log(id.children[i].children[0].style.width);
    console.log(array[indice]);*/

    if (array[indice] != undefined) {
      id.children[i].children[0].style.width = `${array[indice]}%`;
    } else {
      id.children[i].children[0].style.width = `0%`;
    }
    
    indice--;
  }
};

const tower1Div = document.getElementById("tower1");
const tower2Div = document.getElementById("tower2");
const tower3Div = document.getElementById("tower3");

const tower1right = document.getElementById("tower1-right");
tower1right.addEventListener("click", function () {
  if (tower1.length > 0) {
    let lastItemTower1 = tower1[tower1.length - 1];
    let lastItemTower2 = tower2[tower2.length - 1];
    if (lastItemTower1 > lastItemTower2) {
      alert("invalid move");
    } else {
      lastItemTower1 = tower1.pop();
      tower2.push(lastItemTower1);
    }
   /* console.clear();
    console.log(tower1);
    console.log(tower2);*/
    render(tower1Div, tower1);
    render(tower2Div, tower2);
  }
});

const tower2right = document.getElementById("tower2-right");
tower2right.addEventListener("click", function () {
  if (tower2.length > 0) {
    let lastItemTower2 = tower2[tower2.length - 1];
    let lastItemTower3 = tower3[tower3.length - 1];
    if (lastItemTower2 > lastItemTower3) {
      alert("invalid move");
    } else {
      lastItemTower2 = tower2.pop();
      tower3.push(lastItemTower2);
    }
    /*  console.clear();
    console.log(tower2);
    console.log(tower3);*/
    render(tower2Div, tower2);
    render(tower3Div, tower3);
  }
});

const tower2left = document.getElementById("tower2-left");
tower2left.addEventListener("click", function () {
  if (tower2.length > 0) {
    let lastItemTower2 = tower2[tower2.length - 1];
    let lastItemTower1 = tower1[tower1.length - 1];
    if (lastItemTower2 > lastItemTower1) {
      alert("invalid move");
    } else {
      lastItemTower2 = tower2.pop();
      tower1.push(lastItemTower2);
    }
    /*  console.clear();
    console.log(tower2);
    console.log(tower1);*/
    render(tower2Div, tower2);
    render(tower1Div, tower1);
  }
});

const tower3left = document.getElementById("tower3-left");
tower3left.addEventListener("click", function () {
  if (tower3.length > 0) {
    let lastItemTower3 = tower3[tower3.length - 1];
    let lastItemTower2 = tower2[tower2.length - 1];
    if (lastItemTower3 > lastItemTower2) {
      alert("invalid move");
    } else {
      lastItemTower3 = tower3.pop();
      tower2.push(lastItemTower3);
    }
    /*  console.clear();
    console.log(tower3);
    console.log(tower2);*/
    render(tower3Div, tower3);
    render(tower2Div, tower2);
  }
});

const tower1left = document.getElementById("tower1-left");
tower1left.addEventListener("click", function () {
    if (tower1.length > 0) {
        let lastItemTower1 = tower1[tower1.length - 1];
        let lastItemTower3 = tower3[tower3.length - 1];
        if (lastItemTower1 > lastItemTower3) {
        alert("invalid move");
        } else {
        lastItemTower1 = tower1.pop();
        tower3.push(lastItemTower1);
        }
        /*  console.clear();
        console.log(tower1);
        console.log(tower3);*/
        render(tower1Div, tower1);
        render(tower3Div, tower3);
    }
}
);

const tower3right = document.getElementById("tower3-right");
tower3right.addEventListener("click", function () {
    if (tower3.length > 0) {
        let lastItemTower3 = tower3[tower3.length - 1];
        let lastItemTower1 = tower1[tower1.length - 1];
        if (lastItemTower3 > lastItemTower1) {
        alert("invalid move");
        } else {
        lastItemTower3 = tower3.pop();
        tower1.push(lastItemTower3);
        }
        /*  console.clear();
        console.log(tower3);
        console.log(tower1);*/
        render(tower3Div, tower3);
        render(tower1Div, tower1);
    }
});

