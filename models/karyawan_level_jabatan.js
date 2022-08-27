
const BaseModel = require("./basemodel");
class Karyawan_Level_Jabatan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				id_masterlevel: {name: 'id_masterlevel', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_level_jabatan",
				modelName: "karyawan_level_jabatan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_jabatan', 
			'id_masterlevel'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_jabatan', 
			'id_masterlevel'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_jabatan', 
			'id_masterlevel'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_jabatan', 
			'id_masterlevel'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_jabatan', 
			'id_masterlevel'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("id_masterlevel LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Level_Jabatan;
