
const BaseModel = require("./basemodel");
class Produk_Daftarproduk_Bpr extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				id_daftarproduk: {name: 'id_daftarproduk', type:Sequelize.INTEGER},
				max_jangkawaktu: {name: 'max_jangkawaktu', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "produk_daftarproduk_bpr",
				modelName: "produk_daftarproduk_bpr",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pt', 
			'id_daftarproduk', 
			'max_jangkawaktu'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pt', 
			'id_daftarproduk', 
			'max_jangkawaktu'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pt', 
			'id_daftarproduk', 
			'max_jangkawaktu'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pt', 
			'id_daftarproduk', 
			'max_jangkawaktu'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pt', 
			'id_daftarproduk', 
			'max_jangkawaktu'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("id_daftarproduk LIKE :search"), 
			sequelize.literal("max_jangkawaktu LIKE :search"),
		];
	}

	
	
}
module.exports = Produk_Daftarproduk_Bpr;
