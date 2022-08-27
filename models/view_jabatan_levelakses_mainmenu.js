
const BaseModel = require("./basemodel");
class View_Jabatan_Levelakses_Mainmenu extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_masterlevel: { type: Sequelize.INTEGER, primaryKey: true  },
				id_menubar: {name: 'id_menubar', type:Sequelize.INTEGER},
				deskripsi_level: {name: 'deskripsi_level', type:Sequelize.STRING},
				desc_menu: {name: 'desc_menu', type:Sequelize.STRING},
				url_menu: {name: 'url_menu', type:Sequelize.STRING},
				urutan: {name: 'urutan', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "view_jabatan_levelakses_mainmenu",
				modelName: "view_jabatan_levelakses_mainmenu",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_masterlevel', 
			'id_menubar', 
			'deskripsi_level', 
			'desc_menu', 
			'url_menu', 
			'urutan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_masterlevel', 
			'id_menubar', 
			'deskripsi_level', 
			'desc_menu', 
			'url_menu', 
			'urutan'
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
			sequelize.literal("id_masterlevel LIKE :search"), 
			sequelize.literal("id_menubar LIKE :search"), 
			sequelize.literal("deskripsi_level LIKE :search"), 
			sequelize.literal("desc_menu LIKE :search"), 
			sequelize.literal("url_menu LIKE :search"), 
			sequelize.literal("urutan LIKE :search"),
		];
	}

	
	
}
module.exports = View_Jabatan_Levelakses_Mainmenu;
