
const BaseModel = require("./basemodel");
class Karyawan_Submenubar extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				desc_menu: {name: 'desc_menu', type:Sequelize.STRING},
				url_menu: {name: 'url_menu', type:Sequelize.STRING},
				mainmenu_desc: {name: 'mainmenu_desc', type:Sequelize.STRING},
				tipe_submenu: {name: 'tipe_submenu', type:Sequelize.STRING},
				parent_menu: {name: 'parent_menu', type:Sequelize.STRING},
				urutan: {name: 'urutan', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_submenubar",
				modelName: "karyawan_submenubar",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'mainmenu_desc', 
			'tipe_submenu', 
			'parent_menu', 
			'urutan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'mainmenu_desc', 
			'tipe_submenu', 
			'parent_menu', 
			'urutan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'mainmenu_desc', 
			'tipe_submenu', 
			'parent_menu', 
			'urutan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'mainmenu_desc', 
			'tipe_submenu', 
			'parent_menu', 
			'urutan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_menu', 
			'url_menu', 
			'mainmenu_desc', 
			'tipe_submenu', 
			'parent_menu', 
			'urutan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("desc_menu LIKE :search"), 
			sequelize.literal("url_menu LIKE :search"), 
			sequelize.literal("mainmenu_desc LIKE :search"), 
			sequelize.literal("tipe_submenu LIKE :search"), 
			sequelize.literal("parent_menu LIKE :search"), 
			sequelize.literal("urutan LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Submenubar;
