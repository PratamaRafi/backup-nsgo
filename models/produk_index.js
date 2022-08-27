
const BaseModel = require("./basemodel");
class Produk_Index extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_produk: { type: Sequelize.INTEGER, primaryKey: true  },
				nm_produk: {name: 'nm_produk', type:Sequelize.STRING},
				jenis_produk: {name: 'jenis_produk', type:Sequelize.STRING},
				desc_produk: {name: 'desc_produk', type:Sequelize.STRING},
				ket_manfaat: {name: 'ket_manfaat', type:Sequelize.STRING},
				ket_biaya: {name: 'ket_biaya', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "produk_index",
				modelName: "produk_index",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_produk', 
			'nm_produk', 
			'jenis_produk', 
			'desc_produk', 
			'ket_manfaat', 
			'ket_biaya'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_produk', 
			'nm_produk', 
			'jenis_produk', 
			'desc_produk', 
			'ket_manfaat', 
			'ket_biaya'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id_produk', 
			'nm_produk', 
			'jenis_produk', 
			'desc_produk', 
			'ket_manfaat', 
			'ket_biaya'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id_produk', 
			'nm_produk', 
			'jenis_produk', 
			'desc_produk', 
			'ket_manfaat', 
			'ket_biaya'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id_produk', 
			'nm_produk', 
			'jenis_produk', 
			'desc_produk', 
			'ket_manfaat', 
			'ket_biaya'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id_produk LIKE :search"), 
			sequelize.literal("nm_produk LIKE :search"), 
			sequelize.literal("jenis_produk LIKE :search"), 
			sequelize.literal("desc_produk LIKE :search"), 
			sequelize.literal("ket_manfaat LIKE :search"), 
			sequelize.literal("ket_biaya LIKE :search"),
		];
	}

	
	
}
module.exports = Produk_Index;
