
const BaseModel = require("./basemodel");
class Masterdata_Ikatan_Agunan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				kodeibs: {name: 'kodeibs', type:Sequelize.STRING},
				descikatanhukum: {name: 'descikatanhukum', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_ikatan_agunan",
				modelName: "masterdata_ikatan_agunan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descikatanhukum'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descikatanhukum'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descikatanhukum'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descikatanhukum'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kodeibs', 
			'descikatanhukum'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("kodeibs LIKE :search"), 
			sequelize.literal("descikatanhukum LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Ikatan_Agunan;
