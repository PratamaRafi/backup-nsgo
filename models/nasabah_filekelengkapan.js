
const BaseModel = require("./basemodel");
class Nasabah_Filekelengkapan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				ket_file: {name: 'ket_file', type:Sequelize.STRING},
				nama_file: {name: 'nama_file', type:Sequelize.STRING},
				ext_file: {name: 'ext_file', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_filekelengkapan",
				modelName: "nasabah_filekelengkapan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'ket_file', 
			'nama_file', 
			'ext_file', 
			'id_basepengajuan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'ket_file', 
			'nama_file', 
			'ext_file', 
			'id_basepengajuan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'ket_file', 
			'nama_file', 
			'ext_file', 
			'id_basepengajuan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'ket_file', 
			'nama_file', 
			'ext_file', 
			'id_basepengajuan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'ket_file', 
			'nama_file', 
			'ext_file', 
			'id_basepengajuan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("ket_file LIKE :search"), 
			sequelize.literal("nama_file LIKE :search"), 
			sequelize.literal("ext_file LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Filekelengkapan;
