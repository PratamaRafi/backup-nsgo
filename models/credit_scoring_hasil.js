
const BaseModel = require("./basemodel");
class Credit_Scoring_Hasil extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				scorefinansialrpc: {name: 'scorefinansialrpc', type:Sequelize.INTEGER},
				subtotalscore_fn: {name: 'subtotalscore_fn', type:Sequelize.INTEGER},
				skorusia: {name: 'skorusia', type:Sequelize.INTEGER},
				skorkepemilikanrmh: {name: 'skorkepemilikanrmh', type:Sequelize.INTEGER},
				skorlamamenetap: {name: 'skorlamamenetap', type:Sequelize.INTEGER},
				lamaberusaha: {name: 'lamaberusaha', type:Sequelize.INTEGER},
				totalpenilaiankondisi: {name: 'totalpenilaiankondisi', type:Sequelize.INTEGER},
				subscorepenilaiankondisi: {name: 'subscorepenilaiankondisi', type:Sequelize.INTEGER},
				tingkap_kepercayaan: {name: 'tingkap_kepercayaan', type:Sequelize.INTEGER},
				skor_riwayatdnganbank: {name: 'skor_riwayatdnganbank', type:Sequelize.INTEGER},
				perilaku_khdupan: {name: 'perilaku_khdupan', type:Sequelize.INTEGER},
				totalkarakter: {name: 'totalkarakter', type:Sequelize.INTEGER},
				subtotalskorkarakter: {name: 'subtotalskorkarakter', type:Sequelize.INTEGER},
				total_creditrisk_scoring: {name: 'total_creditrisk_scoring', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "credit_scoring_hasil",
				modelName: "credit_scoring_hasil",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'scorefinansialrpc', 
			'subtotalscore_fn', 
			'skorusia', 
			'skorkepemilikanrmh', 
			'skorlamamenetap', 
			'lamaberusaha', 
			'totalpenilaiankondisi', 
			'subscorepenilaiankondisi', 
			'tingkap_kepercayaan', 
			'skor_riwayatdnganbank', 
			'perilaku_khdupan', 
			'totalkarakter', 
			'subtotalskorkarakter', 
			'total_creditrisk_scoring'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'scorefinansialrpc', 
			'subtotalscore_fn', 
			'skorusia', 
			'skorkepemilikanrmh', 
			'skorlamamenetap', 
			'lamaberusaha', 
			'totalpenilaiankondisi', 
			'subscorepenilaiankondisi', 
			'tingkap_kepercayaan', 
			'skor_riwayatdnganbank', 
			'perilaku_khdupan', 
			'totalkarakter', 
			'subtotalskorkarakter', 
			'total_creditrisk_scoring'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'scorefinansialrpc', 
			'subtotalscore_fn', 
			'skorusia', 
			'skorkepemilikanrmh', 
			'skorlamamenetap', 
			'lamaberusaha', 
			'totalpenilaiankondisi', 
			'subscorepenilaiankondisi', 
			'tingkap_kepercayaan', 
			'skor_riwayatdnganbank', 
			'perilaku_khdupan', 
			'totalkarakter', 
			'subtotalskorkarakter', 
			'total_creditrisk_scoring'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'scorefinansialrpc', 
			'subtotalscore_fn', 
			'skorusia', 
			'skorkepemilikanrmh', 
			'skorlamamenetap', 
			'lamaberusaha', 
			'totalpenilaiankondisi', 
			'subscorepenilaiankondisi', 
			'tingkap_kepercayaan', 
			'skor_riwayatdnganbank', 
			'perilaku_khdupan', 
			'totalkarakter', 
			'subtotalskorkarakter', 
			'total_creditrisk_scoring'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'scorefinansialrpc', 
			'subtotalscore_fn', 
			'skorusia', 
			'skorkepemilikanrmh', 
			'skorlamamenetap', 
			'lamaberusaha', 
			'totalpenilaiankondisi', 
			'subscorepenilaiankondisi', 
			'tingkap_kepercayaan', 
			'skor_riwayatdnganbank', 
			'perilaku_khdupan', 
			'totalkarakter', 
			'subtotalskorkarakter', 
			'total_creditrisk_scoring'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("scorefinansialrpc LIKE :search"), 
			sequelize.literal("subtotalscore_fn LIKE :search"), 
			sequelize.literal("skorusia LIKE :search"), 
			sequelize.literal("skorkepemilikanrmh LIKE :search"), 
			sequelize.literal("skorlamamenetap LIKE :search"), 
			sequelize.literal("lamaberusaha LIKE :search"), 
			sequelize.literal("totalpenilaiankondisi LIKE :search"), 
			sequelize.literal("subscorepenilaiankondisi LIKE :search"), 
			sequelize.literal("tingkap_kepercayaan LIKE :search"), 
			sequelize.literal("skor_riwayatdnganbank LIKE :search"), 
			sequelize.literal("perilaku_khdupan LIKE :search"), 
			sequelize.literal("totalkarakter LIKE :search"), 
			sequelize.literal("subtotalskorkarakter LIKE :search"), 
			sequelize.literal("total_creditrisk_scoring LIKE :search"),
		];
	}

	
	
}
module.exports = Credit_Scoring_Hasil;
