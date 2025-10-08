// Select input box and all calculator buttons
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons); // convert NodeList to array

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        // '=' button → evaluate the full expression
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error"; // if invalid expression
                string = "";
            }
        }

        // 'AC' → clear everything
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }

        // 'DEL' → delete last character
        else if (e.target.innerHTML == 'DEL') {
            // FIX: use slice instead of substring to avoid NaN issue
            string = string.slice(0, -1);
            input.value = string;
        }

        // Handle other buttons (numbers, operators, etc.)
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
