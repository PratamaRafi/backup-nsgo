
const BaseModel = require("./basemodel");
class View_Pt_Cabang_Jabatan_Karyawan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_perusahaan: { type: Sequelize.INTEGER, primaryKey: true  },
				desc_perusahaan: {name: 'desc_perusahaan', type:Sequelize.STRING},
				id_cabang: {name: 'id_cabang', type:Sequelize.INTEGER},
				desc_cabang: {name: 'desc_cabang', type:Sequelize.STRING},
				id_karyawan: {name: 'id_karyawan', type:Sequelize.INTEGER},
				nm_karyawan: {name: 'nm_karyawan', type:Sequelize.STRING},
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				deskripsi_jabatan: {name: 'deskripsi_jabatan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_pt_cabang_jabatan_karyawan",
				modelName: "view_pt_cabang_jabatan_karyawan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_perusahaan', 
			'desc_perusahaan', 
			'id_cabang', 
			'desc_cabang', 
			'id_karyawan', 
			'nm_karyawan', 
			'id_jabatan', 
			'deskripsi_jabatan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_perusahaan', 
			'desc_perusahaan', 
			'id_cabang', 
			'desc_cabang', 
			'id_karyawan', 
			'nm_karyawan', 
			'id_jabatan', 
			'deskripsi_jabatan'
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
			sequelize.literal("id_perusahaan LIKE :search"), 
			sequelize.literal("desc_perusahaan LIKE :search"), 
			sequelize.literal("id_cabang LIKE :search"), 
			sequelize.literal("desc_cabang LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("nm_karyawan LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("deskripsi_jabatan LIKE :search"),
		];
	}

	
	
}
module.exports = View_Pt_Cabang_Jabatan_Karyawan;
