
const BaseModel = require("./basemodel");
class Masterdata_Kecamatan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nmkecamatan: {name: 'nmkecamatan', type:Sequelize.STRING},
				sandi: {name: 'sandi', type:Sequelize.STRING},
				sandi_kota: {name: 'sandi_kota', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "masterdata_kecamatan",
				modelName: "masterdata_kecamatan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkecamatan', 
			'sandi', 
			'sandi_kota'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkecamatan', 
			'sandi', 
			'sandi_kota'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkecamatan', 
			'sandi', 
			'sandi_kota'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkecamatan', 
			'sandi', 
			'sandi_kota'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nmkecamatan', 
			'sandi', 
			'sandi_kota'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nmkecamatan LIKE :search"), 
			sequelize.literal("sandi LIKE :search"), 
			sequelize.literal("sandi_kota LIKE :search"),
		];
	}

	
	
}
module.exports = Masterdata_Kecamatan;
