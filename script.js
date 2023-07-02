const inputInitial = document.querySelector('#number')
const inputFrom = document.querySelector('#from')
const inputTo = document.querySelector('#to')
const inputRes = document.querySelector('#result')
const messageElement = document.querySelector('#message')
const convertButton = document.querySelector('#convert')

function convert() {
  const forValue= inputFrom.value
  const toValue= inputTo.value

  const initialValue=inputInitial.value

  if (forValue === toValue) {
    inputRes.value = initialValue
    return
  }

  let meters
  
switch (forValue) {
  case "m":
    meters=initialValue
    break;
  case "km":
      meters=initialValue*1000
      break;
  case "cm":
      meters=initialValue /100
      break;
  case "mm":
    meters=initialValue /1000
    break;
}

let result

switch (toValue) {
  case "m":
    result=meters
    break;
  case "km":
    result=meters/1000
      break;
  case "cm":
    result=meters*100
      break;
  case "mm":
    result=meters*1000
    break;
}

inputRes.value=result

const fromText=inputFrom.options[inputFrom.selectedIndex].text
const toText=inputTo.options[inputTo.selectedIndex].text
const message=`${inputInitial.value} ${fromText} equivalem a ${result} ${toText}`
messageElement.textContent=message
return
}


convertButton.addEventListener("click", convert)

