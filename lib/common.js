var Common = module.exports = exports;

Common.levels = {
    debug: { num: 0, color: 'blue' },
    info: { num: 1, color: 'green' },
    warn: { num: 2, color: 'yellow' },
    error: { num: 3, color: 'red' },
    exception: { num: 4, color: 'red' },
    reverse: ['debug', 'info', 'warn', 'error', 'exception']
};