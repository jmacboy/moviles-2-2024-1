import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage {
  result: string = "";
  currentOperation: string = "";
  prevNumber: number = 0;
  memory: number = 0;
  constructor() { }
  addNumber(num: number) {
    this.result += num;
  }
  clearEverything() {
    this.result = "";
  }
  clearOne() {
    this.result = this.result.slice(0, -1);
  }
  startOperation(symbol: string) {
    this.currentOperation = symbol;
    this.prevNumber = parseFloat(this.result ? this.result : "0");
    this.result = "";
  }
  doOperation() {
    const currentNumber = parseFloat(this.result ? this.result : "0");
    let newResult = 0;
    switch (this.currentOperation) {
      case "+":
        newResult = this.prevNumber + currentNumber;
        break;
      case "-":
        newResult = this.prevNumber - currentNumber;
        break;
      case "x":
        newResult = this.prevNumber * currentNumber;
        break;
      case "/":
        newResult = this.prevNumber / currentNumber;
        break;
    }
    this.result = newResult.toString();
  }
  addMemory() {
    this.memory = parseFloat(this.result ? this.result : "0");
  }
  substractMemory() {
    this.memory = this.memory - parseFloat(this.result ? this.result : "0");
  }
  memoryRecall() {
    this.result = this.memory.toString();
  }
  memoryClear() {
    this.memory = 0;
  }
}
