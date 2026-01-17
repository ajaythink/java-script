# java-script
Great repository for JavaScript series from Chai aur code youtube channel 
<B> JAVA SCRIPT </B>
<I> CHAI AUR CODE </I>
Playlist awesome quality and deepth quality knowledge. 
<B> I am talking about optinal chaining in javaScript. </B>
```
const address={
  name: "Ajay Kumar",
  Village: {
    VillageName: "Sisaundha",
    District: "Buxar",
    Pincode: 293434
  }
}


```
For printing value District: 
console.log(address.name);
``` Ajay Kumar ```

console.log(address.Village.VillageName);
```state: { state: 'Bihar', District: { district: 'Buxar', Pincode: 232323 } }```

If field name does not exist in object then we use optional chaining. with question mark "?". 
For Example:

```
console.log(address.Village.accountNumber);```
here Error will be in terminal