
const BaseModel = require("./basemodel");
class View_Jabatan_Levelakses_Childmenu extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_submenu: { type: Sequelize.INTEGER, primaryKey: true  },
				id_level: {name: 'id_level', type:Sequelize.INTEGER},
				desc_level: {name: 'desc_level', type:Sequelize.STRING},
				desc_submenu: {name: 'desc_submenu', type:Sequelize.STRING},
				url_menu: {name: 'url_menu', type:Sequelize.STRING},
				parent_menu: {name: 'parent_menu', type:Sequelize.STRING},
				urutan: {name: 'urutan', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "view_jabatan_levelakses_childmenu",
				modelName: "view_jabatan_levelakses_childmenu",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_submenu', 
			'id_level', 
			'desc_level', 
			'desc_submenu', 
			'url_menu', 
			'parent_menu', 
			'urutan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_submenu', 
			'id_level', 
			'desc_level', 
			'desc_submenu', 
			'url_menu', 
			'parent_menu', 
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
			sequelize.literal("id_submenu LIKE :search"), 
			sequelize.literal("id_level LIKE :search"), 
			sequelize.literal("desc_level LIKE :search"), 
			sequelize.literal("desc_submenu LIKE :search"), 
			sequelize.literal("url_menu LIKE :search"), 
			sequelize.literal("parent_menu LIKE :search"), 
			sequelize.literal("urutan LIKE :search"),
		];
	}

	
	
}
module.exports = View_Jabatan_Levelakses_Childmenu;
