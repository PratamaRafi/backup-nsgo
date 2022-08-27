
const BaseModel = require("./basemodel");
class Pekerjaan_Daftarpekerjaan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				desckripsi: {name: 'desckripsi', type:Sequelize.STRING},
				kode: {name: 'kode', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "pekerjaan_daftarpekerjaan",
				modelName: "pekerjaan_daftarpekerjaan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desckripsi', 
			'kode'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desckripsi', 
			'kode'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desckripsi', 
			'kode'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desckripsi', 
			'kode'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desckripsi', 
			'kode'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("desckripsi LIKE :search"), 
			sequelize.literal("kode LIKE :search"),
		];
	}

	
	
}
module.exports = Pekerjaan_Daftarpekerjaan;
