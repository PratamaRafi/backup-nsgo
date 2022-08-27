
const BaseModel = require("./basemodel");
class Pengajuan_Historyhapus extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.INTEGER},
				idkar_penghapus: {name: 'idkar_penghapus', type:Sequelize.INTEGER},
				nmkarhapus: {name: 'nmkarhapus', type:Sequelize.STRING},
				idkar_marketing: {name: 'idkar_marketing', type:Sequelize.INTEGER},
				nmkar_marketing: {name: 'nmkar_marketing', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.INTEGER},
				nmnas: {name: 'nmnas', type:Sequelize.STRING},
				nmproduk: {name: 'nmproduk', type:Sequelize.STRING},
				plafond: {name: 'plafond', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "pengajuan_historyhapus",
				modelName: "pengajuan_historyhapus",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar_penghapus', 
			'nmkarhapus', 
			'idkar_marketing', 
			'nmkar_marketing', 
			'idnas', 
			'nmnas', 
			'nmproduk', 
			'plafond'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar_penghapus', 
			'nmkarhapus', 
			'idkar_marketing', 
			'nmkar_marketing', 
			'idnas', 
			'nmnas', 
			'nmproduk', 
			'plafond'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar_penghapus', 
			'nmkarhapus', 
			'idkar_marketing', 
			'nmkar_marketing', 
			'idnas', 
			'nmnas', 
			'nmproduk', 
			'plafond'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar_penghapus', 
			'nmkarhapus', 
			'idkar_marketing', 
			'nmkar_marketing', 
			'idnas', 
			'nmnas', 
			'nmproduk', 
			'plafond'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar_penghapus', 
			'nmkarhapus', 
			'idkar_marketing', 
			'nmkar_marketing', 
			'idnas', 
			'nmnas', 
			'nmproduk', 
			'plafond'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idkar_penghapus LIKE :search"), 
			sequelize.literal("nmkarhapus LIKE :search"), 
			sequelize.literal("idkar_marketing LIKE :search"), 
			sequelize.literal("nmkar_marketing LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("nmnas LIKE :search"), 
			sequelize.literal("nmproduk LIKE :search"), 
			sequelize.literal("plafond LIKE :search"),
		];
	}

	
	
}
module.exports = Pengajuan_Historyhapus;
