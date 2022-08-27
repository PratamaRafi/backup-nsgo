
const BaseModel = require("./basemodel");
class View_Produk_Perbpr extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_produk: { type: Sequelize.INTEGER, primaryKey: true  },
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				id_tbintegrasi: {name: 'id_tbintegrasi', type:Sequelize.INTEGER},
				id_daftarproduk: {name: 'id_daftarproduk', type:Sequelize.INTEGER},
				desc_perusahaan: {name: 'desc_perusahaan', type:Sequelize.STRING},
				desc_produk: {name: 'desc_produk', type:Sequelize.STRING},
				idibs_produk: {name: 'idibs_produk', type:Sequelize.STRING},
				id_kodeintegrasiibs: {name: 'id_kodeintegrasiibs', type:Sequelize.STRING},
				deskripsi_kodeintegrasi: {name: 'deskripsi_kodeintegrasi', type:Sequelize.STRING},
				id_tabelintegrasi: {name: 'id_tabelintegrasi', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "view_produk_perbpr",
				modelName: "view_produk_perbpr",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_produk', 
			'id_pt', 
			'id_tbintegrasi', 
			'id_daftarproduk', 
			'desc_perusahaan', 
			'desc_produk', 
			'idibs_produk', 
			'id_kodeintegrasiibs', 
			'deskripsi_kodeintegrasi', 
			'id_tabelintegrasi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_produk', 
			'id_pt', 
			'id_tbintegrasi', 
			'id_daftarproduk', 
			'desc_perusahaan', 
			'desc_produk', 
			'idibs_produk', 
			'id_kodeintegrasiibs', 
			'deskripsi_kodeintegrasi', 
			'id_tabelintegrasi'
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
			sequelize.literal("id_produk LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("id_tbintegrasi LIKE :search"), 
			sequelize.literal("id_daftarproduk LIKE :search"), 
			sequelize.literal("desc_perusahaan LIKE :search"), 
			sequelize.literal("desc_produk LIKE :search"), 
			sequelize.literal("idibs_produk LIKE :search"), 
			sequelize.literal("id_kodeintegrasiibs LIKE :search"), 
			sequelize.literal("deskripsi_kodeintegrasi LIKE :search"), 
			sequelize.literal("id_tabelintegrasi LIKE :search"),
		];
	}

	
	
}
module.exports = View_Produk_Perbpr;
