const piAmountInput = document.getElementById('piAmount');
const currencySelect = document.getElementById('currencySelect');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', async () => {
    const piAmount = parseFloat(piAmountInput.value);
    const currency = currencySelect.value;

    if (piAmount <= 0) {
        resultElement.textContent = 'Please enter a valid Pi amount.';
        return;
    }

    try {
        const response = await fetch('/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pi_amount: piAmount, currency })
        });

        const data = await response.json();
        const convertedValue = data.converted_value;

        resultElement.textContent = ` Converted value: ${convertedValue.toFixed(2)} ${currency}`;
    } catch (error) {
        resultElement.textContent = 'Error: Unable to convert Pi amount.';
    }
});
