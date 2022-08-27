
const BaseModel = require("./basemodel");
class Credit_Scoring_Master extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				deskripsi: {name: 'deskripsi', type:Sequelize.STRING},
				score: {name: 'score', type:Sequelize.INTEGER},
				nom_kondisi: {name: 'nom_kondisi', type:Sequelize.STRING},
				kategori: {name: 'kategori', type:Sequelize.STRING},
				bobot: {name: 'bobot', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "credit_scoring_master",
				modelName: "credit_scoring_master",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'deskripsi', 
			'score', 
			'nom_kondisi', 
			'kategori', 
			'bobot'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'deskripsi', 
			'score', 
			'nom_kondisi', 
			'kategori', 
			'bobot'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'deskripsi', 
			'score', 
			'nom_kondisi', 
			'kategori', 
			'bobot'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'deskripsi', 
			'score', 
			'nom_kondisi', 
			'kategori', 
			'bobot'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'deskripsi', 
			'score', 
			'nom_kondisi', 
			'kategori', 
			'bobot'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("deskripsi LIKE :search"), 
			sequelize.literal("score LIKE :search"), 
			sequelize.literal("nom_kondisi LIKE :search"), 
			sequelize.literal("kategori LIKE :search"), 
			sequelize.literal("bobot LIKE :search"),
		];
	}

	
	
}
module.exports = Credit_Scoring_Master;
