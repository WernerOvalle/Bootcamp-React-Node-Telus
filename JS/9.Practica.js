const isNoInteger = (parameter) => {
  return new Promise((resolve,reject) => {
   // if(!isNaN(parameter)){
      if (Number.isInteger(parameter)  ) {
        reject(
          new Error(`El valor ${parameter}  es un entero`)
        );
      } else {
        resolve( parameter);
      }
    /*}else{
      reject();
    }*/
   
  });
};

isNoInteger("hola")
  .then((parameter) => {
    console.log("Success" + " " + parameter);
  })
  .catch((error) => {
    console.error(error.message);
  });
