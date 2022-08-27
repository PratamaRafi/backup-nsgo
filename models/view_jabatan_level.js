
const BaseModel = require("./basemodel");
class View_Jabatan_Level extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_jabatan: { type: Sequelize.INTEGER, primaryKey: true  },
				id_masterlevel: {name: 'id_masterlevel', type:Sequelize.INTEGER},
				desc_level: {name: 'desc_level', type:Sequelize.STRING},
				deskripsi_jabatan: {name: 'deskripsi_jabatan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_jabatan_level",
				modelName: "view_jabatan_level",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_jabatan', 
			'id_masterlevel', 
			'desc_level', 
			'deskripsi_jabatan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_jabatan', 
			'id_masterlevel', 
			'desc_level', 
			'deskripsi_jabatan'
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
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("id_masterlevel LIKE :search"), 
			sequelize.literal("desc_level LIKE :search"), 
			sequelize.literal("deskripsi_jabatan LIKE :search"),
		];
	}

	
	
}
module.exports = View_Jabatan_Level;
