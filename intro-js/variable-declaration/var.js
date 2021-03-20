/**
 * Javascript Variable Delaration
 *
 * var - variables declared by var keyword are scoped to the immediate function body
 * 
 * See below examples:
 */

/************************************************************************
                                 Example 1
*************************************************************************/

/**
 * Calling a variable that is not yet defined will give an Error: "undefined".
 * 
 * This is called "Hoisting" wherein you can call the variable even before it is declared, javascript will 
 * initialize the variable with "undefined"
 * */
console.log(a);


// Variable declaration using 'var' in a scoped block.
{
    var a = 123;

    a = 146;
}

/************************************************************************
                                 Example 2
*************************************************************************/

/**
 * Variable declared with 'var' is globally scoped. It means you can always access variable 'a' even in the window object
 * 
 * The 'window' object represents an open window in a browser.
 * Your variable 'a' will be automatically added in the window object because of its global accessiblity
 */
console.log(window.a)


/************************************************************************
                                 Example 3
*************************************************************************/

// You can change the value of 'a' directly in the window object.
window.a = 4;


// Then, the new value will reflect in your variable 'a' 
console.log(a)


/************************************************************************
                                 Example 4
*************************************************************************/

// Changing value again
a = 10;

// And vice versa
console.log(window.a)