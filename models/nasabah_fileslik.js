
const BaseModel = require("./basemodel");
class Nasabah_Fileslik extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				namafile_slik: {name: 'namafile_slik', type:Sequelize.STRING},
				extensifile_slik: {name: 'extensifile_slik', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.STRING},
				no_registrasi: {name: 'no_registrasi', type:Sequelize.STRING},
				highlight: {name: 'highlight', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_fileslik",
				modelName: "nasabah_fileslik",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'namafile_slik', 
			'extensifile_slik', 
			'idnas', 
			'no_registrasi', 
			'highlight'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'namafile_slik', 
			'extensifile_slik', 
			'idnas', 
			'no_registrasi', 
			'highlight'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'namafile_slik', 
			'extensifile_slik', 
			'idnas', 
			'no_registrasi', 
			'highlight'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'namafile_slik', 
			'extensifile_slik', 
			'idnas', 
			'no_registrasi', 
			'highlight'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'namafile_slik', 
			'extensifile_slik', 
			'idnas', 
			'no_registrasi', 
			'highlight'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("namafile_slik LIKE :search"), 
			sequelize.literal("extensifile_slik LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("no_registrasi LIKE :search"), 
			sequelize.literal("highlight LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Fileslik;
