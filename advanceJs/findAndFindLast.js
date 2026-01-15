  // 15-01-2026 started JavaScript Learning
  const user = [
    {id: 1, name: "Ajay Kumar", age: 5},
    {id: 2, name: "Sudhir Kumar", age: 10},
    {id: 3, name: "Sonu Kumar", age: 15},
    {id: 4, name: "Mohan Kumar", age: 10},
    {id: 5, name: "Vinoth Kumar", age: 13},
    {id: 6, name: "Anirudh Kumar", age: 18},
    {id: 7, name: "Dipu Kumar", age: 19},
    {id: 8, name: "Mukesh Kumar", age: 17},
    {id: 9, name: "Sohan Kumar", age: 15},
    {id: 10, name: "Narendra Kumar", age: 2},
  ]
  const resultIdx = user.findLastIndex((item) => item.age > 10); // findLastIndex: Return index value of matched condition from last. 
  console.log(resultIdx); 
  
  // const resultIdx = user.findIndex((item) => item.age > 10); // findIndex: Return index value of matched condition
  // console.log(resultIdx);

  // const resutl = user.find((item) => item.age > 15); // findLast function: return the first matched value. 
  // console.log(resutl);  
  
  // const result = user.findLast((item) => item.age > 15); // findLast function: return the first matched value from last. 
  // console.log(result);
