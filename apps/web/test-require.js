try {
    const plugin = require('next-translate-plugin');
    console.log('Plugin found:', typeof plugin);
} catch (e) {
    console.error('Plugin NOT found');
    console.error(e.message);
}
