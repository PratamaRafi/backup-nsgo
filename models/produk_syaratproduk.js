
const BaseModel = require("./basemodel");
class Produk_Syaratproduk extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_syaratproduk: { type: Sequelize.INTEGER, primaryKey: true  },
				id_produk: {name: 'id_produk', type:Sequelize.INTEGER},
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				syarat_produk: {name: 'syarat_produk', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "produk_syaratproduk",
				modelName: "produk_syaratproduk",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_syaratproduk', 
			'id_produk', 
			'id_pt', 
			'syarat_produk'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_syaratproduk', 
			'id_produk', 
			'id_pt', 
			'syarat_produk'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id_syaratproduk', 
			'id_produk', 
			'id_pt', 
			'syarat_produk'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id_syaratproduk', 
			'id_produk', 
			'id_pt', 
			'syarat_produk'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id_syaratproduk', 
			'id_produk', 
			'id_pt', 
			'syarat_produk'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id_syaratproduk LIKE :search"), 
			sequelize.literal("id_produk LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("syarat_produk LIKE :search"),
		];
	}

	
	
}
module.exports = Produk_Syaratproduk;
