var BasicCard = function  (front, back){
	// checks if arguments passed are strings 
	if (typeof front === 'string' || front instanceof String) this.front = front;
	else throw "argument 1 is not a string.";
	
	if (typeof back === 'string' || back instanceof String) this.back = back;
	else throw "argument 2 is not a string.";
	

};

module.exports = BasicCard;