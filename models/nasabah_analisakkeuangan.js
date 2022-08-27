
const BaseModel = require("./basemodel");
class Nasabah_Analisakkeuangan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				pend_tpp: {name: 'pend_tpp', type:Sequelize.INTEGER},
				pend_tpp_bln: {name: 'pend_tpp_bln', type:Sequelize.INTEGER},
				jangkawaktu_bln: {name: 'jangkawaktu_bln', type:Sequelize.INTEGER},
				perc_plafond: {name: 'perc_plafond', type:Sequelize.INTEGER},
				sukubunga_bln: {name: 'sukubunga_bln', type:Sequelize.STRING},
				maksimum_plafond: {name: 'maksimum_plafond', type:Sequelize.INTEGER},
				maksimal_plafonddiusulkan: {name: 'maksimal_plafonddiusulkan', type:Sequelize.INTEGER},
				jmangsuran_pbln: {name: 'jmangsuran_pbln', type:Sequelize.INTEGER},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				percprovisi: {name: 'percprovisi', type:Sequelize.FLOAT},
				nomprovisi: {name: 'nomprovisi', type:Sequelize.INTEGER},
				asuransi: {name: 'asuransi', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_analisakkeuangan",
				modelName: "nasabah_analisakkeuangan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'pend_tpp', 
			'pend_tpp_bln', 
			'jangkawaktu_bln', 
			'perc_plafond', 
			'sukubunga_bln', 
			'maksimum_plafond', 
			'maksimal_plafonddiusulkan', 
			'jmangsuran_pbln', 
			'id_basepengajuan', 
			'percprovisi', 
			'nomprovisi', 
			'asuransi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'pend_tpp', 
			'pend_tpp_bln', 
			'jangkawaktu_bln', 
			'perc_plafond', 
			'sukubunga_bln', 
			'maksimum_plafond', 
			'maksimal_plafonddiusulkan', 
			'jmangsuran_pbln', 
			'id_basepengajuan', 
			'percprovisi', 
			'nomprovisi', 
			'asuransi'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'pend_tpp', 
			'pend_tpp_bln', 
			'jangkawaktu_bln', 
			'perc_plafond', 
			'sukubunga_bln', 
			'maksimum_plafond', 
			'maksimal_plafonddiusulkan', 
			'jmangsuran_pbln', 
			'id_basepengajuan', 
			'percprovisi', 
			'nomprovisi', 
			'asuransi'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'pend_tpp', 
			'pend_tpp_bln', 
			'jangkawaktu_bln', 
			'perc_plafond', 
			'sukubunga_bln', 
			'maksimum_plafond', 
			'maksimal_plafonddiusulkan', 
			'jmangsuran_pbln', 
			'id_basepengajuan', 
			'percprovisi', 
			'nomprovisi', 
			'asuransi'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'pend_tpp', 
			'pend_tpp_bln', 
			'jangkawaktu_bln', 
			'perc_plafond', 
			'sukubunga_bln', 
			'maksimum_plafond', 
			'maksimal_plafonddiusulkan', 
			'jmangsuran_pbln', 
			'id_basepengajuan', 
			'percprovisi', 
			'nomprovisi', 
			'asuransi'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("pend_tpp LIKE :search"), 
			sequelize.literal("pend_tpp_bln LIKE :search"), 
			sequelize.literal("jangkawaktu_bln LIKE :search"), 
			sequelize.literal("perc_plafond LIKE :search"), 
			sequelize.literal("sukubunga_bln LIKE :search"), 
			sequelize.literal("maksimum_plafond LIKE :search"), 
			sequelize.literal("maksimal_plafonddiusulkan LIKE :search"), 
			sequelize.literal("jmangsuran_pbln LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("percprovisi LIKE :search"), 
			sequelize.literal("nomprovisi LIKE :search"), 
			sequelize.literal("asuransi LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Analisakkeuangan;
