function calculateExpression(expression) {
    try {
        const sanitized = sanitizedExpression(expression);
        //eval calcula a expressão
        const result = eval(sanitized);

        if (isNaN(result)) {
            throw new Error('Result is not a number');
        }

        return result;
    } catch (error) {
        throw error; // Agora vamos propagar o erro original
    }
}

// remove qualquer coisa que não seja número, parêntese ou operador.
function sanitizedExpression(expression) {
    // Permite apenas números, operadores matemáticos, espaços e parênteses
    const validCharactersRegex = /^[0-9+\-*/().\s]+$/;

    if (!validCharactersRegex.test(expression)) {
        throw new Error('Expression contains invalid characters.');
    }

    return expression.trim();
}

export { calculateExpression };
