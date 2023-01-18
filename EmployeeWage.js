const EMPLOYEE_ABSENT = 0;
const EMPLOYEE_PRESENT = 1;
function employeePresentOrObsent() {
    let generateRandomValue = Math.floor(Math.random() * 10) % 2;
    if (generateRandomValue == EMPLOYEE_ABSENT) {
        console.log("Employee is Absent");
    }
    else {
        console.log("Employee is present")
    }
}