"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    rollNo;
    name;
    static collegeName = "SVECW";
    constructor(rollNo, name) {
        this.rollNo = rollNo;
        this.name = name;
    }
    display() {
        console.log("College:", Student.collegeName);
        console.log("Roll Number:", this.rollNo);
        console.log("Student Name:", this.name);
    }
}
const s1 = new Student(4267, "Vagdevi");
s1.display();
//# sourceMappingURL=sta1.js.map