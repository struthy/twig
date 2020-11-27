let _ = require('lodash')

// https://lodash.com/docs/4.17.15#chunk

export default () => {
    let data = [1,2,3,4,5]
    let n = 2

  const groupArrayElements = (data, n) => {
    if(data === undefined || n === undefined || data < 1 || n === null || !Number.isInteger(n)){
      return null;
      }
    else {
      return _.chunk(data, n);
    }
  }

  let result = groupArrayElements(data, n);

  console.log(result)
   
};




