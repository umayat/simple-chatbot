var conv = [
	{ 
		input: ['Hello', 'Hi', 'Greetings'], 
		output: ['Hello', 'Hey', 'Greetings'] 
	},
	{ 
		input: ['What is your favourite colour?', 'Who is your favourite HYF instructor?', 'Who is your role model?'], 
		output: ['I am not sure.', 'There are too many to choose from.', 'I like everyone.'] 
	},
	{ 
		input: ['How are you?', 'How is the weather today?', 'How is Canada doing in the Olympics?'], 
		output: ['Fine', 'Great', 'Not so good'] 
	}
];


function reply() {
	let question = document.getElementById('input').value;
	let randomNum = Math.floor(Math.random() * 3);
	let chatHistory = document.getElementById('output');

	//display user input in chat history
	chatHistory.value += ('User: ' + question + '\nChatbot: ');

	//get possible answers based on input
	let possible_answers = conv.filter( function(q){
		return q.input.includes(question);
	})

	//display answer in chat history
	if(possible_answers.length > 0){
		//check filter type
		if(document.getElementById('longest').checked){
			document.getElementById('output').value += possible_answers[0].output.sort( (a,b) => a.length - b.length ).reverse()[0];
		}
		else if(document.getElementById('shortest').checked){
			document.getElementById('output').value += possible_answers[0].output.sort( (a,b) => a.length - b.length )[0];
		}
		else{
			document.getElementById('output').value += possible_answers[0].output[randomNum];
		}

	}
	else{
		document.getElementById('output').value += "I don't understand that command. Please enter another.";
	}

	//add black line after response
	chatHistory.value += '\n\n';
}

document.getElementById('submit').onclick = function(event){
	reply();
}