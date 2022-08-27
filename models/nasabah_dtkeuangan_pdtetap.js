
const BaseModel = require("./basemodel");
class Nasabah_Dtkeuangan_Pdtetap extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				tipe_instansi: {name: 'tipe_instansi', type:Sequelize.STRING},
				status_kantor: {name: 'status_kantor', type:Sequelize.STRING},
				nm_instansi: {name: 'nm_instansi', type:Sequelize.STRING},
				almt_instansi: {name: 'almt_instansi', type:Sequelize.STRING},
				telp_instansi: {name: 'telp_instansi', type:Sequelize.STRING},
				sisapensiun: {name: 'sisapensiun', type:Sequelize.INTEGER},
				rangeblnsertifikasi: {name: 'rangeblnsertifikasi', type:Sequelize.INTEGER},
				tg_perjanjiankerja: {name: 'tg_perjanjiankerja', type:Sequelize.DATEONLY},
				no_skpengangkatan: {name: 'no_skpengangkatan', type:Sequelize.STRING},
				tg_skpengangkatan: {name: 'tg_skpengangkatan', type:Sequelize.DATEONLY},
				no_skppangkat: {name: 'no_skppangkat', type:Sequelize.STRING},
				tg_skpangkat: {name: 'tg_skpangkat', type:Sequelize.DATEONLY},
				no_sertifikasiguru: {name: 'no_sertifikasiguru', type:Sequelize.STRING},
				tgl_serdik: {name: 'tgl_serdik', type:Sequelize.DATEONLY},
				surat_rekomendasiatasan: {name: 'surat_rekomendasiatasan', type:Sequelize.STRING},
				surat_pengantarkuasaptonggaji: {name: 'surat_pengantarkuasaptonggaji', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_dtkeuangan_pdtetap",
				modelName: "nasabah_dtkeuangan_pdtetap",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_instansi', 
			'status_kantor', 
			'nm_instansi', 
			'almt_instansi', 
			'telp_instansi', 
			'sisapensiun', 
			'rangeblnsertifikasi', 
			'tg_perjanjiankerja', 
			'no_skpengangkatan', 
			'tg_skpengangkatan', 
			'no_skppangkat', 
			'tg_skpangkat', 
			'no_sertifikasiguru', 
			'tgl_serdik', 
			'surat_rekomendasiatasan', 
			'surat_pengantarkuasaptonggaji', 
			'id_basepengajuan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_instansi', 
			'status_kantor', 
			'nm_instansi', 
			'almt_instansi', 
			'telp_instansi', 
			'sisapensiun', 
			'rangeblnsertifikasi', 
			'tg_perjanjiankerja', 
			'no_skpengangkatan', 
			'tg_skpengangkatan', 
			'no_skppangkat', 
			'tg_skpangkat', 
			'no_sertifikasiguru', 
			'tgl_serdik', 
			'surat_rekomendasiatasan', 
			'surat_pengantarkuasaptonggaji', 
			'id_basepengajuan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_instansi', 
			'status_kantor', 
			'nm_instansi', 
			'almt_instansi', 
			'telp_instansi', 
			'sisapensiun', 
			'rangeblnsertifikasi', 
			'tg_perjanjiankerja', 
			'no_skpengangkatan', 
			'tg_skpengangkatan', 
			'no_skppangkat', 
			'tg_skpangkat', 
			'no_sertifikasiguru', 
			'tgl_serdik', 
			'surat_rekomendasiatasan', 
			'surat_pengantarkuasaptonggaji', 
			'id_basepengajuan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_instansi', 
			'status_kantor', 
			'nm_instansi', 
			'almt_instansi', 
			'telp_instansi', 
			'sisapensiun', 
			'rangeblnsertifikasi', 
			'tg_perjanjiankerja', 
			'no_skpengangkatan', 
			'tg_skpengangkatan', 
			'no_skppangkat', 
			'tg_skpangkat', 
			'no_sertifikasiguru', 
			'tgl_serdik', 
			'surat_rekomendasiatasan', 
			'surat_pengantarkuasaptonggaji', 
			'id_basepengajuan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_instansi', 
			'status_kantor', 
			'nm_instansi', 
			'almt_instansi', 
			'telp_instansi', 
			'sisapensiun', 
			'rangeblnsertifikasi', 
			'tg_perjanjiankerja', 
			'no_skpengangkatan', 
			'tg_skpengangkatan', 
			'no_skppangkat', 
			'tg_skpangkat', 
			'no_sertifikasiguru', 
			'tgl_serdik', 
			'surat_rekomendasiatasan', 
			'surat_pengantarkuasaptonggaji', 
			'id_basepengajuan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("tipe_instansi LIKE :search"), 
			sequelize.literal("status_kantor LIKE :search"), 
			sequelize.literal("nm_instansi LIKE :search"), 
			sequelize.literal("almt_instansi LIKE :search"), 
			sequelize.literal("telp_instansi LIKE :search"), 
			sequelize.literal("sisapensiun LIKE :search"), 
			sequelize.literal("rangeblnsertifikasi LIKE :search"), 
			sequelize.literal("tg_perjanjiankerja LIKE :search"), 
			sequelize.literal("no_skpengangkatan LIKE :search"), 
			sequelize.literal("tg_skpengangkatan LIKE :search"), 
			sequelize.literal("no_skppangkat LIKE :search"), 
			sequelize.literal("tg_skpangkat LIKE :search"), 
			sequelize.literal("no_sertifikasiguru LIKE :search"), 
			sequelize.literal("tgl_serdik LIKE :search"), 
			sequelize.literal("surat_rekomendasiatasan LIKE :search"), 
			sequelize.literal("surat_pengantarkuasaptonggaji LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Dtkeuangan_Pdtetap;
