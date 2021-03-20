/**
 * Javascript Variable Delaration
 *
 * let - is a keyword which is used to declare a local variable with block scope.
 * 
 * Scoped Block '{}' can be a 'function block'
 * 
 * Read on: https://www.studytonight.com/javascript/javascript-let-keyword
 * 
 * See below examples:
 */


/************************************************************************
                                 Example 1
*************************************************************************/

// When variable 'helloWorld' is first declared, its value is available to all code blocks below it.
let example1 = 'hello';

{
    
    // 'example1' is available here
    console.log(example1)
}

// 'example1' is available here
// console.log(example1)


/************************************************************************
                                 Example 2
*************************************************************************/

// Variable declared with 'let' is scoped block '{}', meaning you cannot access that variable outside the block '{}'
{
    let example2 = 'hello';
}

/**
 * Since 'example2' is declared within scoped block '{}', 
 * Calling it outside will throw an error (ReferenceError), saying the variable is not defined.
 */
console.log(example2);


/************************************************************************
                                 Example 3
*************************************************************************/

// Variable declared with 'let' is scoped block  '{}', meaning you cannot access that variable outside the block '{}'

{
    let example3 = 'hello';

    // Value re-assignment is allowed.
    example3 = 'world';

    console.log(example3)

    /**
     * Redeclaration of same variable name within the same scoped block is not allowed
     */
    // let example3 = 'redeclare variable';
}


/************************************************************************
                                 Example 4
*************************************************************************/

// Variable declared with 'let' is scoped block  '{}', meaning you cannot access that variable outside the block '{}' where it is declared

{
    let example4 = 'hello';
}

{
    /**
     * Redeclaration of already declared variable from the other scope block is allowed.
     * 
     * Javascript will treat the variable in each block as completely idependent variables
     * 
     * Here, we can redeclare 'example3' because it is in a separate scoped block '{}'
     */
    let example4 = 'redeclaration'

    console.log(example4)
}


/************************************************************************
                                 Example 5
*************************************************************************/

// Variable declared with 'let' is scoped block  '{}', meaning you cannot access that variable outside the block '{}' where it is declared

let example5 = 'example5';

{
    /**
     * Redeclaration of already declared variable 'example5' within a scoped block '{}' is allowed.
     * 
     * Within this soped block '{}', 
     * variable 'example5' is treated as a new variable. 
     * Its value wont affect the value of the variable 'example5' outside this scoped block '{}' 
     * 
     */
    let example5 = 'redeclaration-example5'

    // Will print 'redeclaration-example5'
    console.log(example5)
}

// Will print 'example5' as initialized above
console.log(example5)

