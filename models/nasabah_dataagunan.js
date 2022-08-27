
const BaseModel = require("./basemodel");
class Nasabah_Dataagunan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				namapemilikagunan: {name: 'namapemilikagunan', type:Sequelize.STRING},
				jenisagunan: {name: 'jenisagunan', type:Sequelize.STRING},
				buktikepemilikan: {name: 'buktikepemilikan', type:Sequelize.STRING},
				keterangan_agunan: {name: 'keterangan_agunan', type:Sequelize.STRING},
				nilai_transaksi: {name: 'nilai_transaksi', type:Sequelize.INTEGER},
				hubungan_dnganbankkita: {name: 'hubungan_dnganbankkita', type:Sequelize.STRING},
				social_impact: {name: 'social_impact', type:Sequelize.STRING},
				status_prospek: {name: 'status_prospek', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				idikatan_agunan: {name: 'idikatan_agunan', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_dataagunan",
				modelName: "nasabah_dataagunan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'namapemilikagunan', 
			'jenisagunan', 
			'buktikepemilikan', 
			'keterangan_agunan', 
			'nilai_transaksi', 
			'hubungan_dnganbankkita', 
			'social_impact', 
			'status_prospek', 
			'id_basepengajuan', 
			'idikatan_agunan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'namapemilikagunan', 
			'jenisagunan', 
			'buktikepemilikan', 
			'keterangan_agunan', 
			'nilai_transaksi', 
			'hubungan_dnganbankkita', 
			'social_impact', 
			'status_prospek', 
			'id_basepengajuan', 
			'idikatan_agunan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'namapemilikagunan', 
			'jenisagunan', 
			'buktikepemilikan', 
			'keterangan_agunan', 
			'nilai_transaksi', 
			'hubungan_dnganbankkita', 
			'social_impact', 
			'status_prospek', 
			'id_basepengajuan', 
			'idikatan_agunan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'namapemilikagunan', 
			'jenisagunan', 
			'buktikepemilikan', 
			'keterangan_agunan', 
			'nilai_transaksi', 
			'hubungan_dnganbankkita', 
			'social_impact', 
			'status_prospek', 
			'id_basepengajuan', 
			'idikatan_agunan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'namapemilikagunan', 
			'jenisagunan', 
			'buktikepemilikan', 
			'keterangan_agunan', 
			'nilai_transaksi', 
			'hubungan_dnganbankkita', 
			'social_impact', 
			'status_prospek', 
			'id_basepengajuan', 
			'idikatan_agunan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("namapemilikagunan LIKE :search"), 
			sequelize.literal("jenisagunan LIKE :search"), 
			sequelize.literal("buktikepemilikan LIKE :search"), 
			sequelize.literal("keterangan_agunan LIKE :search"), 
			sequelize.literal("nilai_transaksi LIKE :search"), 
			sequelize.literal("hubungan_dnganbankkita LIKE :search"), 
			sequelize.literal("social_impact LIKE :search"), 
			sequelize.literal("status_prospek LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idikatan_agunan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Dataagunan;
