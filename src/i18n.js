export function useTranslations(locale = "es") {
    let messages;
    try {
        messages = require(`./messages/${locale}.json`);
    } catch (error) {
        console.error(`Could not load translations for locale: ${locale}`, error);
        try {
            messages = require(`./messages/en.json`);
        } catch (error) {
            console.error(`Could not load fallback English translations`, error);
            messages = require(`./messages/es.json`);
        }
    }
    return (key) => key.split('.').reduce((obj, k) => (obj ? obj[k] : `Missing: ${key}`), messages);
}
