
const BaseModel = require("./basemodel");
class Masterdata_Mandatoryfield extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nmkolom: {name: 'nmkolom', type:Sequelize.STRING},
				nmtabel: {name: 'nmtabel', type:Sequelize.STRING},
				mandatory: {name: 'mandatory', type:Sequelize.INTEGER},
				nmform: {name: 'nmform', type:Sequelize.STRING},
				judulfield: {name: 'judulfield', type:Sequelize.STRING},
				idproduk: {name: 'idproduk', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_mandatoryfield",
				modelName: "masterdata_mandatoryfield",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkolom', 
			'nmtabel', 
			'mandatory', 
			'nmform', 
			'judulfield', 
			'idproduk'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkolom', 
			'nmtabel', 
			'mandatory', 
			'nmform', 
			'judulfield', 
			'idproduk'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkolom', 
			'nmtabel', 
			'mandatory', 
			'nmform', 
			'judulfield', 
			'idproduk'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkolom', 
			'nmtabel', 
			'mandatory', 
			'nmform', 
			'judulfield', 
			'idproduk'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkolom', 
			'nmtabel', 
			'mandatory', 
			'nmform', 
			'judulfield', 
			'idproduk'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nmkolom LIKE :search"), 
			sequelize.literal("nmtabel LIKE :search"), 
			sequelize.literal("mandatory LIKE :search"), 
			sequelize.literal("nmform LIKE :search"), 
			sequelize.literal("judulfield LIKE :search"), 
			sequelize.literal("idproduk LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Mandatoryfield;
