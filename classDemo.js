class Person{
    
    constructor(){
        this.name="abc";
        this.age=22;
    }

    show(){
        console.log("In Person's show(). \n name: " +this.name +"\n age: " +this.age);
    }

}

class Employee extends Person {
    
    constructor(){
        super()
        this.empId = 3456;
    }

    show1(){
        console.log("In  Employee's show() \n employee id: " +this.empId);
    }

}

var obj = new Employee();
obj.show();
obj.show1();

class Student {

    set sName(sn){
        this._sName = sn;
    }

    get sName(){
        return this._sName;
    }

    set rollNo(rn){
        this._rollNo = rn;
    }

    get rollNo() {
        return this._rollNo;
    }
}

stud = new Student();
stud.sName = "abc";
stud.rollNo = 236;
console.log(" name: " +stud.sName +"\n roll no: " +stud.rollNo);
