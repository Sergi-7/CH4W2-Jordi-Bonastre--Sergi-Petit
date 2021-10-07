class SkylabArray {
  lenght = 0;
  group = {};

  push(element) {
    this.group[this.lenght] = element;
    this.lenght++;
    return this.group;
  }
  some(func) {
    let flag = false;
    for (var element in this.group) {
      if (func(this.group[element])) {
        flag = true;
      }
    }
    return flag;
  }
}
module.exports = SkylabArray;

let sc = SkylabArray();
