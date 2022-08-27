
const BaseModel = require("./basemodel");
class Karyawan_Datatarget extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_karyawan: {name: 'id_karyawan', type:Sequelize.INTEGER},
				pendapatan_bunga: {name: 'pendapatan_bunga', type:Sequelize.INTEGER},
				perc_otp: {name: 'perc_otp', type:Sequelize.INTEGER},
				growth_kyd: {name: 'growth_kyd', type:Sequelize.INTEGER},
				noa_nonotp: {name: 'noa_nonotp', type:Sequelize.INTEGER},
				npl: {name: 'npl', type:Sequelize.INTEGER},
				growth_noa: {name: 'growth_noa', type:Sequelize.INTEGER},
				tg_update: {name: 'tg_update', type:Sequelize.DATE}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_datatarget",
				modelName: "karyawan_datatarget",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'pendapatan_bunga', 
			'perc_otp', 
			'growth_kyd', 
			'noa_nonotp', 
			'npl', 
			'growth_noa', 
			'tg_update'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'pendapatan_bunga', 
			'perc_otp', 
			'growth_kyd', 
			'noa_nonotp', 
			'npl', 
			'growth_noa', 
			'tg_update'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'pendapatan_bunga', 
			'perc_otp', 
			'growth_kyd', 
			'noa_nonotp', 
			'npl', 
			'growth_noa', 
			'tg_update'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'pendapatan_bunga', 
			'perc_otp', 
			'growth_kyd', 
			'noa_nonotp', 
			'npl', 
			'growth_noa', 
			'tg_update'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'pendapatan_bunga', 
			'perc_otp', 
			'growth_kyd', 
			'noa_nonotp', 
			'npl', 
			'growth_noa', 
			'tg_update'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("pendapatan_bunga LIKE :search"), 
			sequelize.literal("perc_otp LIKE :search"), 
			sequelize.literal("growth_kyd LIKE :search"), 
			sequelize.literal("noa_nonotp LIKE :search"), 
			sequelize.literal("npl LIKE :search"), 
			sequelize.literal("growth_noa LIKE :search"), 
			sequelize.literal("tg_update LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Datatarget;
