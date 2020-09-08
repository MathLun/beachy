const { v4: uuidv4, validate} = require('uuid');
const { saveDataInFileJSON } = require('../common/functions');



class Order {
	constructor() {
		this.id = uuidv4();
	}

	PrintIdOnScreen() {
		console.log(id);
	}

	save() {
		const jsonData = {
			"id": this.id,
		}
		return saveDataInFileJSON(jsonData);
	}
}

const myOrder = new Order();
myOrder.save();
