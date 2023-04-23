let a=[12,23,34];
let b=[12,23,34];
// console.log(a==b);    //false--because here whenever we compare two array like this it measures their memory location - which cant be same
// console.log(a===b);     //false


//2
// let x=[12,23,34,45];
// let y=x;
// console.log(x==y);   //true

//LET,VAR AND CONST 

//Definition of a scope= Scope is a Space where a particular variable, function can be declared.
// Var is a function and Global scope 
//Var can be Re declared and initalized
//variables Declared with Var are hoisted

//Let is a Block level Scope which means it cant be accessed outside of a block
//Let can be initilized, modified 

//Block-a Block is a compound statement that is defined by curly braces {} and used to combine
//  multiple statements into one statement

//And all the variables and functions that can be accessed inside a block are said 
// to be inside that block scope, hence called Block scoped.

//SHADOWING-- Now, when a variable is declared in a certain scope having the same name
//  defined on its outer scope and when we call the variable from the inner scope, the value
//   assigned to the variable in the inner scope is the value that will be stored in the variable in the memory space

 var x=12;
{
   let x=20;
    console.log(x);
}


//Illigal Shadowing - Now, while shadowing a variable, it should not cross the boundary of the scope, i.e. we can shadow var variable by let variable but cannot do the opposite. So, if we try to shadow let variable by var variable, it is known as Illegal Shadowing and it will give the error as “variable is already defined.

{
    var z=30;
    console.log(z)
}


