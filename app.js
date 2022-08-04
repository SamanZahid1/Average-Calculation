//let name = "my practice";
 
//let english = 35;
//let   urdu = 50;
//let  maths = 55;
//console.log("english", english, "maths", maths, "urdu", urdu);

//let totalMarks = prompt("Enter total marks");
//let obtainMarks = prompt("Enter obtainMarks");


//let result = obtainMarks * 100 / totalMarks;
//alert(result + "%");

function calculate(){
    let totalMarks = document.querySelector("#totalMarks").value;
    let obtainMarks = document.querySelector("#obtainMarks").value;
     let result = obtainMarks * 100 / totalMarks;

     document.querySelector("#result").innerHTML =`You have Got ${result}%`;
}