
const BaseModel = require("./basemodel");
class Nasabah_Lkn extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				laporan: {name: 'laporan', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_lkn",
				modelName: "nasabah_lkn",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'laporan', 
			'id_basepengajuan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'laporan', 
			'id_basepengajuan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'laporan', 
			'id_basepengajuan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'laporan', 
			'id_basepengajuan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'laporan', 
			'id_basepengajuan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("laporan LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Lkn;
