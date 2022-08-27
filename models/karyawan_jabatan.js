
const BaseModel = require("./basemodel");
class Karyawan_Jabatan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_jabatan: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				deskripsi_jabatan: {name: 'deskripsi_jabatan', type:Sequelize.STRING},
				prefix: {name: 'prefix', type:Sequelize.STRING},
				id_jabpm: {name: 'id_jabpm', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_jabatan",
				modelName: "karyawan_jabatan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_jabatan', 
			'deskripsi_jabatan', 
			'prefix', 
			'id_jabpm'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_jabatan', 
			'deskripsi_jabatan', 
			'prefix', 
			'id_jabpm'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id_jabatan', 
			'deskripsi_jabatan', 
			'prefix', 
			'id_jabpm'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id_jabatan', 
			'deskripsi_jabatan', 
			'prefix', 
			'id_jabpm'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id_jabatan', 
			'deskripsi_jabatan', 
			'prefix', 
			'id_jabpm'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("deskripsi_jabatan LIKE :search"), 
			sequelize.literal("prefix LIKE :search"), 
			sequelize.literal("id_jabpm LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Jabatan;
