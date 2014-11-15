var imported = document.createElement('script');
imported.src = 'vendor/require.js';
document.head.appendChild(imported);

exports.Converter = require("./Markdown.Converter").Converter;
exports.getSanitizingConverter = require("./Markdown.Sanitizer").getSanitizingConverter;
