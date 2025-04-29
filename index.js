import readline from 'readline';
import { calculateExpression } from './calculator.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askUserForExpression() {
    rl.question('Enter a mathematical expression: ', (expression) => {
        try {
            const result = calculateExpression(expression);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error(error.message);
        } finally {
            rl.close();
        }
    });
}

askUserForExpression();