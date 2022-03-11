class DatabaseService {
	constructor(){
		
	}
	initDatabase(){
		return new Promise((_,reject) => {
			reject(new Error("Not implemented"));
		});
	}
}

module.exports = {
	DatabaseService
};
