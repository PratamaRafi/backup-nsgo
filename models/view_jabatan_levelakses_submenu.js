
const BaseModel = require("./basemodel");
class View_Jabatan_Levelakses_Submenu extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				deskripsi_jabatan: { type: Sequelize.STRING, primaryKey: true  },
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				prefix: {name: 'prefix', type:Sequelize.STRING},
				desc_menu: {name: 'desc_menu', type:Sequelize.STRING},
				url_menu: {name: 'url_menu', type:Sequelize.STRING},
				mainmenu_desc: {name: 'mainmenu_desc', type:Sequelize.STRING},
				tipe_submenu: {name: 'tipe_submenu', type:Sequelize.STRING},
				parent_menu: {name: 'parent_menu', type:Sequelize.STRING},
				urutan: {name: 'urutan', type:Sequelize.INTEGER},
				desc_level: {name: 'desc_level', type:Sequelize.STRING},
				id_level: {name: 'id_level', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "view_jabatan_levelakses_submenu",
				modelName: "view_jabatan_levelakses_submenu",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'deskripsi_jabatan', 
			'id_jabatan', 
			'prefix', 
			'desc_menu', 
			'url_menu', 
			'mainmenu_desc', 
			'tipe_submenu', 
			'parent_menu', 
			'urutan', 
			'desc_level', 
			'id_level'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'deskripsi_jabatan', 
			'id_jabatan', 
			'prefix', 
			'desc_menu', 
			'url_menu', 
			'mainmenu_desc', 
			'tipe_submenu', 
			'parent_menu', 
			'urutan', 
			'desc_level', 
			'id_level'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("deskripsi_jabatan LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("prefix LIKE :search"), 
			sequelize.literal("desc_menu LIKE :search"), 
			sequelize.literal("url_menu LIKE :search"), 
			sequelize.literal("mainmenu_desc LIKE :search"), 
			sequelize.literal("tipe_submenu LIKE :search"), 
			sequelize.literal("parent_menu LIKE :search"), 
			sequelize.literal("urutan LIKE :search"), 
			sequelize.literal("desc_level LIKE :search"), 
			sequelize.literal("id_level LIKE :search"),
		];
	}

	
	
}
module.exports = View_Jabatan_Levelakses_Submenu;
