let math = prompt("Display math:");
let born = prompt("Display born:");
let chemical = prompt("Display chemical:");
math1 = parseFloat(math);
born1 = parseFloat(born);
chemical1 = parseFloat(chemical);
let total = math1 + born1 + chemical1;
let medium = (math1 + born1 + chemical1) /3;
document.write("Total:"+total)
document.write("<br>")
document.write("Medium:"+medium)
