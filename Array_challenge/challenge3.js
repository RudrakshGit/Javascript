/*Create a new array called `capitalizedWords` with the words from the 
`words` array with the first letter of each word capitalized.*/

const words = ['coder', 'programmer', 'developer'];
 const cword = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1, word.length);
 });
 console.log(cword);