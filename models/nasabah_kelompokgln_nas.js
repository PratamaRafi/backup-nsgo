
const BaseModel = require("./basemodel");
class Nasabah_Kelompokgln_Nas extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_group: {name: 'id_group', type:Sequelize.STRING},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_kelompokgln_nas",
				modelName: "nasabah_kelompokgln_nas",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_group', 
			'id_nasabah'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_group', 
			'id_nasabah'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_group', 
			'id_nasabah'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_group', 
			'id_nasabah'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_group', 
			'id_nasabah'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_group LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Kelompokgln_Nas;
