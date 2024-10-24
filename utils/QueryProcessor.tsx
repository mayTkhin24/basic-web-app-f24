export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("name")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "My name is May Thu Khin." );
  }
      // Function to check if a number is both a perfect square and cube
      function isSquareAndCube(number: number) {
        const sqrt = Math.sqrt(number);
        const cbrt = Math.cbrt(number);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      }
  
  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "My Andrew ID is mkhin." );
  }

  if (query.toLowerCase().includes("largest")) {
    // Extract numbers and find the largest
    const numbers = query.match(/\d+/g).map(Number);
    const largest = Math.max(...numbers);
    return `${largest}`;
  } 

  if (query.toLowerCase().includes("a square and a cube")) {
  // Extract numbers from the query
  const matches = query.match(/\d+/g);
  if (matches) {
    const numbers = matches.map(Number);

    // Filter numbers that are both a square and a cube
    const squareAndCube = numbers.filter(isSquareAndCube);

    // Return the results
    return squareAndCube.length > 0
      ? `The number(s) that is both a square and a cube: ${squareAndCube.join(', ')}`
      : "No number is both a square and a cube.";
  } else {
    return "No numbers found in the query.";
  }
}


  return "";
}
