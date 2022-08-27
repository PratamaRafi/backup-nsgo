
const BaseModel = require("./basemodel");
class Nasabah_Riwayat_Update extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_karyawan: {name: 'id_karyawan', type:Sequelize.STRING},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				tg_update: {name: 'tg_update', type:Sequelize.DATEONLY},
				time_update: {name: 'time_update', type:Sequelize.TIME},
				desc_update_proses: {name: 'desc_update_proses', type:Sequelize.STRING},
				step_proses: {name: 'step_proses', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_riwayat_update",
				modelName: "nasabah_riwayat_update",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tg_update', 
			'time_update', 
			'desc_update_proses', 
			'step_proses', 
			'id_basepengajuan', 
			'id_basepengajuan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tg_update', 
			'time_update', 
			'desc_update_proses', 
			'step_proses', 
			'id_basepengajuan', 
			'id_basepengajuan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tg_update', 
			'time_update', 
			'desc_update_proses', 
			'step_proses', 
			'id_basepengajuan', 
			'id_basepengajuan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tg_update', 
			'time_update', 
			'desc_update_proses', 
			'step_proses', 
			'id_basepengajuan', 
			'id_basepengajuan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'tg_update', 
			'time_update', 
			'desc_update_proses', 
			'step_proses', 
			'id_basepengajuan', 
			'id_basepengajuan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("tg_update LIKE :search"), 
			sequelize.literal("time_update LIKE :search"), 
			sequelize.literal("desc_update_proses LIKE :search"), 
			sequelize.literal("step_proses LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Riwayat_Update;
