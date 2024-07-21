const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  return tutorials.map(tutorial => {
    let result = '';
    for (let i = 0; i < tutorial.length; i++) {
      if (i === 0 || tutorial[i - 1] === ' ') {
        result += tutorial[i].toUpperCase();
      } else {
        result += tutorial[i];
      }
    }
    return result;
  });
}

module.exports = { titleCased };