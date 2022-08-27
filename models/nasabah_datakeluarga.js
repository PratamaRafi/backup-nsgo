
const BaseModel = require("./basemodel");
class Nasabah_Datakeluarga extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				status_keluarga: {name: 'status_keluarga', type:Sequelize.STRING},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				nmlengkap: {name: 'nmlengkap', type:Sequelize.STRING},
				tgl_lahir: {name: 'tgl_lahir', type:Sequelize.DATEONLY},
				jns_kelamin: {name: 'jns_kelamin', type:Sequelize.STRING},
				notelp: {name: 'notelp', type:Sequelize.STRING},
				noktp: {name: 'noktp', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_datakeluarga",
				modelName: "nasabah_datakeluarga",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_keluarga', 
			'id_nasabah', 
			'nmlengkap', 
			'tgl_lahir', 
			'jns_kelamin', 
			'notelp', 
			'noktp'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_keluarga', 
			'id_nasabah', 
			'nmlengkap', 
			'tgl_lahir', 
			'jns_kelamin', 
			'notelp', 
			'noktp'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_keluarga', 
			'id_nasabah', 
			'nmlengkap', 
			'tgl_lahir', 
			'jns_kelamin', 
			'notelp', 
			'noktp'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_keluarga', 
			'id_nasabah', 
			'nmlengkap', 
			'tgl_lahir', 
			'jns_kelamin', 
			'notelp', 
			'noktp'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_keluarga', 
			'id_nasabah', 
			'nmlengkap', 
			'tgl_lahir', 
			'jns_kelamin', 
			'notelp', 
			'noktp'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("status_keluarga LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("nmlengkap LIKE :search"), 
			sequelize.literal("tgl_lahir LIKE :search"), 
			sequelize.literal("jns_kelamin LIKE :search"), 
			sequelize.literal("notelp LIKE :search"), 
			sequelize.literal("noktp LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Datakeluarga;
