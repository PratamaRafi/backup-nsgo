
const BaseModel = require("./basemodel");
class Karyawan_Level_Menubar extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_level: {name: 'id_level', type:Sequelize.INTEGER},
				id_menubar: {name: 'id_menubar', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_level_menubar",
				modelName: "karyawan_level_menubar",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_menubar'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_menubar'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_menubar'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_menubar'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_level', 
			'id_menubar'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_level LIKE :search"), 
			sequelize.literal("id_menubar LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Level_Menubar;
