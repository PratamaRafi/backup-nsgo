
const BaseModel = require("./basemodel");
class View_Userlogin extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				idkar: { type: Sequelize.INTEGER, primaryKey: true  },
				kodeibs: {name: 'kodeibs', type:Sequelize.INTEGER},
				nm_karyawan: {name: 'nm_karyawan', type:Sequelize.STRING},
				username: {name: 'username', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING},
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				deskripsi_jabatan: {name: 'deskripsi_jabatan', type:Sequelize.STRING},
				id_cabang: {name: 'id_cabang', type:Sequelize.INTEGER},
				desc_cabang: {name: 'desc_cabang', type:Sequelize.STRING},
				id_perusahaan: {name: 'id_perusahaan', type:Sequelize.INTEGER},
				desc_perusahaan: {name: 'desc_perusahaan', type:Sequelize.STRING},
				karyawan_fotoprofile: {name: 'karyawan_fotoprofile', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_userlogin",
				modelName: "view_userlogin",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'idkar', 
			'kodeibs',
			'nm_karyawan', 
			'username', 
			'password', 
			'id_jabatan', 
			'deskripsi_jabatan', 
			'id_cabang', 
			'desc_cabang', 
			'id_perusahaan', 
			'desc_perusahaan', 
			'karyawan_fotoprofile',
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'idkar', 
			'kodeibs',
			'nm_karyawan', 
			'username', 
			'password', 
			'id_jabatan', 
			'deskripsi_jabatan', 
			'id_cabang', 
			'desc_cabang', 
			'id_perusahaan', 
			'desc_perusahaan', 
			'karyawan_fotoprofile',
			'kodeibs'
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
			sequelize.literal("idkar LIKE :search"), 
			sequelize.literal("kodeibs LIKE :search"),
			sequelize.literal("nm_karyawan LIKE :search"), 
			sequelize.literal("username LIKE :search"), 
			sequelize.literal("password LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("deskripsi_jabatan LIKE :search"), 
			sequelize.literal("id_cabang LIKE :search"), 
			sequelize.literal("desc_cabang LIKE :search"), 
			sequelize.literal("id_perusahaan LIKE :search"), 
			sequelize.literal("desc_perusahaan LIKE :search"), 
			sequelize.literal("karyawan_fotoprofile LIKE :search"),
		];
	}

	
	
}
module.exports = View_Userlogin;
