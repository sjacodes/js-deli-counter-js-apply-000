var ticketNumber = 0

function takeANumber(katzDeliLine){
  ticketNumber = ticketNumber + 1
  katzDeliLine.push(ticketNumber)
  return `Welcome. You're ticket number #${ticketNumber}`
}

// takeANumber(katzDeliLine) => "Welcome. You're ticket number #1" [1]
// takeANumber(katzDeliLine) => "Welcome. You're ticket number #2" [1,2]

// nowServing(katzDeliLine) => "Currently serving: #1" [2]
// nowServing(katzDeliLine) => "Currently serving: #2" []

// takeANumber(katzDeliLine) => "Welcome. You're ticket number #3" [3]


function takeANumber(katzDeliLine, newPerson) {
  katzDeliLine.push(newPerson)
  return `Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var firstPerson = katzDeliLine.shift()
    return `Currently serving ${firstPerson}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var numberedDeliLine = []
    for (var i = 0; i < katzDeliLine.length; i++) {
      numberedDeliLine.push(' '+ [i+1] + '. ' + katzDeliLine[i])
    }
    return  `The line is currently:${numberedDeliLine}`
  }
}