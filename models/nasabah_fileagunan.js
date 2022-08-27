
const BaseModel = require("./basemodel");
class Nasabah_Fileagunan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				nmfilefoto: {name: 'nmfilefoto', type:Sequelize.STRING},
				extensifoto: {name: 'extensifoto', type:Sequelize.STRING},
				desc_file: {name: 'desc_file', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_fileagunan",
				modelName: "nasabah_fileagunan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nmfilefoto', 
			'extensifoto', 
			'desc_file', 
			'id_basepengajuan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nmfilefoto', 
			'extensifoto', 
			'desc_file', 
			'id_basepengajuan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nmfilefoto', 
			'extensifoto', 
			'desc_file', 
			'id_basepengajuan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nmfilefoto', 
			'extensifoto', 
			'desc_file', 
			'id_basepengajuan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'nmfilefoto', 
			'extensifoto', 
			'desc_file', 
			'id_basepengajuan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("nmfilefoto LIKE :search"), 
			sequelize.literal("extensifoto LIKE :search"), 
			sequelize.literal("desc_file LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Fileagunan;
