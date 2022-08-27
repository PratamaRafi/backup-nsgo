
const BaseModel = require("./basemodel");
class Produk_Daftarproduk extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				id_ibs: {name: 'id_ibs', type:Sequelize.STRING},
				desc_produk: {name: 'desc_produk', type:Sequelize.STRING},
				id_integrasi: {name: 'id_integrasi', type:Sequelize.INTEGER},
				max_jangkkawaktu: {name: 'max_jangkkawaktu', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "produk_daftarproduk",
				modelName: "produk_daftarproduk",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'desc_produk', 
			'id_integrasi', 
			'max_jangkkawaktu'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'desc_produk', 
			'id_integrasi', 
			'max_jangkkawaktu'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'desc_produk', 
			'id_integrasi', 
			'max_jangkkawaktu'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'desc_produk', 
			'id_integrasi', 
			'max_jangkkawaktu'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_ibs', 
			'desc_produk', 
			'id_integrasi', 
			'max_jangkkawaktu'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_ibs LIKE :search"), 
			sequelize.literal("desc_produk LIKE :search"), 
			sequelize.literal("id_integrasi LIKE :search"), 
			sequelize.literal("max_jangkkawaktu LIKE :search"),
		];
	}

	
	
}
module.exports = Produk_Daftarproduk;
