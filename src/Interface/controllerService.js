class ControllerService {
	constructor(){
		this.load();
		this.get();
		this.delete();
		this.post();
		this.patch();
	}

	get blueprint(){
		return new Error("Not implement");
	}

	load(){
		return new Error("Not implement");
	}
	get(){
		return new Error("Not implement");
	}
	
	delete(){
		return new Error("Not implement");
	}
	
	post(){
		return new Error("Not implement");
	}
	
	patch(){
		return new Error("Not implement");
	}
}

module.exports = {
	ControllerService
};
