
const BaseModel = require("./basemodel");
class Masterdata_Provinsi extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nmprov: {name: 'nmprov', type:Sequelize.STRING},
				sandi: {name: 'sandi', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_provinsi",
				modelName: "masterdata_provinsi",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmprov', 
			'sandi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmprov', 
			'sandi'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmprov', 
			'sandi'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmprov', 
			'sandi'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmprov', 
			'sandi'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nmprov LIKE :search"), 
			sequelize.literal("sandi LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Provinsi;
