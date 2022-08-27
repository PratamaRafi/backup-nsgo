
const BaseModel = require("./basemodel");
class Masterdata_Kelurahan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nmkelurahan: {name: 'nmkelurahan', type:Sequelize.STRING},
				sandi: {name: 'sandi', type:Sequelize.STRING},
				kodepos: {name: 'kodepos', type:Sequelize.STRING},
				sandi_kecamatan: {name: 'sandi_kecamatan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_kelurahan",
				modelName: "masterdata_kelurahan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkelurahan', 
			'sandi', 
			'kodepos', 
			'sandi_kecamatan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkelurahan', 
			'sandi', 
			'kodepos', 
			'sandi_kecamatan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkelurahan', 
			'sandi', 
			'kodepos', 
			'sandi_kecamatan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkelurahan', 
			'sandi', 
			'kodepos', 
			'sandi_kecamatan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkelurahan', 
			'sandi', 
			'kodepos', 
			'sandi_kecamatan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nmkelurahan LIKE :search"), 
			sequelize.literal("sandi LIKE :search"), 
			sequelize.literal("kodepos LIKE :search"), 
			sequelize.literal("sandi_kecamatan LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Kelurahan;
