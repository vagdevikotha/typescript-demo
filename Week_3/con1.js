"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    rollNo;
    course;
    constructor(name, rollNo, course) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }
    displayDetails() {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNo);
        console.log("Course:", this.course);
    }
}
const student1 = new Student("Vagdevi", 4267, "AI & ML");
student1.displayDetails();
//# sourceMappingURL=con1.js.map