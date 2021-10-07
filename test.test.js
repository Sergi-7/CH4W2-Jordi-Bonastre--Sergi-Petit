class SkylabArray {
  lenght = 0;
  group = {};

  push(element) {
    this.group[this.lenght] = element;
    this.lenght++;
  }
  // some(fu){
  //   for(let value of this.group){

  //   }
  // }
}

// sa = new SkylabArray();
// sa.push("hola");
// console.log(sa.lenght);
