
const BaseModel = require("./basemodel");
class Karyawan_Menubar extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				desc_menu: {name: 'desc_menu', type:Sequelize.STRING},
				url_menu: {name: 'url_menu', type:Sequelize.STRING},
				level_akses: {name: 'level_akses', type:Sequelize.STRING},
				tipe_menu: {name: 'tipe_menu', type:Sequelize.STRING},
				urutan: {name: 'urutan', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_menubar",
				modelName: "karyawan_menubar",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'level_akses', 
			'tipe_menu', 
			'urutan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'level_akses', 
			'tipe_menu', 
			'urutan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'level_akses', 
			'tipe_menu', 
			'urutan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'level_akses', 
			'tipe_menu', 
			'urutan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'level_akses', 
			'tipe_menu', 
			'urutan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("desc_menu LIKE :search"), 
			sequelize.literal("url_menu LIKE :search"), 
			sequelize.literal("level_akses LIKE :search"), 
			sequelize.literal("tipe_menu LIKE :search"), 
			sequelize.literal("urutan LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Menubar;
