function callBackFunction(returnValue) {
    return returnValue
}

function receivesAFunction (callBack) {
    return callBack(`hello`)
}

function callBackNamed() {
    return callBackFunction(`named`)
}

function returnsANamedFunction() {
    return callBackNamed
}

function returnsAnAnonymousFunction() {
    return function() {
        return `hello`
    }
}


