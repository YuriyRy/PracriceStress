function getDays(year, month) {
    if (typeof year == 'undefined' || typeof month == 'undefined') {
        return 'error'
    }
    if (typeof year !== 'number' || year < 0 || month < 0) {
        return "year or month is not correct"
    }
    monthArr = [, 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    if (typeof month == 'string') {
        month = month.toLowerCase()
        let newMonth = 0
        for (let i = 1; i < monthArr.length; i++) {
            if (month == monthArr[i]) {
                newMonth += i
            }
        }
        if (newMonth == 0) {
            return 'try again'
        }
        var days = new Date(year, newMonth, 0).getDate()
        return days
    } else if (typeof month == 'number') {
        var days = new Date(year, month, 0).getDate()
        return days
    } else return 'error'
}

console.log(getDays(2011, 4))
console.log(getDays(2019, 2))
console.log(getDays(2019, 'apRil'))
console.log(getDays(2019, 'apRilis'))




//2
Number.prototype.isOdd = function (number) {
    if (typeof number != "number") {
        return 'error'
    }
    if (number < 0) {
        number *= -1
    }
    if (number % 2 == 1) {
        return true
    } else return false
}
//3

function every(arr, func) {
    let countTrue = 0
    let countFalse = 0
    if (!Array.isArray(arr)) {
        return 'error'
    }
    if (typeof func != 'function') {
        return 'error'
    }
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            countTrue += 1
        } else countFalse += 1
    }
    if (countTrue === 0 || countFalse === 0) {
        return true
    } else return false
}

console.log(every([8, 2, 4], function (num) {
    return num % 2 === 0
})) // true

console.log(every([8, 35, 4], function (num) {
    return num % 2 === 0
}))

console.log(every('qqqewwes', function (num) {
    return num % 2 === 0
}))
console.log(every([8, 35, 4], 7))

module.exports = {getDays, every};