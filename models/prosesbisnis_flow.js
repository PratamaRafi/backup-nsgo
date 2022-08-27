
const BaseModel = require("./basemodel");
class Prosesbisnis_Flow extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nm_proses: {name: 'nm_proses', type:Sequelize.STRING},
				urlmenu: {name: 'urlmenu', type:Sequelize.STRING},
				start_tx: {name: 'start_tx', type:Sequelize.STRING},
				end_tx: {name: 'end_tx', type:Sequelize.STRING},
				deskripsi: {name: 'deskripsi', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "prosesbisnis_flow",
				modelName: "prosesbisnis_flow",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_proses', 
			'urlmenu', 
			'start_tx', 
			'end_tx', 
			'deskripsi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_proses', 
			'urlmenu', 
			'start_tx', 
			'end_tx', 
			'deskripsi'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_proses', 
			'urlmenu', 
			'start_tx', 
			'end_tx', 
			'deskripsi'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_proses', 
			'urlmenu', 
			'start_tx', 
			'end_tx', 
			'deskripsi'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nm_proses', 
			'urlmenu', 
			'start_tx', 
			'end_tx', 
			'deskripsi'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nm_proses LIKE :search"), 
			sequelize.literal("urlmenu LIKE :search"), 
			sequelize.literal("start_tx LIKE :search"), 
			sequelize.literal("end_tx LIKE :search"), 
			sequelize.literal("deskripsi LIKE :search"),
		];
	}

	
	
}
module.exports = Prosesbisnis_Flow;
