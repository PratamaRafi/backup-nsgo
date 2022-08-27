
const BaseModel = require("./basemodel");
class Karyawan_Marketingprospek extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_karyawan: {name: 'id_karyawan', type:Sequelize.INTEGER},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				nm_prospek: {name: 'nm_prospek', type:Sequelize.STRING},
				almt_prospek: {name: 'almt_prospek', type:Sequelize.STRING},
				telp: {name: 'telp', type:Sequelize.STRING},
				pkerjaan: {name: 'pkerjaan', type:Sequelize.STRING},
				penghasilan: {name: 'penghasilan', type:Sequelize.INTEGER},
				status_prospek: {name: 'status_prospek', type:Sequelize.STRING},
				tg_prospek: {name: 'tg_prospek', type:Sequelize.DATEONLY}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_marketingprospek",
				modelName: "karyawan_marketingprospek",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'nm_prospek', 
			'almt_prospek', 
			'telp', 
			'pkerjaan', 
			'penghasilan', 
			'status_prospek', 
			'tg_prospek'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'nm_prospek', 
			'almt_prospek', 
			'telp', 
			'pkerjaan', 
			'penghasilan', 
			'status_prospek', 
			'tg_prospek'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'nm_prospek', 
			'almt_prospek', 
			'telp', 
			'pkerjaan', 
			'penghasilan', 
			'status_prospek', 
			'tg_prospek'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'nm_prospek', 
			'almt_prospek', 
			'telp', 
			'pkerjaan', 
			'penghasilan', 
			'status_prospek', 
			'tg_prospek'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_karyawan', 
			'id_nasabah', 
			'nm_prospek', 
			'almt_prospek', 
			'telp', 
			'pkerjaan', 
			'penghasilan', 
			'status_prospek', 
			'tg_prospek'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("nm_prospek LIKE :search"), 
			sequelize.literal("almt_prospek LIKE :search"), 
			sequelize.literal("telp LIKE :search"), 
			sequelize.literal("pkerjaan LIKE :search"), 
			sequelize.literal("penghasilan LIKE :search"), 
			sequelize.literal("status_prospek LIKE :search"), 
			sequelize.literal("tg_prospek LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Marketingprospek;
