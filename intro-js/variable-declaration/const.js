/**
 * Javascript Variable Delaration
 *
 * const - is keyword is used to define constant values that can not be changed once a value is set. 
 *         The value of a constant can't be changed through reassignment, and it can't be redeclared.
 * 
 * Read on: https://www.studytonight.com/javascript/javascript-constant-const-keyword
 * 
 * See below examples:
 */

/************************************************************************
                                 Example 1
*************************************************************************/

// When variable 'example1' is first declared as 'const' its value is available to all the code blocks below it.
const example1 = 'example1';

{
    // Printing 'example1' value
    console.log(example1)

    /**
     * When a variable is declared as const, re-assigning a value is not allowed.
     * 
     * Here, an error will occur
     */
    // example1 = 'reassignment-example1';
}


/************************************************************************
                                 Example 2
*************************************************************************/

const example2 = 'example2';

{
    /**
     * Redeclaration of already declared variable 'example2' within a scoped block '{}' is allowed.
     * 
     * Within this soped block '{}', 
     * variable 'example2' is treated as a new variable. 
     * Its value wont affect the value of the variable 'example2' outside this scoped block '{}' 
     * 
     */
     const example2 = 'redeclaration-example2'

    // Will print 'redeclaration-example2'
    console.log(example2)
}

// Will print 'example2' as initialized above
console.log(example2)


/************************************************************************
                                 Example 3
*************************************************************************/

// Variable declared with 'const' is scoped block '{}', meaning you cannot access that variable outside this block '{}'
{
    const example3 = 'example3';
}

/**
 * Since 'example3' is declared within scoped block '{}' above, 
 * Calling it outside will throw an error (ReferenceError), saying the variable is not defined.
 */
// console.log(example3);


/************************************************************************
                                 Example 4
*************************************************************************/

// Variable declared with 'const' is scoped block  '{}', meaning you cannot access that variable outside the block '{}' where it is declared

{
    let example4 = 'example4';
}

{
    /**
     * Redeclaration of already declared variable from the other scope block is allowed.
     * 
     * Javascript will treat the variable in each block as completely idependent variables
     * 
     * Here, we can redeclare 'example3' because it is in a separate scoped block '{}'
     */
    let example4 = 'redeclaration-example4'

    console.log(example4)
}

/************************************************************************
                                 Example 5
*************************************************************************/

// Variable declared with 'const' is scoped block  '{}', meaning you cannot access that variable outside the block '{}'

{
    const example5 = 'example5';

    // Value re-assignment is allowed.
    example5 = 'example5';

    console.log(example5)

    /**
     * Redeclaration of same variable name within the same scoped block is not allowed
     */
    // const example5 = 'redeclare-example5';
}
