"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentInfo;
(function (StudentInfo) {
    class Student {
        name;
        roll;
        constructor(name, roll) {
            this.name = name;
            this.roll = roll;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Roll:", this.roll);
        }
    }
    StudentInfo.Student = Student;
})(StudentInfo || (StudentInfo = {}));
const s = new StudentInfo.Student("Vagdevi", 4267);
s.display();
//# sourceMappingURL=namespace1.js.map