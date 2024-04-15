function tri(numbers, order) {
  
    if (order === 'asc') {
   
        numbers.sort((a, b) => a - b);
    } else if (order === 'desc') {
      
        numbers.sort((a, b) => b - a);
    } else {
       
        return null;
    }

    return numbers;
}

console.log(tri([4, 2, 7, 1, 9], 'asc'));
console.log(tri([4, 2, 7, 1, 9], 'desc')); 
console.log(tri([4, 2, 7, 1, 9], 'invalid')); 
