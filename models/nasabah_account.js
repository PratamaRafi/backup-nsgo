
const BaseModel = require("./basemodel");
class Nasabah_Account extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				uname: {name: 'uname', type:Sequelize.STRING},
				pwd: {name: 'pwd', type:Sequelize.STRING},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_account",
				modelName: "nasabah_account",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'uname', 
			'pwd', 
			'id_nasabah'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'uname', 
			'pwd', 
			'id_nasabah'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'uname', 
			'pwd', 
			'id_nasabah'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'uname', 
			'pwd', 
			'id_nasabah'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'uname', 
			'pwd', 
			'id_nasabah'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("uname LIKE :search"), 
			sequelize.literal("pwd LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Account;
