export class Student{
    constructor(firstName, lastName, student_ID, m1, m2, m3, m4, m5){
        this.fname= firstName;
        this.lname = lastName;
        this.sID = student_ID;
        this.Sub1_mark = m1;
        this.Sub2_mark = m2;
        this.Sub3_mark = m3;
        this.Sub4_mark = m4;
        this.Sub5_mark = m5;
    }
    gradeCompute =() => {
        let grade
        let totalMarks = this.Sub1_mark + this.Sub2_mark + this.Sub3_mark + this.Sub4_mark + this.Sub4_mark;
        if(totalMarks>=550){
            grade = "A+"
        }
        else if(totalMarks>=500 && totalMarks <=550){
            grade = "A";
        }
        console.log(grade);
    }
    displayGrade(){
       this.gradeCompute()
    }
}

export const reqlink = "https://jsonplaceholder.typicode.com/posts"
