
const BaseModel = require("./basemodel");
class Dwhclone_Detailnasabah extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nasabah_id: {name: 'nasabah_id', type:Sequelize.STRING},
				nama_nasabah: {name: 'nama_nasabah', type:Sequelize.STRING},
				nama_ibu_kandung: {name: 'nama_ibu_kandung', type:Sequelize.STRING},
				alamat: {name: 'alamat', type:Sequelize.STRING},
				jenis_kelamin: {name: 'jenis_kelamin', type:Sequelize.STRING},
				tempat_lahir: {name: 'tempat_lahir', type:Sequelize.STRING},
				tgl_lahir: {name: 'tgl_lahir', type:Sequelize.DATEONLY},
				no_id: {name: 'no_id', type:Sequelize.STRING},
				hp: {name: 'hp', type:Sequelize.STRING},
				tgl_register: {name: 'tgl_register', type:Sequelize.DATEONLY},
				nama_suami_istri: {name: 'nama_suami_istri', type:Sequelize.STRING},
				tg_lahirsuami_istri: {name: 'tg_lahirsuami_istri', type:Sequelize.DATEONLY},
				kabupaten_lahir: {name: 'kabupaten_lahir', type:Sequelize.STRING},
				noktp_pasangan: {name: 'noktp_pasangan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "DWHclone_detailnasabah",
				modelName: "DWHclone_detailnasabah",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nasabah_id', 
			'nama_nasabah', 
			'nama_ibu_kandung', 
			'alamat', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'no_id', 
			'hp', 
			'tgl_register', 
			'nama_suami_istri', 
			'tg_lahirsuami_istri', 
			'kabupaten_lahir', 
			'noktp_pasangan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nasabah_id', 
			'nama_nasabah', 
			'nama_ibu_kandung', 
			'alamat', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'no_id', 
			'hp', 
			'tgl_register', 
			'nama_suami_istri', 
			'tg_lahirsuami_istri', 
			'kabupaten_lahir', 
			'noktp_pasangan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nasabah_id', 
			'nama_nasabah', 
			'nama_ibu_kandung', 
			'alamat', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'no_id', 
			'hp', 
			'tgl_register', 
			'nama_suami_istri', 
			'tg_lahirsuami_istri', 
			'kabupaten_lahir', 
			'noktp_pasangan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nasabah_id', 
			'nama_nasabah', 
			'nama_ibu_kandung', 
			'alamat', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'no_id', 
			'hp', 
			'tgl_register', 
			'nama_suami_istri', 
			'tg_lahirsuami_istri', 
			'kabupaten_lahir', 
			'noktp_pasangan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nasabah_id', 
			'nama_nasabah', 
			'nama_ibu_kandung', 
			'alamat', 
			'jenis_kelamin', 
			'tempat_lahir', 
			'tgl_lahir', 
			'no_id', 
			'hp', 
			'tgl_register', 
			'nama_suami_istri', 
			'tg_lahirsuami_istri', 
			'kabupaten_lahir', 
			'noktp_pasangan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("nasabah_id LIKE :search"), 
			sequelize.literal("nama_nasabah LIKE :search"), 
			sequelize.literal("nama_ibu_kandung LIKE :search"), 
			sequelize.literal("alamat LIKE :search"), 
			sequelize.literal("jenis_kelamin LIKE :search"), 
			sequelize.literal("tempat_lahir LIKE :search"), 
			sequelize.literal("tgl_lahir LIKE :search"), 
			sequelize.literal("no_id LIKE :search"), 
			sequelize.literal("hp LIKE :search"), 
			sequelize.literal("tgl_register LIKE :search"), 
			sequelize.literal("nama_suami_istri LIKE :search"), 
			sequelize.literal("tg_lahirsuami_istri LIKE :search"), 
			sequelize.literal("kabupaten_lahir LIKE :search"), 
			sequelize.literal("noktp_pasangan LIKE :search"),
		];
	}

	
	
}
module.exports = Dwhclone_Detailnasabah;
