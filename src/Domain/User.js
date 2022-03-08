class User {
	constructor({id, name, last_name, subscription}){
		this.id = id;
		this.name = name;
		this.last_name = last_name;
		this.subscription = subscription;
	}
}

module.exports = {
	User
};