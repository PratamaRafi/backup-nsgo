
const BaseModel = require("./basemodel");
class Produk_Kodeintegrasi extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				id_ibs: {name: 'id_ibs', type:Sequelize.STRING},
				deskripsi_kodeintegrasi: {name: 'deskripsi_kodeintegrasi', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "produk_kodeintegrasi",
				modelName: "produk_kodeintegrasi",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'deskripsi_kodeintegrasi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'deskripsi_kodeintegrasi'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'deskripsi_kodeintegrasi'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'deskripsi_kodeintegrasi'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'deskripsi_kodeintegrasi'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_ibs LIKE :search"), 
			sequelize.literal("deskripsi_kodeintegrasi LIKE :search"),
		];
	}

	
	
}
module.exports = Produk_Kodeintegrasi;
