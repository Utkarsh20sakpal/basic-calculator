let string = "";
let Buttons = document.querySelectorAll('.Button');
//selects all elements of class buttons and return as an array

Array.from(Buttons).forEach((Button) => {
    Button.addEventListener('click', (e) => { // adding event listner when button clicks adds anevent listner 
        const value = e.target.innerHTML;  //e.target refers to the button that was clicked. innerHTML gives the text of that button +,-,1,2
        if (value == '=') {
            try {
                string = eval(string);//Evaluates the expression using eval().
                document.querySelector('input').value = string;
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        } else if (value == 'C') {
            string = ""; //Clears the expression and input box.
            document.querySelector('input').value = string;

        } else if (value == 'x²') {
            string = Math.pow(eval(string), 2).toString();
            document.querySelector('input').value = string;

        } else if (value == 'x³') {
            string = Math.pow(eval(string), 3).toString();
            document.querySelector('input').value = string;

        } else if (value == '1/x') {
            string = (1 / eval(string)).toString();
            document.querySelector('input').value = string;

        } else if (value == 'log') {
            string = Math.log10(eval(string)).toString();
            document.querySelector('input').value = string;

        } else if (value == 'sin') {
            string = Math.sin(eval(string) * Math.PI / 180).toFixed(6);
            document.querySelector('input').value = string;

        } else if (value == 'cos') {
            string = Math.cos(eval(string) * Math.PI / 180).toFixed(6);
            document.querySelector('input').value = string;

        } else if (value == 'tan') {
            string = Math.tan(eval(string) * Math.PI / 180).toFixed(6);
            document.querySelector('input').value = string;

        } else {
            string = string + value;
            document.querySelector('input').value = string;
        }
    });
});

// Square root function
document.querySelector('.Button1').addEventListener('click', () => {
    try {
        let result = eval(string);
        if (isNaN(result)) throw "Invalid Expression";
        if (result < 0) throw "Negative Input";
        string = Math.sqrt(result).toString();
        document.querySelector('input').value = string;
    } catch {
        document.querySelector('input').value = "Error";
        string = "";
    }
});

// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
});
