const fs = require('fs');

function saveDataInFileJSON(jsonData) {           const jsonContent = JSON.stringify(jsonData);                                                                                 fs.writeFile('data.json',                         jsonContent,                              (err) => err ? console.log(err) : console.log('Pedido salvo com sucesso!'))                                   }

module.exports = {
	saveDataInFileJSON
};
