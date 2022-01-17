module.exports = value => {
    return value.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        // month: 'short',
        day: 'numeric'
    })
        // .replace(' г.', '');
};
