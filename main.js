class SkylabArray {
  lenght = 0;
  group = {};

  push(element) {
    this.group[this.lenght] = element;
    this.lenght++;
    return this.group;
  }
  some(func) {
    for (value in this.group) {
      if (!func(value)) {
        return false;
      }
    }
    return true;
  }
}
module.exports = SkylabArray;
