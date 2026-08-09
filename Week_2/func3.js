"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkEligibility(name, age) {
    if (age >= 18) {
        return `${name} is eligible to vote.`;
    }
    else {
        return `${name} is not eligible to vote.`;
    }
}
console.log(checkEligibility("Vagdevi", 20));
//# sourceMappingURL=func3.js.map