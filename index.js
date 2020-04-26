module.exports = {
    log: {
        prefix: 'toolio',
        console: {
            on: true,
            exclude: ['test']
        },
        type: {
            error: {
                prefix: 'error',
                color: 'red',
                bold: true
            },
            warning: {
                prefix: 'warning',
                color: 'yellow',
                bold: true
            },
            success: {
                prefix: 'success',
                color: 'green',
                bold: true
            },
            message: {
                prefix: 'message'
            },
            test: {
                prefix: 'test'
            }
        }
    }
}