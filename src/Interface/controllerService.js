class ControllerService {
	constructor(){
		this.get();
		this.delete();
		this.post();
		this.patch();
	}

	get blueprint(){
		return new Error("Not implement");
	}

	get(){
		return new Promise((_, reject) => {
			reject(new Error("Not implement"));
		})
	}
	
	delete(){
		return new Promise((_, reject) => {
			reject(new Error("Not implement"));
		})
	}
	
	post(){
		return new Promise((_, reject) => {
			reject(new Error("Not implement"));
		})
	}
	
	patch(){
		return new Promise((_, reject) => {
			reject(new Error("Not implement"));
		})
	}
}

module.exports = {
	RestfullApi
};
