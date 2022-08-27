
const BaseModel = require("./basemodel");
class Masterdata_Pendidikan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				kodeibs: {name: 'kodeibs', type:Sequelize.STRING},
				deskripsi: {name: 'deskripsi', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_pendidikan",
				modelName: "masterdata_pendidikan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'deskripsi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'deskripsi'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'deskripsi'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'deskripsi'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'deskripsi'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("kodeibs LIKE :search"), 
			sequelize.literal("deskripsi LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Pendidikan;
