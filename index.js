/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array) {
    let recordArray = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return recordArray
}

function createEmployeeRecords(arrayOfEmployees) {
    return arrayOfEmployees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(timeStamp) {
    let [date, time] = timeStamp.split(' ')
    let checkIn = {
        type: 'TimeIn',
        hour: parseInt(time, 10),
        date
    }
    this.timeInEvents.push(checkIn)
    return this
}

function createTimeOutEvent(timeStamp){
    let [date, time] = timeStamp.split(' ')
    let checkOut = {
        type: 'TimeOut',
        hour: parseInt(time, 10),
        date
    }
    this.timeOutEvents.push(checkOut)
    return this
}

function hoursWorkedOnDate(timeStamp) {
    let timeIn = this.timeInEvents.find((event) => event.date === timeStamp).hour
    let timeOut = this.timeOutEvents.find((event) => event.date === timeStamp).hour
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(timeStamp) {
    let wages = this.payPerHour * hoursWorkedOnDate.call(this, timeStamp)
    return wages 
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
        
    }.bind(this), 0) 

    return payable
}


function calculatePayroll(employeeRecords){
    return employeeRecords.reduce((total, employeeRecord) => {
       return total + allWagesFor.call(employeeRecord)
    }, 0)
  }

function findEmployeeByFirstName(employeeRecords, firstName){
    return employeeRecords.find(employee => employee.firstName === firstName)
  }