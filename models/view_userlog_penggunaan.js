
const BaseModel = require("./basemodel");
class View_Userlog_Penggunaan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				nm_karyawan: { type: Sequelize.STRING, primaryKey: true  },
				deskripsi_jabatan: {name: 'deskripsi_jabatan', type:Sequelize.STRING},
				desc_perusahaan: {name: 'desc_perusahaan', type:Sequelize.STRING},
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				id_cabang: {name: 'id_cabang', type:Sequelize.INTEGER},
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				act: {name: 'act', type:Sequelize.STRING},
				desc_cabang: {name: 'desc_cabang', type:Sequelize.STRING},
				tgl_login: {name: 'tgl_login', type:Sequelize.DATEONLY},
				timelogin: {name: 'timelogin', type:Sequelize.TIME},
				jam: {name: 'jam', type:Sequelize.INTEGER},
				status: {name: 'status', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_userlog_penggunaan",
				modelName: "view_userlog_penggunaan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'nm_karyawan', 
			'deskripsi_jabatan', 
			'desc_perusahaan', 
			'id_pt', 
			'id_cabang', 
			'id_jabatan', 
			'act', 
			'desc_cabang', 
			'tgl_login', 
			'timelogin', 
			'jam', 
			'status'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'nm_karyawan', 
			'deskripsi_jabatan', 
			'desc_perusahaan', 
			'id_pt', 
			'id_cabang', 
			'id_jabatan', 
			'act', 
			'desc_cabang', 
			'tgl_login', 
			'timelogin', 
			'jam', 
			'status'
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
			sequelize.literal("nm_karyawan LIKE :search"), 
			sequelize.literal("deskripsi_jabatan LIKE :search"), 
			sequelize.literal("desc_perusahaan LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("id_cabang LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("act LIKE :search"), 
			sequelize.literal("desc_cabang LIKE :search"), 
			sequelize.literal("tgl_login LIKE :search"), 
			sequelize.literal("timelogin LIKE :search"), 
			sequelize.literal("jam LIKE :search"), 
			sequelize.literal("status LIKE :search"),
		];
	}

	
	
}
module.exports = View_Userlog_Penggunaan;
