
const BaseModel = require("./basemodel");
class Nasabah_Hubnasdgbank extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.STRING},
				hub_dnganbank: {name: 'hub_dnganbank', type:Sequelize.STRING},
				social_impapact: {name: 'social_impapact', type:Sequelize.STRING},
				status_prospek: {name: 'status_prospek', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_hubnasdgbank",
				modelName: "nasabah_hubnasdgbank",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'hub_dnganbank', 
			'social_impapact', 
			'status_prospek'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'hub_dnganbank', 
			'social_impapact', 
			'status_prospek'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'hub_dnganbank', 
			'social_impapact', 
			'status_prospek'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'hub_dnganbank', 
			'social_impapact', 
			'status_prospek'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'hub_dnganbank', 
			'social_impapact', 
			'status_prospek'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("hub_dnganbank LIKE :search"), 
			sequelize.literal("social_impapact LIKE :search"), 
			sequelize.literal("status_prospek LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Hubnasdgbank;
