
const BaseModel = require("./basemodel");
class Karyawan_Profile extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nm_karyawan: {name: 'nm_karyawan', type:Sequelize.STRING},
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				alamat: {name: 'alamat', type:Sequelize.STRING},
				nik: {name: 'nik', type:Sequelize.STRING},
				id_cabang: {name: 'id_cabang', type:Sequelize.INTEGER},
				kode_ibs: {name: 'kode_ibs', type:Sequelize.INTEGER},
				ttdfilename: {name: 'ttdfilename', type:Sequelize.STRING},
				statusaktiv: {name: 'statusaktiv', type:Sequelize.STRING},
				ttdbase64: {name: 'ttdbase64', type:Sequelize.STRING},
				lastupdate: {name: 'lastupdate', type:Sequelize.DATEONLY},
				foto_profile: {name: 'foto_profile', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_profile",
				modelName: "karyawan_profile",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_karyawan', 
			'id_jabatan', 
			'id_pt', 
			'alamat', 
			'nik', 
			'id_cabang', 
			'kode_ibs', 
			'ttdfilename', 
			'statusaktiv', 
			'ttdbase64', 
			'lastupdate', 
			'foto_profile'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_karyawan', 
			'id_jabatan', 
			'id_pt', 
			'alamat', 
			'nik', 
			'id_cabang', 
			'kode_ibs', 
			'ttdfilename', 
			'statusaktiv', 
			'ttdbase64', 
			'lastupdate', 
			'foto_profile'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_karyawan', 
			'id_jabatan', 
			'id_pt', 
			'alamat', 
			'nik', 
			'id_cabang', 
			'kode_ibs', 
			'ttdfilename', 
			'statusaktiv', 
			'ttdbase64', 
			'lastupdate', 
			'foto_profile'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_karyawan', 
			'id_jabatan', 
			'id_pt', 
			'alamat', 
			'nik', 
			'id_cabang', 
			'kode_ibs', 
			'ttdfilename', 
			'statusaktiv', 
			'ttdbase64', 
			'lastupdate', 
			'foto_profile'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_karyawan', 
			'id_jabatan', 
			'id_pt', 
			'alamat', 
			'nik', 
			'id_cabang', 
			'kode_ibs', 
			'ttdfilename', 
			'statusaktiv', 
			'ttdbase64', 
			'lastupdate', 
			'foto_profile'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nm_karyawan LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("alamat LIKE :search"), 
			sequelize.literal("nik LIKE :search"), 
			sequelize.literal("id_cabang LIKE :search"), 
			sequelize.literal("kode_ibs LIKE :search"), 
			sequelize.literal("ttdfilename LIKE :search"), 
			sequelize.literal("statusaktiv LIKE :search"), 
			sequelize.literal("ttdbase64 LIKE :search"), 
			sequelize.literal("lastupdate LIKE :search"), 
			sequelize.literal("foto_profile LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Profile;
