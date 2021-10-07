class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  sumar() {
    return num1 + num2;
  }

  multiplicar() {
    return num1 * num2;
  }
}

let calc1 = Calculadora(2, 2);
calc1.sumar();
calc1.multiplicar();
