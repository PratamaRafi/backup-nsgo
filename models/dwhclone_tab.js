
const BaseModel = require("./basemodel");
class Dwhclone_Tab extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				noktp: {name: 'noktp', type:Sequelize.STRING},
				nasid: {name: 'nasid', type:Sequelize.STRING},
				norek: {name: 'norek', type:Sequelize.STRING},
				kdfo: {name: 'kdfo', type:Sequelize.STRING},
				nmfo: {name: 'nmfo', type:Sequelize.STRING},
				kdcab: {name: 'kdcab', type:Sequelize.STRING},
				dscab: {name: 'dscab', type:Sequelize.STRING},
				kdbpr: {name: 'kdbpr', type:Sequelize.STRING},
				dsbpr: {name: 'dsbpr', type:Sequelize.STRING},
				nmnas: {name: 'nmnas', type:Sequelize.STRING},
				desproduk: {name: 'desproduk', type:Sequelize.STRING},
				tg_mulai: {name: 'tg_mulai', type:Sequelize.DATEONLY},
				tg_clone: {name: 'tg_clone', type:Sequelize.DATEONLY}
			}, 
			{ 
				sequelize,
				
				tableName: "DWHclone_tab",
				modelName: "DWHclone_tab",
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
			'kdfo', 
			'nmfo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tg_mulai', 
			'tg_clone'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdfo', 
			'nmfo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tg_mulai', 
			'tg_clone'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdfo', 
			'nmfo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tg_mulai', 
			'tg_clone'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdfo', 
			'nmfo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tg_mulai', 
			'tg_clone'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'noktp', 
			'nasid', 
			'norek', 
			'kdfo', 
			'nmfo', 
			'kdcab', 
			'dscab', 
			'kdbpr', 
			'dsbpr', 
			'nmnas', 
			'desproduk', 
			'tg_mulai', 
			'tg_clone'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("noktp LIKE :search"), 
			sequelize.literal("nasid LIKE :search"), 
			sequelize.literal("norek LIKE :search"), 
			sequelize.literal("kdfo LIKE :search"), 
			sequelize.literal("nmfo LIKE :search"), 
			sequelize.literal("kdcab LIKE :search"), 
			sequelize.literal("dscab LIKE :search"), 
			sequelize.literal("kdbpr LIKE :search"), 
			sequelize.literal("dsbpr LIKE :search"), 
			sequelize.literal("nmnas LIKE :search"), 
			sequelize.literal("desproduk LIKE :search"), 
			sequelize.literal("tg_mulai LIKE :search"), 
			sequelize.literal("tg_clone LIKE :search"),
		];
	}

	
	
}
module.exports = Dwhclone_Tab;
