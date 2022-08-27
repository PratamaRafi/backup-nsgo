
const BaseModel = require("./basemodel");
class Nasabah_Datakeuangan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				tipe_pekerjaan: {name: 'tipe_pekerjaan', type:Sequelize.STRING},
				sektor_usaha: {name: 'sektor_usaha', type:Sequelize.STRING},
				bidang_usaha: {name: 'bidang_usaha', type:Sequelize.STRING},
				alamat_kerjaan: {name: 'alamat_kerjaan', type:Sequelize.STRING},
				telp_pekerjaan: {name: 'telp_pekerjaan', type:Sequelize.STRING},
				npwp: {name: 'npwp', type:Sequelize.STRING},
				lamakerja: {name: 'lamakerja', type:Sequelize.STRING},
				omzetperbln: {name: 'omzetperbln', type:Sequelize.STRING},
				keuntungan_perbln: {name: 'keuntungan_perbln', type:Sequelize.STRING},
				omset_penjualan: {name: 'omset_penjualan', type:Sequelize.STRING},
				hpp: {name: 'hpp', type:Sequelize.STRING},
				penghasilanainya: {name: 'penghasilanainya', type:Sequelize.STRING},
				total_labakotor: {name: 'total_labakotor', type:Sequelize.STRING},
				biaya_rt: {name: 'biaya_rt', type:Sequelize.STRING},
				pajak_retribusi: {name: 'pajak_retribusi', type:Sequelize.STRING},
				upahrt: {name: 'upahrt', type:Sequelize.STRING},
				listriktelpair: {name: 'listriktelpair', type:Sequelize.STRING},
				biayadll: {name: 'biayadll', type:Sequelize.STRING},
				total_pengeluaran: {name: 'total_pengeluaran', type:Sequelize.STRING},
				pendapatan_bersih: {name: 'pendapatan_bersih', type:Sequelize.INTEGER},
				jmlusaha: {name: 'jmlusaha', type:Sequelize.STRING},
				jmlusahadibiayai: {name: 'jmlusahadibiayai', type:Sequelize.STRING},
				jns_produk: {name: 'jns_produk', type:Sequelize.STRING},
				limitplafond: {name: 'limitplafond', type:Sequelize.STRING},
				jangkawaktu: {name: 'jangkawaktu', type:Sequelize.STRING},
				tujuankredit: {name: 'tujuankredit', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_datakeuangan",
				modelName: "nasabah_datakeuangan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_pekerjaan', 
			'sektor_usaha', 
			'bidang_usaha', 
			'alamat_kerjaan', 
			'telp_pekerjaan', 
			'npwp', 
			'lamakerja', 
			'omzetperbln', 
			'keuntungan_perbln', 
			'omset_penjualan', 
			'hpp', 
			'penghasilanainya', 
			'total_labakotor', 
			'biaya_rt', 
			'pajak_retribusi', 
			'upahrt', 
			'listriktelpair', 
			'biayadll', 
			'total_pengeluaran', 
			'pendapatan_bersih', 
			'jmlusaha', 
			'jmlusahadibiayai', 
			'jns_produk', 
			'limitplafond', 
			'jangkawaktu', 
			'tujuankredit'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_pekerjaan', 
			'sektor_usaha', 
			'bidang_usaha', 
			'alamat_kerjaan', 
			'telp_pekerjaan', 
			'npwp', 
			'lamakerja', 
			'omzetperbln', 
			'keuntungan_perbln', 
			'omset_penjualan', 
			'hpp', 
			'penghasilanainya', 
			'total_labakotor', 
			'biaya_rt', 
			'pajak_retribusi', 
			'upahrt', 
			'listriktelpair', 
			'biayadll', 
			'total_pengeluaran', 
			'pendapatan_bersih', 
			'jmlusaha', 
			'jmlusahadibiayai', 
			'jns_produk', 
			'limitplafond', 
			'jangkawaktu', 
			'tujuankredit'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_pekerjaan', 
			'sektor_usaha', 
			'bidang_usaha', 
			'alamat_kerjaan', 
			'telp_pekerjaan', 
			'npwp', 
			'lamakerja', 
			'omzetperbln', 
			'keuntungan_perbln', 
			'omset_penjualan', 
			'hpp', 
			'penghasilanainya', 
			'total_labakotor', 
			'biaya_rt', 
			'pajak_retribusi', 
			'upahrt', 
			'listriktelpair', 
			'biayadll', 
			'total_pengeluaran', 
			'pendapatan_bersih', 
			'jmlusaha', 
			'jmlusahadibiayai', 
			'jns_produk', 
			'limitplafond', 
			'jangkawaktu', 
			'tujuankredit'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_pekerjaan', 
			'sektor_usaha', 
			'bidang_usaha', 
			'alamat_kerjaan', 
			'telp_pekerjaan', 
			'npwp', 
			'lamakerja', 
			'omzetperbln', 
			'keuntungan_perbln', 
			'omset_penjualan', 
			'hpp', 
			'penghasilanainya', 
			'total_labakotor', 
			'biaya_rt', 
			'pajak_retribusi', 
			'upahrt', 
			'listriktelpair', 
			'biayadll', 
			'total_pengeluaran', 
			'pendapatan_bersih', 
			'jmlusaha', 
			'jmlusahadibiayai', 
			'jns_produk', 
			'limitplafond', 
			'jangkawaktu', 
			'tujuankredit'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'tipe_pekerjaan', 
			'sektor_usaha', 
			'bidang_usaha', 
			'alamat_kerjaan', 
			'telp_pekerjaan', 
			'npwp', 
			'lamakerja', 
			'omzetperbln', 
			'keuntungan_perbln', 
			'omset_penjualan', 
			'hpp', 
			'penghasilanainya', 
			'total_labakotor', 
			'biaya_rt', 
			'pajak_retribusi', 
			'upahrt', 
			'listriktelpair', 
			'biayadll', 
			'total_pengeluaran', 
			'pendapatan_bersih', 
			'jmlusaha', 
			'jmlusahadibiayai', 
			'jns_produk', 
			'limitplafond', 
			'jangkawaktu', 
			'tujuankredit'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("tipe_pekerjaan LIKE :search"), 
			sequelize.literal("sektor_usaha LIKE :search"), 
			sequelize.literal("bidang_usaha LIKE :search"), 
			sequelize.literal("alamat_kerjaan LIKE :search"), 
			sequelize.literal("telp_pekerjaan LIKE :search"), 
			sequelize.literal("npwp LIKE :search"), 
			sequelize.literal("lamakerja LIKE :search"), 
			sequelize.literal("omzetperbln LIKE :search"), 
			sequelize.literal("keuntungan_perbln LIKE :search"), 
			sequelize.literal("omset_penjualan LIKE :search"), 
			sequelize.literal("hpp LIKE :search"), 
			sequelize.literal("penghasilanainya LIKE :search"), 
			sequelize.literal("total_labakotor LIKE :search"), 
			sequelize.literal("biaya_rt LIKE :search"), 
			sequelize.literal("pajak_retribusi LIKE :search"), 
			sequelize.literal("upahrt LIKE :search"), 
			sequelize.literal("listriktelpair LIKE :search"), 
			sequelize.literal("biayadll LIKE :search"), 
			sequelize.literal("total_pengeluaran LIKE :search"), 
			sequelize.literal("pendapatan_bersih LIKE :search"), 
			sequelize.literal("jmlusaha LIKE :search"), 
			sequelize.literal("jmlusahadibiayai LIKE :search"), 
			sequelize.literal("jns_produk LIKE :search"), 
			sequelize.literal("limitplafond LIKE :search"), 
			sequelize.literal("jangkawaktu LIKE :search"), 
			sequelize.literal("tujuankredit LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Datakeuangan;
