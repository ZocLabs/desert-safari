export const formatCurrency = (amount: number, locale: string = 'en-QA') => {
    const currency = 'QAR';
    // Use Arabic locale if specified, else English Qatar
    const formatter = new Intl.NumberFormat(locale === 'ar' ? 'ar-QA' : 'en-QA', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return formatter.format(amount);
};
