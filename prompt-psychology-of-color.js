var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    document.write("Red's a good color!");
    document.write("Energy, increases the hearth rate, creates urgency, often seen in clearance sales")
    break;
  case 'blue':
    document.write("That's my favorite color, too!");
    document.write("Creates the sentational of trust and security often seen with banks and business")
    break;
  case 'green':
    document.write("Green is hope!");
    document.write("associated with whealthy the easiest  color for the eyes to process used to relax in stories")
    break;
  case 'orange':
    document.write("Let's eat oranges!");
    document.write("agressive, creates a call to action subscribe, buy or sell")
    break;
  case 'yellow':
    document.write("Let's be optimistic!" + "Optimistic and Youtful often used to grab attention of window shoppers");
    break;
  case 'black':
    document.write("Elegancy! Powerful and sleek used to market luxury products");
    break;
  case 'pink':
    document.write("Romantic and feminine used to market products 10 woman andyoung girls");
    break;
  case 'purple':
    document.write("Is used to soothe & calm often seen in beauty or anti-aging products");
    break;
    
  default:
    document.write("I don't think that's a primary color!");
}

