
const BaseModel = require("./basemodel");
class Karyawan_Masterlevel extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				desc_level: {name: 'desc_level', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_masterlevel",
				modelName: "karyawan_masterlevel",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_level'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_level'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_level'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_level'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_level'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("desc_level LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Masterlevel;
