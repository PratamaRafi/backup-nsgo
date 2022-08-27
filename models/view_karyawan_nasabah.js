
const BaseModel = require("./basemodel");
class View_Karyawan_Nasabah extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_karyawan: { type: Sequelize.INTEGER, primaryKey: true  },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				tgl_simpan: {name: 'tgl_simpan', type:Sequelize.DATEONLY},
				no_ktp: {name: 'no_ktp', type:Sequelize.STRING},
				nama_nasabah: {name: 'nama_nasabah', type:Sequelize.STRING},
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				id_ptkar: {name: 'id_ptkar', type:Sequelize.INTEGER},
				status_prospek: {name: 'status_prospek', type:Sequelize.STRING},
				telp: {name: 'telp', type:Sequelize.STRING},
				nm_prospek: {name: 'nm_prospek', type:Sequelize.STRING},
				id_prospek: {name: 'id_prospek', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "view_karyawan_nasabah",
				modelName: "view_karyawan_nasabah",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_karyawan', 
			'id_nasabah', 
			'tgl_simpan', 
			'no_ktp', 
			'nama_nasabah', 
			'id_jabatan', 
			'id_ptkar', 
			'status_prospek', 
			'telp', 
			'nm_prospek', 
			'id_prospek'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_karyawan', 
			'id_nasabah', 
			'tgl_simpan', 
			'no_ktp', 
			'nama_nasabah', 
			'id_jabatan', 
			'id_ptkar', 
			'status_prospek', 
			'telp', 
			'nm_prospek', 
			'id_prospek'
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
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("tgl_simpan LIKE :search"), 
			sequelize.literal("no_ktp LIKE :search"), 
			sequelize.literal("nama_nasabah LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("id_ptkar LIKE :search"), 
			sequelize.literal("status_prospek LIKE :search"), 
			sequelize.literal("telp LIKE :search"), 
			sequelize.literal("nm_prospek LIKE :search"), 
			sequelize.literal("id_prospek LIKE :search"),
		];
	}

	
	
}
module.exports = View_Karyawan_Nasabah;
