var ClozeCard = function (fullText, cloze ) {
	
	// checks if arguments passed are strings 

	if (typeof fullText === 'string' || fullText instanceof String) this.fullText = fullText;
	else throw "argument 1 is not a string.";
	
	if (typeof cloze === 'string' || cloze instanceof String) this.cloze = cloze;
	else throw "argument 2 is not a string.";

	// creates a regular expression to replace the text and create the partial text
	// if we add "gi" as the second parameter it becomes case insensity
	// but is not required.
	var regexText = new RegExp(cloze, "g");

	// runs a repace regex on the full text string which replaces all the instaces of 
	// the cloze variable
	this.partial = this.fullText.replace(regexText, "...");

	// if the string is the same as full text then we didnt find 
	// cloze within full text so throw an error
	if (this.partial === this.fullText)
		throw `${this.cloze} doesnt appear in ${this.fullText}.`;

	

}

module.exports = ClozeCard;
