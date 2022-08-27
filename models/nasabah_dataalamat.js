
const BaseModel = require("./basemodel");
class Nasabah_Dataalamat extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				alamat_ktp: {name: 'alamat_ktp', type:Sequelize.STRING},
				rt_rw: {name: 'rt_rw', type:Sequelize.STRING},
				desa_kelurahan: {name: 'desa_kelurahan', type:Sequelize.STRING},
				kecamatan: {name: 'kecamatan', type:Sequelize.STRING},
				kabupaten_kota: {name: 'kabupaten_kota', type:Sequelize.STRING},
				provinsi: {name: 'provinsi', type:Sequelize.STRING},
				telp: {name: 'telp', type:Sequelize.STRING},
				no_hp: {name: 'no_hp', type:Sequelize.STRING},
				status_tptinggal: {name: 'status_tptinggal', type:Sequelize.STRING},
				lama_tempatirumah: {name: 'lama_tempatirumah', type:Sequelize.STRING},
				alamat_domisili: {name: 'alamat_domisili', type:Sequelize.STRING},
				rt_rw_domisili: {name: 'rt_rw_domisili', type:Sequelize.STRING},
				desa_kelurahan_domisili: {name: 'desa_kelurahan_domisili', type:Sequelize.STRING},
				kabupaten_kota_domisili: {name: 'kabupaten_kota_domisili', type:Sequelize.STRING},
				provinsi_domisili: {name: 'provinsi_domisili', type:Sequelize.STRING},
				longitude: {name: 'longitude', type:Sequelize.STRING},
				kecamatan_domisili: {name: 'kecamatan_domisili', type:Sequelize.STRING},
				latitude: {name: 'latitude', type:Sequelize.STRING},
				kodepos: {name: 'kodepos', type:Sequelize.INTEGER},
				kodeposdomisili: {name: 'kodeposdomisili', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_dataalamat",
				modelName: "nasabah_dataalamat",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'alamat_ktp', 
			'rt_rw', 
			'desa_kelurahan', 
			'kecamatan', 
			'kabupaten_kota', 
			'provinsi', 
			'telp', 
			'no_hp', 
			'status_tptinggal', 
			'lama_tempatirumah', 
			'alamat_domisili', 
			'rt_rw_domisili', 
			'desa_kelurahan_domisili', 
			'kabupaten_kota_domisili', 
			'provinsi_domisili', 
			'longitude', 
			'kecamatan_domisili', 
			'latitude', 
			'kodepos', 
			'kodeposdomisili'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'alamat_ktp', 
			'rt_rw', 
			'desa_kelurahan', 
			'kecamatan', 
			'kabupaten_kota', 
			'provinsi', 
			'telp', 
			'no_hp', 
			'status_tptinggal', 
			'lama_tempatirumah', 
			'alamat_domisili', 
			'rt_rw_domisili', 
			'desa_kelurahan_domisili', 
			'kabupaten_kota_domisili', 
			'provinsi_domisili', 
			'longitude', 
			'kecamatan_domisili', 
			'latitude', 
			'kodepos', 
			'kodeposdomisili'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'alamat_ktp', 
			'rt_rw', 
			'desa_kelurahan', 
			'kecamatan', 
			'kabupaten_kota', 
			'provinsi', 
			'telp', 
			'no_hp', 
			'status_tptinggal', 
			'lama_tempatirumah', 
			'alamat_domisili', 
			'rt_rw_domisili', 
			'desa_kelurahan_domisili', 
			'kabupaten_kota_domisili', 
			'provinsi_domisili', 
			'longitude', 
			'kecamatan_domisili', 
			'latitude', 
			'kodepos', 
			'kodeposdomisili'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'alamat_ktp', 
			'rt_rw', 
			'desa_kelurahan', 
			'kecamatan', 
			'kabupaten_kota', 
			'provinsi', 
			'telp', 
			'no_hp', 
			'status_tptinggal', 
			'lama_tempatirumah', 
			'alamat_domisili', 
			'rt_rw_domisili', 
			'desa_kelurahan_domisili', 
			'kabupaten_kota_domisili', 
			'provinsi_domisili', 
			'longitude', 
			'kecamatan_domisili', 
			'latitude', 
			'kodepos', 
			'kodeposdomisili'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_nasabah', 
			'alamat_ktp', 
			'rt_rw', 
			'desa_kelurahan', 
			'kecamatan', 
			'kabupaten_kota', 
			'provinsi', 
			'telp', 
			'no_hp', 
			'status_tptinggal', 
			'lama_tempatirumah', 
			'alamat_domisili', 
			'rt_rw_domisili', 
			'desa_kelurahan_domisili', 
			'kabupaten_kota_domisili', 
			'provinsi_domisili', 
			'longitude', 
			'kecamatan_domisili', 
			'latitude', 
			'kodepos', 
			'kodeposdomisili'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("alamat_ktp LIKE :search"), 
			sequelize.literal("rt_rw LIKE :search"), 
			sequelize.literal("desa_kelurahan LIKE :search"), 
			sequelize.literal("kecamatan LIKE :search"), 
			sequelize.literal("kabupaten_kota LIKE :search"), 
			sequelize.literal("provinsi LIKE :search"), 
			sequelize.literal("telp LIKE :search"), 
			sequelize.literal("no_hp LIKE :search"), 
			sequelize.literal("status_tptinggal LIKE :search"), 
			sequelize.literal("lama_tempatirumah LIKE :search"), 
			sequelize.literal("alamat_domisili LIKE :search"), 
			sequelize.literal("rt_rw_domisili LIKE :search"), 
			sequelize.literal("desa_kelurahan_domisili LIKE :search"), 
			sequelize.literal("kabupaten_kota_domisili LIKE :search"), 
			sequelize.literal("provinsi_domisili LIKE :search"), 
			sequelize.literal("longitude LIKE :search"), 
			sequelize.literal("kecamatan_domisili LIKE :search"), 
			sequelize.literal("latitude LIKE :search"), 
			sequelize.literal("kodepos LIKE :search"), 
			sequelize.literal("kodeposdomisili LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Dataalamat;
