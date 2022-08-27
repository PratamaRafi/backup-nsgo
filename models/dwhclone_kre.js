
const BaseModel = require("./basemodel");
class Dwhclone_Kre extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				noktp: {name: 'noktp', type:Sequelize.STRING},
				nasid: {name: 'nasid', type:Sequelize.STRING},
				norek: {name: 'norek', type:Sequelize.STRING},
				kdlo: {name: 'kdlo', type:Sequelize.STRING},
				nmlo: {name: 'nmlo', type:Sequelize.STRING},
				kdcab: {name: 'kdcab', type:Sequelize.STRING},
				dscab: {name: 'dscab', type:Sequelize.STRING},
				kdbpr: {name: 'kdbpr', type:Sequelize.STRING},
				dsbpr: {name: 'dsbpr', type:Sequelize.STRING},
				nmnas: {name: 'nmnas', type:Sequelize.STRING},
				desproduk: {name: 'desproduk', type:Sequelize.STRING},
				tgrealisasi: {name: 'tgrealisasi', type:Sequelize.DATEONLY},
				tg_clone: {name: 'tg_clone', type:Sequelize.DATEONLY},
				tgl_lunas: {name: 'tgl_lunas', type:Sequelize.DATEONLY}
			}, 
			{ 
				sequelize,
				
				tableName: "DWHclone_kre",
				modelName: "DWHclone_kre",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdlo', 
			'nmlo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tgrealisasi', 
			'tg_clone', 
			'tgl_lunas'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdlo', 
			'nmlo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tgrealisasi', 
			'tg_clone', 
			'tgl_lunas'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdlo', 
			'nmlo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tgrealisasi', 
			'tg_clone', 
			'tgl_lunas'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdlo', 
			'nmlo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tgrealisasi', 
			'tg_clone', 
			'tgl_lunas'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdlo', 
			'nmlo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tgrealisasi', 
			'tg_clone', 
			'tgl_lunas'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("noktp LIKE :search"), 
			sequelize.literal("nasid LIKE :search"), 
			sequelize.literal("norek LIKE :search"), 
			sequelize.literal("kdlo LIKE :search"), 
			sequelize.literal("nmlo LIKE :search"), 
			sequelize.literal("kdcab LIKE :search"), 
			sequelize.literal("dscab LIKE :search"), 
			sequelize.literal("kdbpr LIKE :search"), 
			sequelize.literal("dsbpr LIKE :search"), 
			sequelize.literal("nmnas LIKE :search"), 
			sequelize.literal("desproduk LIKE :search"), 
			sequelize.literal("tgrealisasi LIKE :search"), 
			sequelize.literal("tg_clone LIKE :search"), 
			sequelize.literal("tgl_lunas LIKE :search"),
		];
	}

	
	
}
module.exports = Dwhclone_Kre;
