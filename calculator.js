
        function calculate(operation) {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            let result;

            if (isNaN(num1) || isNaN(num2)) {
                alert('Please enter valid numbers!');
                return;
            }

            switch(operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    if (num2 === 0) {
                        alert('Cannot divide by zero!');
                        return;
                    }
                    result = num1 / num2;
                    break;
            }

            document.getElementById('result').innerHTML = 
                `Answer = ${result.toFixed(2)}`;
        }
 