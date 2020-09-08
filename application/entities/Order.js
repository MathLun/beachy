const { v4: uuidv4, validate} = require('uuid');
const { saveDataInFileJSON } = require('../common/functions');

class User {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}
}

class Order extends User {
	constructor(name) {
		super(name);
		this.id = uuidv4();
	}

	PrintIdOnScreen() {
		console.log(id);
	}

	save() {

		const jsonData = {
			"id": this.id,
			"user": {
				"name": this.getName(),
			}
		}

		return saveDataInFileJSON(jsonData);
	}
}

const userName = "Matheus";
const myOrder = new Order();
myOrder.save(userName);
