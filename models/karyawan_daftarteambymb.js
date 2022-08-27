
const BaseModel = require("./basemodel");
class Karyawan_Daftarteambymb extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_mb: {name: 'id_mb', type:Sequelize.INTEGER},
				id_petugas: {name: 'id_petugas', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_daftarteambymb",
				modelName: "karyawan_daftarteambymb",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_mb', 
			'id_petugas'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_mb', 
			'id_petugas'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_mb', 
			'id_petugas'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_mb', 
			'id_petugas'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_mb', 
			'id_petugas'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_mb LIKE :search"), 
			sequelize.literal("id_petugas LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Daftarteambymb;
