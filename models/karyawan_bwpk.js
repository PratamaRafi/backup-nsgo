
const BaseModel = require("./basemodel");
class Karyawan_Bwpk extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				idpt: {name: 'idpt', type:Sequelize.INTEGER},
				idcabang: {name: 'idcabang', type:Sequelize.INTEGER},
				idjab: {name: 'idjab', type:Sequelize.STRING},
				bwpk: {name: 'bwpk', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_bwpk",
				modelName: "karyawan_bwpk",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idpt', 
			'idcabang', 
			'idjab', 
			'bwpk'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idpt', 
			'idcabang', 
			'idjab', 
			'bwpk'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idpt', 
			'idcabang', 
			'idjab', 
			'bwpk'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idpt', 
			'idcabang', 
			'idjab', 
			'bwpk'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idpt', 
			'idcabang', 
			'idjab', 
			'bwpk'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("idpt LIKE :search"), 
			sequelize.literal("idcabang LIKE :search"), 
			sequelize.literal("idjab LIKE :search"), 
			sequelize.literal("bwpk LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Bwpk;
