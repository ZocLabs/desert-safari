export const generateWhatsAppLink = (
    phone: string,
    messageEn: string,
    messageAr: string,
    locale: string = 'en'
) => {
    // 1. Clean phone number
    const cleanPhone = phone.replace(/[^\d]/g, '');

    // 2. Select message based on locale
    const text = locale === 'ar' ? messageAr : messageEn;

    // 3. Encode
    const encodedText = encodeURIComponent(text);

    // 4. Generate URL
    return `https://wa.me/${cleanPhone}?text=${encodedText}`;
};

export const trackLeadGen = async (tourId: string, type: 'WHATSAPP' | 'CALL') => {
    // Fire and forget log to DB or Analytics
    console.log(`Lead Generated: ${type} for Tour ${tourId}`);
    // await prisma.lead.create(...)
};
