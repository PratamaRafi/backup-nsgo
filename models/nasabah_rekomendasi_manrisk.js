
const BaseModel = require("./basemodel");
class Nasabah_Rekomendasi_Manrisk extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				rekomendasi_manrisk: {name: 'rekomendasi_manrisk', type:Sequelize.STRING},
				id_karyawan: {name: 'id_karyawan', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_rekomendasi_manrisk",
				modelName: "nasabah_rekomendasi_manrisk",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'rekomendasi_manrisk', 
			'id_karyawan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'rekomendasi_manrisk', 
			'id_karyawan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'rekomendasi_manrisk', 
			'id_karyawan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'rekomendasi_manrisk', 
			'id_karyawan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'rekomendasi_manrisk', 
			'id_karyawan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("rekomendasi_manrisk LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Rekomendasi_Manrisk;
