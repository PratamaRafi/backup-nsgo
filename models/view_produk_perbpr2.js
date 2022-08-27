
const BaseModel = require("./basemodel");
class View_Produk_Perbpr2 extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				id_daftarproduk: {name: 'id_daftarproduk', type:Sequelize.INTEGER},
				max_jangkawaktu: {name: 'max_jangkawaktu', type:Sequelize.INTEGER},
				desc_produk: {name: 'desc_produk', type:Sequelize.STRING},
				desc_perusahaan: {name: 'desc_perusahaan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_produk_perbpr2",
				modelName: "view_produk_perbpr2",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pt', 
			'id_daftarproduk', 
			'max_jangkawaktu', 
			'desc_produk', 
			'desc_perusahaan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pt', 
			'id_daftarproduk', 
			'max_jangkawaktu', 
			'desc_produk', 
			'desc_perusahaan'
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
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("id_daftarproduk LIKE :search"), 
			sequelize.literal("max_jangkawaktu LIKE :search"), 
			sequelize.literal("desc_produk LIKE :search"), 
			sequelize.literal("desc_perusahaan LIKE :search"),
		];
	}

	
	
}
module.exports = View_Produk_Perbpr2;
