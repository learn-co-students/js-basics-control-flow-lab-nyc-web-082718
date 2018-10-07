// Write your code in this file!


function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 2500) {
    return "No can do."
  } else if (distance > 2000); {
      return `I will gladly take your thirty bucks.`
  }
}

function ternaryCheckCity(city){
  let response
  city === "NYC" ? (response = "Ok, sounds good.") : (response = "No go.")
  return response
}

function switchOnCharmFromTip(Tip){
      let message
  switch (Tip) {
      case 'generous':
        message = "Thank you so much."
        break;
      case 'not as generous':
        message = "Thank you."
        break;
      default:
        message = "Bye."
        break;
    }
    return message

}
