
const BaseModel = require("./basemodel");
class View_Detailnasabah extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_nasabah: { type: Sequelize.STRING, primaryKey: true  },
				nama: {name: 'nama', type:Sequelize.STRING},
				jenis_kelamin: {name: 'jenis_kelamin', type:Sequelize.STRING},
				tempat_lahir: {name: 'tempat_lahir', type:Sequelize.STRING},
				tgl_lahir: {name: 'tgl_lahir', type:Sequelize.STRING},
				usia: {name: 'usia', type:Sequelize.INTEGER},
				no_ktp: {name: 'no_ktp', type:Sequelize.STRING},
				pendidikan_terakhir: {name: 'pendidikan_terakhir', type:Sequelize.STRING},
				status_pernikahan: {name: 'status_pernikahan', type:Sequelize.STRING},
				nm_ibukandung: {name: 'nm_ibukandung', type:Sequelize.STRING},
				jm_anak_tanggungan: {name: 'jm_anak_tanggungan', type:Sequelize.STRING},
				alamat_ktp: {name: 'alamat_ktp', type:Sequelize.STRING},
				rt_rw: {name: 'rt_rw', type:Sequelize.STRING},
				desa_kelurahan: {name: 'desa_kelurahan', type:Sequelize.STRING},
				kecamatan: {name: 'kecamatan', type:Sequelize.STRING},
				kabupaten_kota: {name: 'kabupaten_kota', type:Sequelize.STRING},
				provinsi: {name: 'provinsi', type:Sequelize.STRING},
				telp: {name: 'telp', type:Sequelize.STRING},
				status_tptinggal: {name: 'status_tptinggal', type:Sequelize.STRING},
				lama_tempatirumah: {name: 'lama_tempatirumah', type:Sequelize.STRING},
				alamat_domisili: {name: 'alamat_domisili', type:Sequelize.STRING},
				rt_rw_domisili: {name: 'rt_rw_domisili', type:Sequelize.STRING},
				desa_kelurahan_domisili: {name: 'desa_kelurahan_domisili', type:Sequelize.STRING},
				kabupaten_kota_domisili: {name: 'kabupaten_kota_domisili', type:Sequelize.STRING},
				provinsi_domisili: {name: 'provinsi_domisili', type:Sequelize.STRING},
				kecamatan_domisili: {name: 'kecamatan_domisili', type:Sequelize.STRING},
				no_hp: {name: 'no_hp', type:Sequelize.STRING},
				id_pekerjaan: {name: 'id_pekerjaan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_detailnasabah",
				modelName: "view_detailnasabah",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_nasabah', 
			'nama', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'usia', 
			'no_ktp', 
			'pendidikan_terakhir', 
			'status_pernikahan', 
			'nm_ibukandung', 
			'jm_anak_tanggungan', 
			'alamat_ktp', 
			'rt_rw', 
			'desa_kelurahan', 
			'kecamatan', 
			'kabupaten_kota', 
			'provinsi', 
			'telp', 
			'status_tptinggal', 
			'lama_tempatirumah', 
			'alamat_domisili', 
			'rt_rw_domisili', 
			'desa_kelurahan_domisili', 
			'kabupaten_kota_domisili', 
			'provinsi_domisili', 
			'kecamatan_domisili', 
			'no_hp', 
			'id_pekerjaan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_nasabah', 
			'nama', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'usia', 
			'no_ktp', 
			'pendidikan_terakhir', 
			'status_pernikahan', 
			'nm_ibukandung', 
			'jm_anak_tanggungan', 
			'alamat_ktp', 
			'rt_rw', 
			'desa_kelurahan', 
			'kecamatan', 
			'kabupaten_kota', 
			'provinsi', 
			'telp', 
			'status_tptinggal', 
			'lama_tempatirumah', 
			'alamat_domisili', 
			'rt_rw_domisili', 
			'desa_kelurahan_domisili', 
			'kabupaten_kota_domisili', 
			'provinsi_domisili', 
			'kecamatan_domisili', 
			'no_hp', 
			'id_pekerjaan'
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
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("nama LIKE :search"), 
			sequelize.literal("jenis_kelamin LIKE :search"), 
			sequelize.literal("tempat_lahir LIKE :search"), 
			sequelize.literal("tgl_lahir LIKE :search"), 
			sequelize.literal("usia LIKE :search"), 
			sequelize.literal("no_ktp LIKE :search"), 
			sequelize.literal("pendidikan_terakhir LIKE :search"), 
			sequelize.literal("status_pernikahan LIKE :search"), 
			sequelize.literal("nm_ibukandung LIKE :search"), 
			sequelize.literal("jm_anak_tanggungan LIKE :search"), 
			sequelize.literal("alamat_ktp LIKE :search"), 
			sequelize.literal("rt_rw LIKE :search"), 
			sequelize.literal("desa_kelurahan LIKE :search"), 
			sequelize.literal("kecamatan LIKE :search"), 
			sequelize.literal("kabupaten_kota LIKE :search"), 
			sequelize.literal("provinsi LIKE :search"), 
			sequelize.literal("telp LIKE :search"), 
			sequelize.literal("status_tptinggal LIKE :search"), 
			sequelize.literal("lama_tempatirumah LIKE :search"), 
			sequelize.literal("alamat_domisili LIKE :search"), 
			sequelize.literal("rt_rw_domisili LIKE :search"), 
			sequelize.literal("desa_kelurahan_domisili LIKE :search"), 
			sequelize.literal("kabupaten_kota_domisili LIKE :search"), 
			sequelize.literal("provinsi_domisili LIKE :search"), 
			sequelize.literal("kecamatan_domisili LIKE :search"), 
			sequelize.literal("no_hp LIKE :search"), 
			sequelize.literal("id_pekerjaan LIKE :search"),
		];
	}

	
	
}
module.exports = View_Detailnasabah;
