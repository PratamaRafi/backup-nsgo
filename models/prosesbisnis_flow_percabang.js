
const BaseModel = require("./basemodel");
class Prosesbisnis_Flow_Percabang extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				tipe_pengajuan: {name: 'tipe_pengajuan', type:Sequelize.STRING},
				bwpk: {name: 'bwpk', type:Sequelize.STRING},
				idflow: {name: 'idflow', type:Sequelize.INTEGER},
				idbpr: {name: 'idbpr', type:Sequelize.INTEGER},
				idcb: {name: 'idcb', type:Sequelize.INTEGER},
				urutan: {name: 'urutan', type:Sequelize.INTEGER},
				idproduk: {name: 'idproduk', type:Sequelize.INTEGER},
				masterlevel_pemutus: {name: 'masterlevel_pemutus', type:Sequelize.INTEGER},
				desc_flow: {name: 'desc_flow', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "prosesbisnis_flow_percabang",
				modelName: "prosesbisnis_flow_percabang",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'tipe_pengajuan', 
			'bwpk', 
			'idflow', 
			'idbpr', 
			'idcb', 
			'urutan', 
			'idproduk', 
			'masterlevel_pemutus', 
			'desc_flow'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'tipe_pengajuan', 
			'bwpk', 
			'idflow', 
			'idbpr', 
			'idcb', 
			'urutan', 
			'idproduk', 
			'masterlevel_pemutus', 
			'desc_flow'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'tipe_pengajuan', 
			'bwpk', 
			'idflow', 
			'idbpr', 
			'idcb', 
			'urutan', 
			'idproduk', 
			'masterlevel_pemutus', 
			'desc_flow'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'tipe_pengajuan', 
			'bwpk', 
			'idflow', 
			'idbpr', 
			'idcb', 
			'urutan', 
			'idproduk', 
			'masterlevel_pemutus', 
			'desc_flow'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'tipe_pengajuan', 
			'bwpk', 
			'idflow', 
			'idbpr', 
			'idcb', 
			'urutan', 
			'idproduk', 
			'masterlevel_pemutus', 
			'desc_flow'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("tipe_pengajuan LIKE :search"), 
			sequelize.literal("bwpk LIKE :search"), 
			sequelize.literal("idflow LIKE :search"), 
			sequelize.literal("idbpr LIKE :search"), 
			sequelize.literal("idcb LIKE :search"), 
			sequelize.literal("urutan LIKE :search"), 
			sequelize.literal("idproduk LIKE :search"), 
			sequelize.literal("masterlevel_pemutus LIKE :search"), 
			sequelize.literal("desc_flow LIKE :search"),
		];
	}

	
	
}
module.exports = Prosesbisnis_Flow_Percabang;
