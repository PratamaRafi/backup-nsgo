
const BaseModel = require("./basemodel");
class Nasabah_Surveymarketing extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				idkar: {name: 'idkar', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.STRING},
				ftodeb1: {name: 'ftodeb1', type:Sequelize.STRING},
				ftodeb2: {name: 'ftodeb2', type:Sequelize.STRING},
				ftoskolah1: {name: 'ftoskolah1', type:Sequelize.STRING},
				ftoskolah2: {name: 'ftoskolah2', type:Sequelize.STRING},
				ftorumah1: {name: 'ftorumah1', type:Sequelize.STRING},
				ftorumah2: {name: 'ftorumah2', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_surveymarketing",
				modelName: "nasabah_surveymarketing",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'ftodeb1', 
			'ftodeb2', 
			'ftoskolah1', 
			'ftoskolah2', 
			'ftorumah1', 
			'ftorumah2'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'ftodeb1', 
			'ftodeb2', 
			'ftoskolah1', 
			'ftoskolah2', 
			'ftorumah1', 
			'ftorumah2'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'ftodeb1', 
			'ftodeb2', 
			'ftoskolah1', 
			'ftoskolah2', 
			'ftorumah1', 
			'ftorumah2'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'ftodeb1', 
			'ftodeb2', 
			'ftoskolah1', 
			'ftoskolah2', 
			'ftorumah1', 
			'ftorumah2'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'ftodeb1', 
			'ftodeb2', 
			'ftoskolah1', 
			'ftoskolah2', 
			'ftorumah1', 
			'ftorumah2'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idkar LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("ftodeb1 LIKE :search"), 
			sequelize.literal("ftodeb2 LIKE :search"), 
			sequelize.literal("ftoskolah1 LIKE :search"), 
			sequelize.literal("ftoskolah2 LIKE :search"), 
			sequelize.literal("ftorumah1 LIKE :search"), 
			sequelize.literal("ftorumah2 LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Surveymarketing;
