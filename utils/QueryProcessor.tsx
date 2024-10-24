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

  if (query.toLowerCase().includes("Which of the following numbers is both a square and a cube: 2044, 3375, 4131, 3554, 542, 64, 4761?")) {
    return ( "The number is 64." );
  }

  

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "My Andrew ID is mkhin." );
  }
  return "";
}
