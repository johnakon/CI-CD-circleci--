class Marks {
  constructor(student, subject, marks) {
    this.student = student;
    this.subject = subject;
    this.marks = marks;
  }

  computeScore() {
    var score = null;
    if (this.marks >= 80) {
      console.log("you have scored an A");
      score = "A";
    } else if (this.marks >= 70 && this.marks < 80) {
      console.log("You have scored a B");
      score = "B";
    } else if (this.marks >= 60 && this.marks < 70) {
      console.log("You have scored a C");
      score = "C";
    } else if (this.marks >= 50 && this.marks < 60) {
      console.log("You have scored a D");
      score = "D";
    } else if (this.marks >= 40 && this.marks < 50) {
      console.log("You have scored a E");
      score = "E";
    } else if (this.marks >= 0 && this.marks < 40) {
      console.log("You have failed");
      score = "F";
    }
    return score;
  }

  isValidate() {
    let valid = true;
    if (this.Student === null) {
      valid = false;
      console.log("Student not registered");
    }
    if (typeof this.marks !== "number") {
      valid = false;
      console.log("please enter the right mark");
    }
    if (this.marks < 0) {
      valid = false;
      console.log("The marks value should be Zero and above");
    }
    if (this.marks > 100) {
      valid = false;
      console.log("Marks can't be morethan 100");
    }
    return valid;
  }
}

module.exports = Marks;
