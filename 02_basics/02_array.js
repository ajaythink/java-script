const marvel_heros = ["thor", "Ironman","spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);              //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][2]);        //batman

const all_heros = marvel_heros.concat(dc_heros);    //concat method return value another variable
console.log(all_heros);                     //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//Another way to concatnate array, Concatnate Spread method
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);                 //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]];
const real_another_array = another_Array.flat(Infinity);

console.log(real_another_array);
/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]
  */

  console.log(Array.isArray("Ajay"));       //false

  console.log(Array.from("AjayKumar"));
  /*
  [
  'A', 'j', 'a',
  'y', 'K', 'u',
  'm', 'a', 'r'
]
  */
// *****VVI******
  console.log(Array.from({name: "Ajay"}));
//   [] empty ARRAY if not convert in array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));