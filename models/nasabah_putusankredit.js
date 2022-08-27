
const BaseModel = require("./basemodel");
class Nasabah_Putusankredit extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				idkarpemutus: {name: 'idkarpemutus', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.STRING},
				hasilputusan: {name: 'hasilputusan', type:Sequelize.STRING},
				syaratputusan: {name: 'syaratputusan', type:Sequelize.STRING},
				noteputusan: {name: 'noteputusan', type:Sequelize.STRING},
				tgputusan: {name: 'tgputusan', type:Sequelize.DATEONLY},
				plafond: {name: 'plafond', type:Sequelize.INTEGER},
				jangkawaktu: {name: 'jangkawaktu', type:Sequelize.INTEGER},
				angsuranpokok: {name: 'angsuranpokok', type:Sequelize.INTEGER},
				percbunga: {name: 'percbunga', type:Sequelize.FLOAT},
				nombunga: {name: 'nombunga', type:Sequelize.INTEGER},
				angsuran_bln: {name: 'angsuran_bln', type:Sequelize.INTEGER},
				percprovisi: {name: 'percprovisi', type:Sequelize.FLOAT},
				nomprovisi: {name: 'nomprovisi', type:Sequelize.INTEGER},
				ijin_prinsip: {name: 'ijin_prinsip', type:Sequelize.INTEGER},
				asuransi: {name: 'asuransi', type:Sequelize.INTEGER},
				idlo: {name: 'idlo', type:Sequelize.INTEGER},
				nmlo: {name: 'nmlo', type:Sequelize.STRING},
				idmb: {name: 'idmb', type:Sequelize.INTEGER},
				nmmb: {name: 'nmmb', type:Sequelize.STRING},
				idkc: {name: 'idkc', type:Sequelize.INTEGER},
				nmkc: {name: 'nmkc', type:Sequelize.STRING},
				iddir: {name: 'iddir', type:Sequelize.INTEGER},
				nmdir: {name: 'nmdir', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_putusankredit",
				modelName: "nasabah_putusankredit",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarpemutus', 
			'idnas', 
			'hasilputusan', 
			'syaratputusan', 
			'noteputusan', 
			'tgputusan', 
			'plafond', 
			'jangkawaktu', 
			'angsuranpokok', 
			'percbunga', 
			'nombunga', 
			'angsuran_bln', 
			'percprovisi', 
			'nomprovisi', 
			'ijin_prinsip', 
			'asuransi', 
			'idlo', 
			'nmlo', 
			'idmb', 
			'nmmb', 
			'idkc', 
			'nmkc', 
			'iddir', 
			'nmdir'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarpemutus', 
			'idnas', 
			'hasilputusan', 
			'syaratputusan', 
			'noteputusan', 
			'tgputusan', 
			'plafond', 
			'jangkawaktu', 
			'angsuranpokok', 
			'percbunga', 
			'nombunga', 
			'angsuran_bln', 
			'percprovisi', 
			'nomprovisi', 
			'ijin_prinsip', 
			'asuransi', 
			'idlo', 
			'nmlo', 
			'idmb', 
			'nmmb', 
			'idkc', 
			'nmkc', 
			'iddir', 
			'nmdir'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarpemutus', 
			'idnas', 
			'hasilputusan', 
			'syaratputusan', 
			'noteputusan', 
			'tgputusan', 
			'plafond', 
			'jangkawaktu', 
			'angsuranpokok', 
			'percbunga', 
			'nombunga', 
			'angsuran_bln', 
			'percprovisi', 
			'nomprovisi', 
			'ijin_prinsip', 
			'asuransi', 
			'idlo', 
			'nmlo', 
			'idmb', 
			'nmmb', 
			'idkc', 
			'nmkc', 
			'iddir', 
			'nmdir'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarpemutus', 
			'idnas', 
			'hasilputusan', 
			'syaratputusan', 
			'noteputusan', 
			'tgputusan', 
			'plafond', 
			'jangkawaktu', 
			'angsuranpokok', 
			'percbunga', 
			'nombunga', 
			'angsuran_bln', 
			'percprovisi', 
			'nomprovisi', 
			'ijin_prinsip', 
			'asuransi', 
			'idlo', 
			'nmlo', 
			'idmb', 
			'nmmb', 
			'idkc', 
			'nmkc', 
			'iddir', 
			'nmdir'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarpemutus', 
			'idnas', 
			'hasilputusan', 
			'syaratputusan', 
			'noteputusan', 
			'tgputusan', 
			'plafond', 
			'jangkawaktu', 
			'angsuranpokok', 
			'percbunga', 
			'nombunga', 
			'angsuran_bln', 
			'percprovisi', 
			'nomprovisi', 
			'ijin_prinsip', 
			'asuransi', 
			'idlo', 
			'nmlo', 
			'idmb', 
			'nmmb', 
			'idkc', 
			'nmkc', 
			'iddir', 
			'nmdir'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idkarpemutus LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("hasilputusan LIKE :search"), 
			sequelize.literal("syaratputusan LIKE :search"), 
			sequelize.literal("noteputusan LIKE :search"), 
			sequelize.literal("tgputusan LIKE :search"), 
			sequelize.literal("plafond LIKE :search"), 
			sequelize.literal("jangkawaktu LIKE :search"), 
			sequelize.literal("angsuranpokok LIKE :search"), 
			sequelize.literal("percbunga LIKE :search"), 
			sequelize.literal("nombunga LIKE :search"), 
			sequelize.literal("angsuran_bln LIKE :search"), 
			sequelize.literal("percprovisi LIKE :search"), 
			sequelize.literal("nomprovisi LIKE :search"), 
			sequelize.literal("ijin_prinsip LIKE :search"), 
			sequelize.literal("asuransi LIKE :search"), 
			sequelize.literal("idlo LIKE :search"), 
			sequelize.literal("nmlo LIKE :search"), 
			sequelize.literal("idmb LIKE :search"), 
			sequelize.literal("nmmb LIKE :search"), 
			sequelize.literal("idkc LIKE :search"), 
			sequelize.literal("nmkc LIKE :search"), 
			sequelize.literal("iddir LIKE :search"), 
			sequelize.literal("nmdir LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Putusankredit;
