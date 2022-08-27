
const BaseModel = require("./basemodel");
class Dwhclone_Actual_Lo extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				kode_ao: {name: 'Kode_AO', type:Sequelize.STRING},
				nama_ao: {name: 'Nama_AO', type:Sequelize.STRING},
				kyd: {name: 'KYD', type:Sequelize.STRING},
				noa: {name: 'NOA', type:Sequelize.INTEGER},
				otp_nom: {name: 'OTP_nom', type:Sequelize.INTEGER},
				otp_noa: {name: 'OTP_noa', type:Sequelize.INTEGER},
				npl_nom: {name: 'NPL_nom', type:Sequelize.INTEGER},
				npl_noa: {name: 'NPL_noa', type:Sequelize.INTEGER},
				tunggakan_pokok: {name: 'Tunggakan_Pokok', type:Sequelize.INTEGER},
				tunggakan_bunga: {name: 'Tunggakan_Bunga', type:Sequelize.INTEGER},
				pencairan: {name: 'Pencairan', type:Sequelize.INTEGER},
				noa_pencairan: {name: 'NOA_Pencairan', type:Sequelize.INTEGER},
				pokok: {name: 'POKOK', type:Sequelize.INTEGER},
				bunga_total: {name: 'BUNGA_TOTAL', type:Sequelize.INTEGER},
				bunga_accrue: {name: 'BUNGA_ACCRUE', type:Sequelize.INTEGER},
				bunga_cash: {name: 'BUNGA_CASH', type:Sequelize.INTEGER},
				noa_bunga: {name: 'NOA_Bunga', type:Sequelize.INTEGER},
				angsuran_masuk: {name: 'Angsuran_Masuk', type:Sequelize.INTEGER},
				kode_cabang: {name: 'Kode_Cabang', type:Sequelize.INTEGER},
				cabang: {name: 'Cabang', type:Sequelize.STRING},
				id_bpr: {name: 'id_bpr', type:Sequelize.INTEGER},
				bpr: {name: 'BPR', type:Sequelize.STRING},
				tanggal: {name: 'Tanggal', type:Sequelize.DATEONLY},
				tg_clone: {name: 'tg_clone', type:Sequelize.DATEONLY}
			}, 
			{ 
				sequelize,
				
				tableName: "DWHclone_actual_lo",
				modelName: "DWHclone_actual_lo",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Kode_AO AS kode_ao'), 
			sequelize.literal('Nama_AO AS nama_ao'), 
			sequelize.literal('KYD AS kyd'), 
			sequelize.literal('NOA AS noa'), 
			sequelize.literal('OTP_nom AS otp_nom'), 
			sequelize.literal('OTP_noa AS otp_noa'), 
			sequelize.literal('NPL_nom AS npl_nom'), 
			sequelize.literal('NPL_noa AS npl_noa'), 
			sequelize.literal('Tunggakan_Pokok AS tunggakan_pokok'), 
			sequelize.literal('Tunggakan_Bunga AS tunggakan_bunga'), 
			sequelize.literal('Pencairan AS pencairan'), 
			sequelize.literal('NOA_Pencairan AS noa_pencairan'), 
			sequelize.literal('POKOK AS pokok'), 
			sequelize.literal('BUNGA_TOTAL AS bunga_total'), 
			sequelize.literal('BUNGA_ACCRUE AS bunga_accrue'), 
			sequelize.literal('BUNGA_CASH AS bunga_cash'), 
			sequelize.literal('NOA_Bunga AS noa_bunga'), 
			sequelize.literal('Angsuran_Masuk AS angsuran_masuk'), 
			sequelize.literal('Kode_Cabang AS kode_cabang'), 
			sequelize.literal('Cabang AS cabang'), 
			'id_bpr', 
			sequelize.literal('BPR AS bpr'), 
			sequelize.literal('Tanggal AS tanggal'), 
			'tg_clone'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Kode_AO AS kode_ao'), 
			sequelize.literal('Nama_AO AS nama_ao'), 
			sequelize.literal('KYD AS kyd'), 
			sequelize.literal('NOA AS noa'), 
			sequelize.literal('OTP_nom AS otp_nom'), 
			sequelize.literal('OTP_noa AS otp_noa'), 
			sequelize.literal('NPL_nom AS npl_nom'), 
			sequelize.literal('NPL_noa AS npl_noa'), 
			sequelize.literal('Tunggakan_Pokok AS tunggakan_pokok'), 
			sequelize.literal('Tunggakan_Bunga AS tunggakan_bunga'), 
			sequelize.literal('Pencairan AS pencairan'), 
			sequelize.literal('NOA_Pencairan AS noa_pencairan'), 
			sequelize.literal('POKOK AS pokok'), 
			sequelize.literal('BUNGA_TOTAL AS bunga_total'), 
			sequelize.literal('BUNGA_ACCRUE AS bunga_accrue'), 
			sequelize.literal('BUNGA_CASH AS bunga_cash'), 
			sequelize.literal('NOA_Bunga AS noa_bunga'), 
			sequelize.literal('Angsuran_Masuk AS angsuran_masuk'), 
			sequelize.literal('Kode_Cabang AS kode_cabang'), 
			sequelize.literal('Cabang AS cabang'), 
			'id_bpr', 
			sequelize.literal('BPR AS bpr'), 
			sequelize.literal('Tanggal AS tanggal'), 
			'tg_clone'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Kode_AO AS kode_ao'), 
			sequelize.literal('Nama_AO AS nama_ao'), 
			sequelize.literal('KYD AS kyd'), 
			sequelize.literal('NOA AS noa'), 
			sequelize.literal('OTP_nom AS otp_nom'), 
			sequelize.literal('OTP_noa AS otp_noa'), 
			sequelize.literal('NPL_nom AS npl_nom'), 
			sequelize.literal('NPL_noa AS npl_noa'), 
			sequelize.literal('Tunggakan_Pokok AS tunggakan_pokok'), 
			sequelize.literal('Tunggakan_Bunga AS tunggakan_bunga'), 
			sequelize.literal('Pencairan AS pencairan'), 
			sequelize.literal('NOA_Pencairan AS noa_pencairan'), 
			sequelize.literal('POKOK AS pokok'), 
			sequelize.literal('BUNGA_TOTAL AS bunga_total'), 
			sequelize.literal('BUNGA_ACCRUE AS bunga_accrue'), 
			sequelize.literal('BUNGA_CASH AS bunga_cash'), 
			sequelize.literal('NOA_Bunga AS noa_bunga'), 
			sequelize.literal('Angsuran_Masuk AS angsuran_masuk'), 
			sequelize.literal('Kode_Cabang AS kode_cabang'), 
			sequelize.literal('Cabang AS cabang'), 
			'id_bpr', 
			sequelize.literal('BPR AS bpr'), 
			sequelize.literal('Tanggal AS tanggal'), 
			'tg_clone'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Kode_AO AS kode_ao'), 
			sequelize.literal('Nama_AO AS nama_ao'), 
			sequelize.literal('KYD AS kyd'), 
			sequelize.literal('NOA AS noa'), 
			sequelize.literal('OTP_nom AS otp_nom'), 
			sequelize.literal('OTP_noa AS otp_noa'), 
			sequelize.literal('NPL_nom AS npl_nom'), 
			sequelize.literal('NPL_noa AS npl_noa'), 
			sequelize.literal('Tunggakan_Pokok AS tunggakan_pokok'), 
			sequelize.literal('Tunggakan_Bunga AS tunggakan_bunga'), 
			sequelize.literal('Pencairan AS pencairan'), 
			sequelize.literal('NOA_Pencairan AS noa_pencairan'), 
			sequelize.literal('POKOK AS pokok'), 
			sequelize.literal('BUNGA_TOTAL AS bunga_total'), 
			sequelize.literal('BUNGA_ACCRUE AS bunga_accrue'), 
			sequelize.literal('BUNGA_CASH AS bunga_cash'), 
			sequelize.literal('NOA_Bunga AS noa_bunga'), 
			sequelize.literal('Angsuran_Masuk AS angsuran_masuk'), 
			sequelize.literal('Kode_Cabang AS kode_cabang'), 
			sequelize.literal('Cabang AS cabang'), 
			'id_bpr', 
			sequelize.literal('BPR AS bpr'), 
			sequelize.literal('Tanggal AS tanggal'), 
			'tg_clone'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Kode_AO AS kode_ao'), 
			sequelize.literal('Nama_AO AS nama_ao'), 
			sequelize.literal('KYD AS kyd'), 
			sequelize.literal('NOA AS noa'), 
			sequelize.literal('OTP_nom AS otp_nom'), 
			sequelize.literal('OTP_noa AS otp_noa'), 
			sequelize.literal('NPL_nom AS npl_nom'), 
			sequelize.literal('NPL_noa AS npl_noa'), 
			sequelize.literal('Tunggakan_Pokok AS tunggakan_pokok'), 
			sequelize.literal('Tunggakan_Bunga AS tunggakan_bunga'), 
			sequelize.literal('Pencairan AS pencairan'), 
			sequelize.literal('NOA_Pencairan AS noa_pencairan'), 
			sequelize.literal('POKOK AS pokok'), 
			sequelize.literal('BUNGA_TOTAL AS bunga_total'), 
			sequelize.literal('BUNGA_ACCRUE AS bunga_accrue'), 
			sequelize.literal('BUNGA_CASH AS bunga_cash'), 
			sequelize.literal('NOA_Bunga AS noa_bunga'), 
			sequelize.literal('Angsuran_Masuk AS angsuran_masuk'), 
			sequelize.literal('Kode_Cabang AS kode_cabang'), 
			sequelize.literal('Cabang AS cabang'), 
			'id_bpr', 
			sequelize.literal('BPR AS bpr'), 
			sequelize.literal('Tanggal AS tanggal'), 
			'tg_clone'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("Kode_AO LIKE :search"), 
			sequelize.literal("Nama_AO LIKE :search"), 
			sequelize.literal("KYD LIKE :search"), 
			sequelize.literal("NOA LIKE :search"), 
			sequelize.literal("OTP_nom LIKE :search"), 
			sequelize.literal("OTP_noa LIKE :search"), 
			sequelize.literal("NPL_nom LIKE :search"), 
			sequelize.literal("NPL_noa LIKE :search"), 
			sequelize.literal("Tunggakan_Pokok LIKE :search"), 
			sequelize.literal("Tunggakan_Bunga LIKE :search"), 
			sequelize.literal("Pencairan LIKE :search"), 
			sequelize.literal("NOA_Pencairan LIKE :search"), 
			sequelize.literal("POKOK LIKE :search"), 
			sequelize.literal("BUNGA_TOTAL LIKE :search"), 
			sequelize.literal("BUNGA_ACCRUE LIKE :search"), 
			sequelize.literal("BUNGA_CASH LIKE :search"), 
			sequelize.literal("NOA_Bunga LIKE :search"), 
			sequelize.literal("Angsuran_Masuk LIKE :search"), 
			sequelize.literal("Kode_Cabang LIKE :search"), 
			sequelize.literal("Cabang LIKE :search"), 
			sequelize.literal("id_bpr LIKE :search"), 
			sequelize.literal("BPR LIKE :search"), 
			sequelize.literal("Tanggal LIKE :search"), 
			sequelize.literal("tg_clone LIKE :search"),
		];
	}

	
	
}
module.exports = Dwhclone_Actual_Lo;
