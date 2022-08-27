
const BaseModel = require("./basemodel");
class Nasabah_Datapengajuan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_integrasi: {name: 'id_integrasi', type:Sequelize.INTEGER},
				id_jenisproduk: {name: 'id_jenisproduk', type:Sequelize.INTEGER},
				jm_plafond: {name: 'jm_plafond', type:Sequelize.INTEGER},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				jangkawaktu: {name: 'jangkawaktu', type:Sequelize.INTEGER},
				tujuan_kredit: {name: 'tujuan_kredit', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				bwpk: {name: 'bwpk', type:Sequelize.STRING},
				satuan_waktuangsuran: {name: 'satuan_waktuangsuran', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_datapengajuan",
				modelName: "nasabah_datapengajuan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_integrasi', 
			'id_jenisproduk', 
			'jm_plafond', 
			'id_nasabah', 
			'jangkawaktu', 
			'tujuan_kredit', 
			'id_basepengajuan', 
			'bwpk', 
			'satuan_waktuangsuran'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_integrasi', 
			'id_jenisproduk', 
			'jm_plafond', 
			'id_nasabah', 
			'jangkawaktu', 
			'tujuan_kredit', 
			'id_basepengajuan', 
			'bwpk', 
			'satuan_waktuangsuran'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_integrasi', 
			'id_jenisproduk', 
			'jm_plafond', 
			'id_nasabah', 
			'jangkawaktu', 
			'tujuan_kredit', 
			'id_basepengajuan', 
			'bwpk', 
			'satuan_waktuangsuran'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_integrasi', 
			'id_jenisproduk', 
			'jm_plafond', 
			'id_nasabah', 
			'jangkawaktu', 
			'tujuan_kredit', 
			'id_basepengajuan', 
			'bwpk', 
			'satuan_waktuangsuran'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_integrasi', 
			'id_jenisproduk', 
			'jm_plafond', 
			'id_nasabah', 
			'jangkawaktu', 
			'tujuan_kredit', 
			'id_basepengajuan', 
			'bwpk', 
			'satuan_waktuangsuran'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_integrasi LIKE :search"), 
			sequelize.literal("id_jenisproduk LIKE :search"), 
			sequelize.literal("jm_plafond LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("jangkawaktu LIKE :search"), 
			sequelize.literal("tujuan_kredit LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("bwpk LIKE :search"), 
			sequelize.literal("satuan_waktuangsuran LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Datapengajuan;
