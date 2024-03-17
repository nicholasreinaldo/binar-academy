let userInput;

do {
    userInput = parseInt(prompt('Enter a positive number:'));
    if (userInput <= 0 || isNaN(userInput)) {
    	alert('Please enter a valid number');
    }else { 
    console.log('Thank you! You entered:', userInput);    
	}
} while (userInput <= 0 || isNaN(userInput));