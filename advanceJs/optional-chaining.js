//Optional chaining 

const account ={
  name: "Ajay Kumar",
  address:{
    state:{
      state: "Bihar",
      District: {
        district: "Buxar",
        Pincode: 232323,

      }
    }
  }
}
// console.log(account);
console.log(account.address.state.state)
