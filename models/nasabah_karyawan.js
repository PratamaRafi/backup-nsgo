
const BaseModel = require("./basemodel");
class Nasabah_Karyawan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_karyawan: {name: 'id_karyawan', type:Sequelize.INTEGER},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				tgl_simpan: {name: 'tgl_simpan', type:Sequelize.DATEONLY}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_karyawan",
				modelName: "nasabah_karyawan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tgl_simpan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tgl_simpan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tgl_simpan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tgl_simpan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tgl_simpan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("tgl_simpan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Karyawan;
