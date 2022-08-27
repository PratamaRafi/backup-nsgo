
const BaseModel = require("./basemodel");
class Masterdata_Kab_Kota extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				idprov: {name: 'idprov', type:Sequelize.INTEGER},
				nmkab_kota: {name: 'nmkab_kota', type:Sequelize.STRING},
				sandi: {name: 'sandi', type:Sequelize.STRING},
				sandi_provinsi: {name: 'sandi_provinsi', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_kab_kota",
				modelName: "masterdata_kab_kota",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idprov', 
			'nmkab_kota', 
			'sandi', 
			'sandi_provinsi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idprov', 
			'nmkab_kota', 
			'sandi', 
			'sandi_provinsi'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idprov', 
			'nmkab_kota', 
			'sandi', 
			'sandi_provinsi'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idprov', 
			'nmkab_kota', 
			'sandi', 
			'sandi_provinsi'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idprov', 
			'nmkab_kota', 
			'sandi', 
			'sandi_provinsi'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("idprov LIKE :search"), 
			sequelize.literal("nmkab_kota LIKE :search"), 
			sequelize.literal("sandi LIKE :search"), 
			sequelize.literal("sandi_provinsi LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Kab_Kota;
