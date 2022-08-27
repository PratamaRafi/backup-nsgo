
const BaseModel = require("./basemodel");
class Nasabah_Account_Verification extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true  },
				status_konfirmasi: {name: 'status_konfirmasi', type:Sequelize.INTEGER},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				tg_registrasi: {name: 'tg_registrasi', type:Sequelize.DATEONLY},
				id_perusahaan: {name: 'id_perusahaan', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_account_verification",
				modelName: "nasabah_account_verification",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_konfirmasi', 
			'id_nasabah', 
			'tg_registrasi', 
			'id_perusahaan'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_konfirmasi', 
			'id_nasabah', 
			'tg_registrasi', 
			'id_perusahaan'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_konfirmasi', 
			'id_nasabah', 
			'tg_registrasi', 
			'id_perusahaan'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_konfirmasi', 
			'id_nasabah', 
			'tg_registrasi', 
			'id_perusahaan'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'status_konfirmasi', 
			'id_nasabah', 
			'tg_registrasi', 
			'id_perusahaan'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("status_konfirmasi LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("tg_registrasi LIKE :search"), 
			sequelize.literal("id_perusahaan LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Account_Verification;
