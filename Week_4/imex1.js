"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    name;
    rollNo;
    course;
    constructor(name, rollNo, course) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollNo);
        console.log("Course:", this.course);
    }
}
exports.Student = Student;
//# sourceMappingURL=imex1.js.map