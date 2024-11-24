# CALCULATOR

Last project for The Odin Project Foundations course.

The goal is to create a calculator using HTML, CSS, and JavaScript.

## Pseudocode


    Functions for basic operations
        Two variables
        Return the result of the operation performed in both variables

    Function to truncate the result
        The display can only hold 11 characters at a time.
        Calculates the length of the rounded integer.
        Based on that, decides how many floaters it needs to truncate.
        Truncates these floaters

    General function to operate
        Three variables: Operator, and two numbers.
        Depending on the operator, performs said operation between both numbers.

    Create three variables:
        The previous number that is saved in the calculator's memory to perform the operation with.
        The current number that the user will be typing and will be displayed. It's an array.
        The operator.
        
    Select all number buttons.
    For each button:
        When the button is clicked:
            If the current number's length is lower than 11:
                The value of the button is pushed to the array.
                The display is updated with the joined current number array. 
            If it's greater tha 11:
                Nothing happens

    Select decimal button.
    When the button is clicked:
        If the current number does NOT include '.'
            Push '.' to the current value array
            Display current value array joined.
        If the current number DOES include '.'
            Nothing happens

    Select all operator buttons.
    For each button:
        When the button is clicked:
            If the previous number AND operator HAVE NOT been defined:
                Set the value of the previous number to the current number.
                Set the current number to [0]
                Set the operator to the value of the button.
            If the previous number and operator HAVE been defined:
                Perform the operation
                Display the result of the operation
                Set the value of the previous number to the result of the operation.
                Set the current number to [0]
                Set the operator to the value of the button.

    Select equal button.
        When the button is clicked:
            If the previous number and operator HAVE been defined:
                Perform the operation
                Display the result of the operation
                Set the value of the previous number to the result of the operation.
                Set current number to 0
                Set the operator to undefined.
                
    Select percentage button.
        When the button is clicked:
            Set the value of the current number to the same, divided by 100.
            Update display.
    
    Select negative button.
        When the button is clicked:
            Set the value of the current number to the same in negative
            Update display.

    Select AC button.
        When the button is clicked:
            Set the value of previous number to undefined.
            Set the value of operator to undefined.
            Set the value of current number to 0.
            Display current number.