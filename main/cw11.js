function reverse(string){
   const strArr = string.split(' ');
   let temp = '';
   const { length } = strArr;
   for(let i = 0; i < length / 2; i++){
      temp = strArr[i];
      strArr[i] = strArr[length - 1 - i];
      strArr[length - 1 - i] = temp;
   };
   return strArr.join(' ');
};
