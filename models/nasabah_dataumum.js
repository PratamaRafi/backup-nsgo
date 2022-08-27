
const BaseModel = require("./basemodel");
class Nasabah_Dataumum extends BaseModel {
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
				status_berlaku_ktp: {name: 'status_berlaku_ktp', type:Sequelize.INTEGER},
				tg_berlaku_ktp: {name: 'tg_berlaku_ktp', type:Sequelize.STRING},
				pendidikan_terakhir: {name: 'pendidikan_terakhir', type:Sequelize.STRING},
				status_pernikahan: {name: 'status_pernikahan', type:Sequelize.STRING},
				nm_ibukandung: {name: 'nm_ibukandung', type:Sequelize.STRING},
				jm_anak_tanggungan: {name: 'jm_anak_tanggungan', type:Sequelize.STRING},
				tipe_kredit: {name: 'tipe_kredit', type:Sequelize.STRING},
				namafile_fotoktp: {name: 'namafile_fotoktp', type:Sequelize.STRING},
				extensiimg_fotoktp: {name: 'extensiimg_fotoktp', type:Sequelize.STRING},
				id_perusahaan: {name: 'id_perusahaan', type:Sequelize.INTEGER},
				email: {name: 'email', type:Sequelize.STRING},
				no_hp: {name: 'no_hp', type:Sequelize.STRING},
				nama_panggilan: {name: 'nama_panggilan', type:Sequelize.STRING},
				namafile_fotokk: {name: 'namafile_fotokk', type:Sequelize.STRING},
				extensiimg_fotokk: {name: 'extensiimg_fotokk', type:Sequelize.STRING},
				namafile_ftopasangan: {name: 'namafile_ftopasangan', type:Sequelize.STRING},
				extensiimg_ftopasangan: {name: 'extensiimg_ftopasangan', type:Sequelize.STRING},
				id_pekerjaan: {name: 'id_pekerjaan', type:Sequelize.STRING},
				namafile_fotottdnas: {name: 'namafile_fotottdnas', type:Sequelize.STRING},
				idagama: {name: 'idagama', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_dataumum",
				modelName: "nasabah_dataumum",
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
			'status_berlaku_ktp', 
			'tg_berlaku_ktp', 
			'pendidikan_terakhir', 
			'status_pernikahan', 
			'nm_ibukandung', 
			'jm_anak_tanggungan', 
			'tipe_kredit', 
			'namafile_fotoktp', 
			'extensiimg_fotoktp', 
			'id_perusahaan', 
			'email', 
			'no_hp', 
			'nama_panggilan', 
			'namafile_fotokk', 
			'extensiimg_fotokk', 
			'namafile_ftopasangan', 
			'extensiimg_ftopasangan', 
			'id_pekerjaan', 
			'namafile_fotottdnas', 
			'idagama'
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
			'status_berlaku_ktp', 
			'tg_berlaku_ktp', 
			'pendidikan_terakhir', 
			'status_pernikahan', 
			'nm_ibukandung', 
			'jm_anak_tanggungan', 
			'tipe_kredit', 
			'namafile_fotoktp', 
			'extensiimg_fotoktp', 
			'id_perusahaan', 
			'email', 
			'no_hp', 
			'nama_panggilan', 
			'namafile_fotokk', 
			'extensiimg_fotokk', 
			'namafile_ftopasangan', 
			'extensiimg_ftopasangan', 
			'id_pekerjaan', 
			'namafile_fotottdnas', 
			'idagama'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id_nasabah', 
			'nama', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'usia', 
			'no_ktp', 
			'status_berlaku_ktp', 
			'tg_berlaku_ktp', 
			'pendidikan_terakhir', 
			'status_pernikahan', 
			'nm_ibukandung', 
			'jm_anak_tanggungan', 
			'tipe_kredit', 
			'namafile_fotoktp', 
			'extensiimg_fotoktp', 
			'id_perusahaan', 
			'email', 
			'no_hp', 
			'nama_panggilan', 
			'namafile_fotokk', 
			'extensiimg_fotokk', 
			'namafile_ftopasangan', 
			'extensiimg_ftopasangan', 
			'id_pekerjaan', 
			'namafile_fotottdnas', 
			'idagama'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id_nasabah', 
			'nama', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'usia', 
			'no_ktp', 
			'status_berlaku_ktp', 
			'tg_berlaku_ktp', 
			'pendidikan_terakhir', 
			'status_pernikahan', 
			'nm_ibukandung', 
			'jm_anak_tanggungan', 
			'tipe_kredit', 
			'namafile_fotoktp', 
			'extensiimg_fotoktp', 
			'id_perusahaan', 
			'email', 
			'no_hp', 
			'nama_panggilan', 
			'namafile_fotokk', 
			'extensiimg_fotokk', 
			'namafile_ftopasangan', 
			'extensiimg_ftopasangan', 
			'id_pekerjaan', 
			'namafile_fotottdnas', 
			'idagama'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id_nasabah', 
			'nama', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'usia', 
			'no_ktp', 
			'status_berlaku_ktp', 
			'tg_berlaku_ktp', 
			'pendidikan_terakhir', 
			'status_pernikahan', 
			'nm_ibukandung', 
			'jm_anak_tanggungan', 
			'tipe_kredit', 
			'namafile_fotoktp', 
			'extensiimg_fotoktp', 
			'id_perusahaan', 
			'email', 
			'no_hp', 
			'nama_panggilan', 
			'namafile_fotokk', 
			'extensiimg_fotokk', 
			'namafile_ftopasangan', 
			'extensiimg_ftopasangan', 
			'id_pekerjaan', 
			'namafile_fotottdnas', 
			'idagama'
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
			sequelize.literal("status_berlaku_ktp LIKE :search"), 
			sequelize.literal("tg_berlaku_ktp LIKE :search"), 
			sequelize.literal("pendidikan_terakhir LIKE :search"), 
			sequelize.literal("status_pernikahan LIKE :search"), 
			sequelize.literal("nm_ibukandung LIKE :search"), 
			sequelize.literal("jm_anak_tanggungan LIKE :search"), 
			sequelize.literal("tipe_kredit LIKE :search"), 
			sequelize.literal("namafile_fotoktp LIKE :search"), 
			sequelize.literal("extensiimg_fotoktp LIKE :search"), 
			sequelize.literal("id_perusahaan LIKE :search"), 
			sequelize.literal("email LIKE :search"), 
			sequelize.literal("no_hp LIKE :search"), 
			sequelize.literal("nama_panggilan LIKE :search"), 
			sequelize.literal("namafile_fotokk LIKE :search"), 
			sequelize.literal("extensiimg_fotokk LIKE :search"), 
			sequelize.literal("namafile_ftopasangan LIKE :search"), 
			sequelize.literal("extensiimg_ftopasangan LIKE :search"), 
			sequelize.literal("id_pekerjaan LIKE :search"), 
			sequelize.literal("namafile_fotottdnas LIKE :search"), 
			sequelize.literal("idagama LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Dataumum;
