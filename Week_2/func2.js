"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateSI(principal, rate, time) {
    return (principal * rate * time) / 100;
}
let interest = calculateSI(10000, 5, 2);
console.log("Simple Interest:", interest);
//# sourceMappingURL=func2.js.map