
const BaseModel = require("./basemodel");
class View_Daftarkaryawan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_karyawan: { type: Sequelize.INTEGER, primaryKey: true  },
				nm_karyawan: {name: 'nm_karyawan', type:Sequelize.STRING},
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				deskripsi_jabatan: {name: 'deskripsi_jabatan', type:Sequelize.STRING},
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				id_cabang: {name: 'id_cabang', type:Sequelize.INTEGER},
				desc_perusahaan: {name: 'desc_perusahaan', type:Sequelize.STRING},
				desc_cabang: {name: 'desc_cabang', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_daftarkaryawan",
				modelName: "view_daftarkaryawan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_karyawan', 
			'nm_karyawan', 
			'id_jabatan', 
			'deskripsi_jabatan', 
			'id_pt', 
			'id_cabang', 
			'desc_perusahaan', 
			'desc_cabang'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_karyawan', 
			'nm_karyawan', 
			'id_jabatan', 
			'deskripsi_jabatan', 
			'id_pt', 
			'id_cabang', 
			'desc_perusahaan', 
			'desc_cabang'
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
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("nm_karyawan LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("deskripsi_jabatan LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("id_cabang LIKE :search"), 
			sequelize.literal("desc_perusahaan LIKE :search"), 
			sequelize.literal("desc_cabang LIKE :search"),
		];
	}

	
	
}
module.exports = View_Daftarkaryawan;
