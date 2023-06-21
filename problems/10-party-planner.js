class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		let sentence = "Welcome to the party "
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list"
		} else {
			return sentence + this.guestList.join(" and ");
		}
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
