
const BaseModel = require("./basemodel");
class View_R1_Nasabah_Pengajuan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_basepengajuan: { type: Sequelize.STRING, primaryKey: true  },
				tg_pengajuan: {name: 'tg_pengajuan', type:Sequelize.STRING},
				status_done: {name: 'status_done', type:Sequelize.STRING},
				hasil_putusan: {name: 'hasil_putusan', type:Sequelize.STRING},
				tgl_putusan: {name: 'tgl_putusan', type:Sequelize.DATEONLY},
				step_proses: {name: 'step_proses', type:Sequelize.STRING},
				jenis_pengajuan: {name: 'jenis_pengajuan', type:Sequelize.STRING},
				tipe_pengajuan: {name: 'tipe_pengajuan', type:Sequelize.STRING},
				idkar_marketing: {name: 'idkar_marketing', type:Sequelize.INTEGER},
				nm_karyawan: {name: 'nm_karyawan', type:Sequelize.STRING},
				id_mb: {name: 'id_mb', type:Sequelize.INTEGER},
				id_ptkar: {name: 'id_ptkar', type:Sequelize.INTEGER},
				id_cabangkar: {name: 'id_cabangkar', type:Sequelize.INTEGER},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				nm_nasabah: {name: 'nm_nasabah', type:Sequelize.STRING},
				ktp_nasabah: {name: 'ktp_nasabah', type:Sequelize.STRING},
				nm_ibukandung: {name: 'nm_ibukandung', type:Sequelize.STRING},
				id_pekerjaan: {name: 'id_pekerjaan', type:Sequelize.STRING},
				status_pernikahan: {name: 'status_pernikahan', type:Sequelize.STRING},
				tgl_lahir: {name: 'tgl_lahir', type:Sequelize.STRING},
				noktp: {name: 'noktp', type:Sequelize.STRING},
				alamat_ktp: {name: 'alamat_ktp', type:Sequelize.STRING},
				status_prospek: {name: 'status_prospek', type:Sequelize.STRING},
				plafond: {name: 'plafond', type:Sequelize.INTEGER},
				jangkawaktu: {name: 'jangkawaktu', type:Sequelize.INTEGER},
				no_ktp: {name: 'no_ktp', type:Sequelize.STRING},
				bwpk: {name: 'bwpk', type:Sequelize.STRING},
				id_jenisproduk: {name: 'id_jenisproduk', type:Sequelize.INTEGER},
				desc_produk: {name: 'desc_produk', type:Sequelize.STRING},
				ijinprinsip_mb: {name: 'ijinprinsip_mb', type:Sequelize.INTEGER},
				ijinprinsip_kc: {name: 'ijinprinsip_kc', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "view_r1_nasabah_pengajuan",
				modelName: "view_r1_nasabah_pengajuan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_basepengajuan', 
			'tg_pengajuan', 
			'status_done', 
			'hasil_putusan', 
			'tgl_putusan', 
			'step_proses', 
			'jenis_pengajuan', 
			'tipe_pengajuan', 
			'idkar_marketing', 
			'nm_karyawan', 
			'id_mb', 
			'id_ptkar', 
			'id_cabangkar', 
			'id_nasabah', 
			'nm_nasabah', 
			'ktp_nasabah', 
			'nm_ibukandung', 
			'id_pekerjaan', 
			'status_pernikahan', 
			'tgl_lahir', 
			'noktp', 
			'alamat_ktp', 
			'status_prospek', 
			'plafond', 
			'jangkawaktu', 
			'no_ktp', 
			'bwpk', 
			'id_jenisproduk', 
			'desc_produk', 
			'ijinprinsip_mb', 
			'ijinprinsip_kc'
		];
	}

	static countPengajuan() {
		let sequelize = this.sequelize;
		return [
			sequelize.literal("idkar_marketing"),
			sequelize.literal("id_cabangkar"),
			[sequelize.fn("COUNT", sequelize.col("id_nasabah")), 'Jumlah']
		];
	}
	
	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_basepengajuan', 
			'tg_pengajuan', 
			'status_done', 
			'hasil_putusan', 
			'tgl_putusan', 
			'step_proses', 
			'jenis_pengajuan', 
			'tipe_pengajuan', 
			'idkar_marketing', 
			'nm_karyawan', 
			'id_mb', 
			'id_ptkar', 
			'id_cabangkar', 
			'id_nasabah', 
			'nm_nasabah', 
			'ktp_nasabah', 
			'nm_ibukandung', 
			'id_pekerjaan', 
			'status_pernikahan', 
			'tgl_lahir', 
			'noktp', 
			'alamat_ktp', 
			'status_prospek', 
			'plafond', 
			'jangkawaktu', 
			'no_ktp', 
			'bwpk', 
			'id_jenisproduk', 
			'desc_produk', 
			'ijinprinsip_mb', 
			'ijinprinsip_kc'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("tg_pengajuan LIKE :search"), 
			sequelize.literal("status_done LIKE :search"), 
			sequelize.literal("hasil_putusan LIKE :search"), 
			sequelize.literal("tgl_putusan LIKE :search"), 
			sequelize.literal("step_proses LIKE :search"), 
			sequelize.literal("jenis_pengajuan LIKE :search"), 
			sequelize.literal("tipe_pengajuan LIKE :search"), 
			sequelize.literal("idkar_marketing LIKE :search"), 
			sequelize.literal("nm_karyawan LIKE :search"), 
			sequelize.literal("id_mb LIKE :search"), 
			sequelize.literal("id_ptkar LIKE :search"), 
			sequelize.literal("id_cabangkar LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("nm_nasabah LIKE :search"), 
			sequelize.literal("ktp_nasabah LIKE :search"), 
			sequelize.literal("nm_ibukandung LIKE :search"), 
			sequelize.literal("id_pekerjaan LIKE :search"), 
			sequelize.literal("status_pernikahan LIKE :search"), 
			sequelize.literal("tgl_lahir LIKE :search"), 
			sequelize.literal("noktp LIKE :search"), 
			sequelize.literal("alamat_ktp LIKE :search"), 
			sequelize.literal("status_prospek LIKE :search"), 
			sequelize.literal("plafond LIKE :search"), 
			sequelize.literal("jangkawaktu LIKE :search"), 
			sequelize.literal("no_ktp LIKE :search"), 
			sequelize.literal("bwpk LIKE :search"), 
			sequelize.literal("id_jenisproduk LIKE :search"), 
			sequelize.literal("desc_produk LIKE :search"), 
			sequelize.literal("ijinprinsip_mb LIKE :search"), 
			sequelize.literal("ijinprinsip_kc LIKE :search"),
		];
	}

	
	
}
module.exports = View_R1_Nasabah_Pengajuan;
