
const BaseModel = require("./basemodel");
class Nasabah_Basepengajuan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.STRING, primaryKey: true , autoIncrement: true },
				id_pengajuan: {name: 'id_pengajuan', type:Sequelize.STRING},
				tg_pengajuan: {name: 'tg_pengajuan', type:Sequelize.STRING},
				step_proses: {name: 'step_proses', type:Sequelize.STRING},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				status_done: {name: 'status_done', type:Sequelize.STRING},
				idkar: {name: 'idkar', type:Sequelize.STRING},
				notepengajuan_lo: {name: 'notepengajuan_lo', type:Sequelize.STRING},
				waktu_dibuat: {name: 'waktu_dibuat', type:Sequelize.DATE},
				jenis_pengajuan: {name: 'jenis_pengajuan', type:Sequelize.STRING},
				tipe_pengajuan: {name: 'tipe_pengajuan', type:Sequelize.STRING},
				id_flowprocess: {name: 'id_flowprocess', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_basepengajuan",
				modelName: "nasabah_basepengajuan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pengajuan', 
			'tg_pengajuan', 
			'step_proses', 
			'id_nasabah', 
			'status_done', 
			'idkar', 
			'notepengajuan_lo', 
			'waktu_dibuat', 
			'jenis_pengajuan', 
			'tipe_pengajuan', 
			'id_flowprocess'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pengajuan', 
			'tg_pengajuan', 
			'step_proses', 
			'id_nasabah', 
			'status_done', 
			'idkar', 
			'notepengajuan_lo', 
			'waktu_dibuat', 
			'jenis_pengajuan', 
			'tipe_pengajuan', 
			'id_flowprocess'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pengajuan', 
			'tg_pengajuan', 
			'step_proses', 
			'id_nasabah', 
			'status_done', 
			'idkar', 
			'notepengajuan_lo', 
			'waktu_dibuat', 
			'jenis_pengajuan', 
			'tipe_pengajuan', 
			'id_flowprocess'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pengajuan', 
			'tg_pengajuan', 
			'step_proses', 
			'id_nasabah', 
			'status_done', 
			'idkar', 
			'notepengajuan_lo', 
			'waktu_dibuat', 
			'jenis_pengajuan', 
			'tipe_pengajuan', 
			'id_flowprocess'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_pengajuan', 
			'tg_pengajuan', 
			'step_proses', 
			'id_nasabah', 
			'status_done', 
			'idkar', 
			'notepengajuan_lo', 
			'waktu_dibuat', 
			'jenis_pengajuan', 
			'tipe_pengajuan', 
			'id_flowprocess'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_pengajuan LIKE :search"), 
			sequelize.literal("tg_pengajuan LIKE :search"), 
			sequelize.literal("step_proses LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("status_done LIKE :search"), 
			sequelize.literal("idkar LIKE :search"), 
			sequelize.literal("notepengajuan_lo LIKE :search"), 
			sequelize.literal("waktu_dibuat LIKE :search"), 
			sequelize.literal("jenis_pengajuan LIKE :search"), 
			sequelize.literal("tipe_pengajuan LIKE :search"), 
			sequelize.literal("id_flowprocess LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Basepengajuan;
