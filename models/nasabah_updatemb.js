
const BaseModel = require("./basemodel");
class Nasabah_Updatemb extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.STRING},
				idkarmb: {name: 'idkarmb', type:Sequelize.STRING},
				verifikasi_slik: {name: 'verifikasi_slik', type:Sequelize.INTEGER},
				catatan_slik: {name: 'catatan_slik', type:Sequelize.STRING},
				verifikasi_udhlengkap: {name: 'verifikasi_udhlengkap', type:Sequelize.STRING},
				cek_datalengkap: {name: 'cek_datalengkap', type:Sequelize.STRING},
				sudah_surveylokasi: {name: 'sudah_surveylokasi', type:Sequelize.INTEGER},
				nmfoto_dokumentasi: {name: 'nmfoto_dokumentasi', type:Sequelize.STRING},
				catatan_verifikasi: {name: 'catatan_verifikasi', type:Sequelize.STRING},
				hasil_surveymb: {name: 'hasil_surveymb', type:Sequelize.STRING},
				ijin_prinsiptx: {name: 'ijin_prinsiptx', type:Sequelize.STRING},
				status_ijinprinsip: {name: 'status_ijinprinsip', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_updatemb",
				modelName: "nasabah_updatemb",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'idkarmb', 
			'verifikasi_slik', 
			'catatan_slik', 
			'verifikasi_udhlengkap', 
			'cek_datalengkap', 
			'sudah_surveylokasi', 
			'nmfoto_dokumentasi', 
			'catatan_verifikasi', 
			'hasil_surveymb', 
			'ijin_prinsiptx', 
			'status_ijinprinsip'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'idkarmb', 
			'verifikasi_slik', 
			'catatan_slik', 
			'verifikasi_udhlengkap', 
			'cek_datalengkap', 
			'sudah_surveylokasi', 
			'nmfoto_dokumentasi', 
			'catatan_verifikasi', 
			'hasil_surveymb', 
			'ijin_prinsiptx', 
			'status_ijinprinsip'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'idkarmb', 
			'verifikasi_slik', 
			'catatan_slik', 
			'verifikasi_udhlengkap', 
			'cek_datalengkap', 
			'sudah_surveylokasi', 
			'nmfoto_dokumentasi', 
			'catatan_verifikasi', 
			'hasil_surveymb', 
			'ijin_prinsiptx', 
			'status_ijinprinsip'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'idkarmb', 
			'verifikasi_slik', 
			'catatan_slik', 
			'verifikasi_udhlengkap', 
			'cek_datalengkap', 
			'sudah_surveylokasi', 
			'nmfoto_dokumentasi', 
			'catatan_verifikasi', 
			'hasil_surveymb', 
			'ijin_prinsiptx', 
			'status_ijinprinsip'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idnas', 
			'idkarmb', 
			'verifikasi_slik', 
			'catatan_slik', 
			'verifikasi_udhlengkap', 
			'cek_datalengkap', 
			'sudah_surveylokasi', 
			'nmfoto_dokumentasi', 
			'catatan_verifikasi', 
			'hasil_surveymb', 
			'ijin_prinsiptx', 
			'status_ijinprinsip'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("idkarmb LIKE :search"), 
			sequelize.literal("verifikasi_slik LIKE :search"), 
			sequelize.literal("catatan_slik LIKE :search"), 
			sequelize.literal("verifikasi_udhlengkap LIKE :search"), 
			sequelize.literal("cek_datalengkap LIKE :search"), 
			sequelize.literal("sudah_surveylokasi LIKE :search"), 
			sequelize.literal("nmfoto_dokumentasi LIKE :search"), 
			sequelize.literal("catatan_verifikasi LIKE :search"), 
			sequelize.literal("hasil_surveymb LIKE :search"), 
			sequelize.literal("ijin_prinsiptx LIKE :search"), 
			sequelize.literal("status_ijinprinsip LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Updatemb;
