
const BaseModel = require("./basemodel");
class View_Produk_Pengajuan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_integrasi: { type: Sequelize.INTEGER, primaryKey: true  },
				id_jenisproduk: {name: 'id_jenisproduk', type:Sequelize.INTEGER},
				jangkawaktu: {name: 'jangkawaktu', type:Sequelize.INTEGER},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				jm_plafond: {name: 'jm_plafond', type:Sequelize.INTEGER},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				tujuan_kredit: {name: 'tujuan_kredit', type:Sequelize.STRING},
				deskripsi_kodeintegrasi: {name: 'deskripsi_kodeintegrasi', type:Sequelize.STRING},
				desc_produk: {name: 'desc_produk', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_produk_pengajuan",
				modelName: "view_produk_pengajuan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_integrasi', 
			'id_jenisproduk', 
			'jangkawaktu', 
			'id_basepengajuan', 
			'jm_plafond', 
			'id_nasabah', 
			'tujuan_kredit', 
			'deskripsi_kodeintegrasi', 
			'desc_produk'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_integrasi', 
			'id_jenisproduk', 
			'jangkawaktu', 
			'id_basepengajuan', 
			'jm_plafond', 
			'id_nasabah', 
			'tujuan_kredit', 
			'deskripsi_kodeintegrasi', 
			'desc_produk'
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
			sequelize.literal("id_integrasi LIKE :search"), 
			sequelize.literal("id_jenisproduk LIKE :search"), 
			sequelize.literal("jangkawaktu LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("jm_plafond LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("tujuan_kredit LIKE :search"), 
			sequelize.literal("deskripsi_kodeintegrasi LIKE :search"), 
			sequelize.literal("desc_produk LIKE :search"),
		];
	}

	
	
}
module.exports = View_Produk_Pengajuan;
