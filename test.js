function even() {
  let even = [];
  for( i = 1 ; i <=50 ; i++){
    if( i % 2 === 0 ){
       even.push(i)
    }
  }
  return even
}

even()