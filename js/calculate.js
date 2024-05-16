const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const calculate = () => {
    const input = document.getElementById('numberInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!input) {
        resultDiv.innerHTML = '<div class="alert alert-danger">Input string does not present positive integer numbers</div>';
        return;
    }

    const numbers = input.split(' ').map(Number);
    if (numbers.some(isNaN) || numbers.some(num => num <= 0)) {
        resultDiv.innerHTML = '<div class="alert alert-danger">Input string does not present positive integer numbers</div>';
        return;
    }

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const primes = numbers.filter(isPrime);

    resultDiv.innerHTML = `
        <div>max: ${max}</div>
        <div>min: ${min}</div>
        <div>Sum: ${sum}</div>
        <div>the list of prime numbers: ${primes.join(' ')}</div>
    `;
};
