var array1 = [2, 5, 6.5, 7, 0, 8, 9, 0, 10, 1];

const sum = (array1) => {
  let result = 0;
  for (i = 0; i < array1.length; i++) {
    Number.isInteger(array1[i])
        ? result += array1[i]
        : result+=0;
    
  }
  console.log(result);
};

sum(array1);
