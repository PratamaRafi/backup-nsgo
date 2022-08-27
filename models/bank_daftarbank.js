
const BaseModel = require("./basemodel");
class Bank_Daftarbank extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				namabank: {name: 'namabank', type:Sequelize.STRING},
				kategori_lembaga: {name: 'kategori_lembaga', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "bank_daftarbank",
				modelName: "bank_daftarbank",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'namabank', 
			'kategori_lembaga'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'namabank', 
			'kategori_lembaga'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'namabank', 
			'kategori_lembaga'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'namabank', 
			'kategori_lembaga'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'namabank', 
			'kategori_lembaga'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("namabank LIKE :search"), 
			sequelize.literal("kategori_lembaga LIKE :search"),
		];
	}

	
	
}
module.exports = Bank_Daftarbank;
