
const BaseModel = require("./basemodel");
class Nasabah_Kelompokgln extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.STRING, primaryKey: true  },
				nm_kelompok: {name: 'nm_kelompok', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_kelompokgln",
				modelName: "nasabah_kelompokgln",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_kelompok'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_kelompok'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_kelompok'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_kelompok'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_kelompok'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nm_kelompok LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Kelompokgln;
