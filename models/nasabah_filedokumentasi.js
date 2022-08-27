
const BaseModel = require("./basemodel");
class Nasabah_Filedokumentasi extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				nm_file: {name: 'nm_file', type:Sequelize.STRING},
				ext_file: {name: 'ext_file', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_filedokumentasi",
				modelName: "nasabah_filedokumentasi",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nm_file', 
			'ext_file'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nm_file', 
			'ext_file'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nm_file', 
			'ext_file'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nm_file', 
			'ext_file'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nm_file', 
			'ext_file'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("nm_file LIKE :search"), 
			sequelize.literal("ext_file LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Filedokumentasi;
