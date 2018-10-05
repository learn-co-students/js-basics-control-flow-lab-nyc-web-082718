// Write your code in this file!
function scuberGreetingForFeet(dist) {
  let result
  switch (true){
    case dist>2500:
      result = `No can do.`
      break
    case dist<400:
      result = `This one is on me!`
      break
    default:
      result = `I will gladly take your thirty bucks.`
  }
  return result
}

function ternaryCheckCity(city) {
  let response
  city == "NYC" ? (response = "Ok, sounds good.") : (response = "No go.")
  return response
}

function switchOnCharmFromTip(tip) {
  let response
  switch (tip){
    case 'generous':
      response = "Thank you so much."
      break
    case 'not as generous':
      response = "Thank you."
      break
    default:
      response = "Bye."
  }
  return response
}
