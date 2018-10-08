// Write your code in this file!
function scuberGreetingForFeet(distance) {
  let result
  if (distance <= 400) {
    result = "This one is on me!"
  }
  else if (distance > 2500) {
    result = "No can do."
  }
  else if (distance > 2000) {
    result = "I will gladly take your thirty bucks."
  }
  return result
}

function ternaryCheckCity(destination) {
  let result
  if (destination === "NYC") {
    result = "Ok, sounds good."
  }
  else if (destination !== "NYC") {
    result = "No go."
  }
  return result
}

function switchOnCharmFromTip(tip) {
  let result
  if (tip === "generous") {
    result = "Thank you so much."
  }
  else if (tip === "not as generous") {
    result = "Thank you."
  }
  else  {
    result = "Bye."
  }
  return result
}
