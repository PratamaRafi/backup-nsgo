
const BaseModel = require("./basemodel");
class Nasabah_Dataslik extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				idbank: {name: 'idbank', type:Sequelize.INTEGER},
				slik_plafond: {name: 'slik_plafond', type:Sequelize.INTEGER},
				slik_bakidebet: {name: 'slik_bakidebet', type:Sequelize.INTEGER},
				jangakawaktu: {name: 'jangakawaktu', type:Sequelize.INTEGER},
				namafile_slik: {name: 'namafile_slik', type:Sequelize.STRING},
				sukubunga: {name: 'sukubunga', type:Sequelize.INTEGER},
				extensifile_slik: {name: 'extensifile_slik', type:Sequelize.STRING},
				highlight: {name: 'highlight', type:Sequelize.STRING},
				no_registrasi: {name: 'no_registrasi', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				kolekt: {name: 'kolekt', type:Sequelize.STRING},
				pernah_npl: {name: 'pernah_npl', type:Sequelize.STRING},
				namabank: {name: 'namabank', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_dataslik",
				modelName: "nasabah_dataslik",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'idbank', 
			'slik_plafond', 
			'slik_bakidebet', 
			'jangakawaktu', 
			'namafile_slik', 
			'sukubunga', 
			'extensifile_slik', 
			'highlight', 
			'no_registrasi', 
			'id_basepengajuan', 
			'kolekt', 
			'pernah_npl', 
			'namabank'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'idbank', 
			'slik_plafond', 
			'slik_bakidebet', 
			'jangakawaktu', 
			'namafile_slik', 
			'sukubunga', 
			'extensifile_slik', 
			'highlight', 
			'no_registrasi', 
			'id_basepengajuan', 
			'kolekt', 
			'pernah_npl', 
			'namabank'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'idbank', 
			'slik_plafond', 
			'slik_bakidebet', 
			'jangakawaktu', 
			'namafile_slik', 
			'sukubunga', 
			'extensifile_slik', 
			'highlight', 
			'no_registrasi', 
			'id_basepengajuan', 
			'kolekt', 
			'pernah_npl', 
			'namabank'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'idbank', 
			'slik_plafond', 
			'slik_bakidebet', 
			'jangakawaktu', 
			'namafile_slik', 
			'sukubunga', 
			'extensifile_slik', 
			'highlight', 
			'no_registrasi', 
			'id_basepengajuan', 
			'kolekt', 
			'pernah_npl', 
			'namabank'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'idbank', 
			'slik_plafond', 
			'slik_bakidebet', 
			'jangakawaktu', 
			'namafile_slik', 
			'sukubunga', 
			'extensifile_slik', 
			'highlight', 
			'no_registrasi', 
			'id_basepengajuan', 
			'kolekt', 
			'pernah_npl', 
			'namabank'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("idbank LIKE :search"), 
			sequelize.literal("slik_plafond LIKE :search"), 
			sequelize.literal("slik_bakidebet LIKE :search"), 
			sequelize.literal("jangakawaktu LIKE :search"), 
			sequelize.literal("namafile_slik LIKE :search"), 
			sequelize.literal("sukubunga LIKE :search"), 
			sequelize.literal("extensifile_slik LIKE :search"), 
			sequelize.literal("highlight LIKE :search"), 
			sequelize.literal("no_registrasi LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("kolekt LIKE :search"), 
			sequelize.literal("pernah_npl LIKE :search"), 
			sequelize.literal("namabank LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Dataslik;
