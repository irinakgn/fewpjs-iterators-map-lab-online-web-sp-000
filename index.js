
const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
  //return tutorials
//}

function titleCase(tutorials) {
 var splitStr = tutorials.split(' ');
 for (var i = 0; i < splitStr.length; i++) {
   if (splitStr.length[i] < splitStr.length) {
     splitStr[i].charAt(0).toUpperCase();
   }
      tutorials = splitStr.join(' ');
 }
return tutorials;
}
