
const BaseModel = require("./basemodel");
class Masterdata_Agama extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				kodeibs: {name: 'kodeibs', type:Sequelize.STRING},
				descagama: {name: 'descagama', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_agama",
				modelName: "masterdata_agama",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descagama'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descagama'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descagama'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descagama'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descagama'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("kodeibs LIKE :search"), 
			sequelize.literal("descagama LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Agama;
