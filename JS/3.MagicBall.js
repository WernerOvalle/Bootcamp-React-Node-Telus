var respuesta = Math.floor(Math.random() * 21);
var nombre = "Werner";

nombre
  ? console.log(`Hello ${nombre}, let´s guess your fortune`)
  : console.log(`Hello, let´s guess your fortune`);

switch (respuesta) {
  case 0:
    console.log("Try again");
    break;
  case 1:
    console.log("It is certain");
    break;
  case 2:
    console.log("It is decidedly so");
    break;
  case 3:
    console.log("Without a doubt");
    break;
  case 4:
    console.log("Yes definitely");
    break;
  case 5:
    console.log("You may rely on it");
    break;
  case 6:
    console.log("As I see it, yes");
    break;
  case 7:
    console.log("Most likely");
    break;
  case 8:
    console.log("Outlook good");
    break;
  case 9:
    console.log("Yes");
    break;
  case 10:
    console.log("Signs point to yes");
    break;
  case 11:
    console.log("Reply hazy try again");
    break;
  case 12:
    console.log("Ask again later");
    break;
  case 13:
    console.log("Better not tell you now");
    break;
  case 14:
    console.log("Cannot predict now");
    break;
  case 15:
    console.log("Concentrate and ask again");
    break;
  case 16:
    console.log("Don't count on it");
    break;
  case 17:
    console.log("My reply is no");
    break;
  case 18:
    console.log("My sources say no");
    break;
  case 19:
    console.log("Outlook not so good");
    break;
  case 20:
    console.log("Very doubtful");
    break;
  default:
    console.log("Try again");
    break;
}
