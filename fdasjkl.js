let u = new Date(
  new Date().setDate(new Date().getDate() - 1)
).toLocaleDateString("en-CA");
console.log(u);
