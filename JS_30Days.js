class Calculator {
    constructor(value) {
    this.init = value;
    }
    add(value){
       this.init = value+this.init;
       return this;

    }
    subtract(value){
        this.init = this.init-value;
        return this;
    }
    multiply(value) {
       this.init = this.init* value;
       return this;
    }
    divide(value) {
       if(value==0){
        throw new Error("Division by zero is not allowed");
       }
       else{
        this.init = this.init/value;
       }
       return this;
    }
    power(value) {
       this.init = Math.pow(this.init,value);
       return this;
    }
    getResult() {
        console.log(this.init);
        return this.init;
    }
}
 let call =new Calculator(2);
 call.power(1).power(-3).getResult();