export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export function formatCurrency(amount: number): string {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = [
        'Ten',
        'Eleven',
        'Twelve',
        'Thirteen',
        'Fourteen',
        'Fifteen',
        'Sixteen',
        'Seventeen',
        'Eighteen',
        'Nineteen',
    ];
    const tens = [
        '',
        '',
        'Twenty',
        'Thirty',
        'Forty',
        'Fifty',
        'Sixty',
        'Seventy',
        'Eighty',
        'Ninety',
    ];
    const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

    if (amount === 0) return 'Zero Pesos';

    const convertHundreds = (num: number): string => {
        let result = '';
        const hundred = Math.floor(num / 100);
        if (hundred > 0) result += ones[hundred] + ' hundred ';

        const remainder = num % 100;
        if (remainder >= 20) {
            result += tens[Math.floor(remainder / 10)];
            if (remainder % 10 > 0) result += ' ' + ones[remainder % 10];
        } else if (remainder >= 10) {
            result += teens[remainder - 10];
        } else if (remainder > 0) {
            result += ones[remainder];
        }
        return result.trim();
    };

    let scaleIndex = 0;
    let text = '';

    while (amount > 0) {
        const chunk = amount % 1000;
        if (chunk !== 0) {
            text =
                convertHundreds(chunk) +
                (scales[scaleIndex] ? ' ' + scales[scaleIndex] : '') +
                ' ' +
                text;
        }
        amount = Math.floor(amount / 1000);
        scaleIndex++;
    }

    return text.trim() + ' Pesos';
}
