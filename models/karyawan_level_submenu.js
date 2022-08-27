
const BaseModel = require("./basemodel");
class Karyawan_Level_Submenu extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_level: {name: 'id_level', type:Sequelize.INTEGER},
				id_submenu: {name: 'id_submenu', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_level_submenu",
				modelName: "karyawan_level_submenu",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_submenu'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_submenu'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_submenu'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_submenu'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_submenu'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_level LIKE :search"), 
			sequelize.literal("id_submenu LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Level_Submenu;
