
const BaseModel = require("./basemodel");
class Karyawan_Perusahaan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_perusahaan: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				desc_perusahaan: {name: 'desc_perusahaan', type:Sequelize.STRING},
				prefix: {name: 'prefix', type:Sequelize.STRING},
				alamat: {name: 'alamat', type:Sequelize.STRING},
				telp: {name: 'telp', type:Sequelize.STRING},
				id_ibs: {name: 'id_ibs', type:Sequelize.INTEGER},
				id_pm: {name: 'id_pm', type:Sequelize.INTEGER},
				email: {name: 'email', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_perusahaan",
				modelName: "karyawan_perusahaan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_perusahaan', 
			'desc_perusahaan', 
			'prefix', 
			'alamat', 
			'telp', 
			'id_ibs', 
			'id_pm', 
			'email'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_perusahaan', 
			'desc_perusahaan', 
			'prefix', 
			'alamat', 
			'telp', 
			'id_ibs', 
			'id_pm', 
			'email'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id_perusahaan', 
			'desc_perusahaan', 
			'prefix', 
			'alamat', 
			'telp', 
			'id_ibs', 
			'id_pm', 
			'email'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id_perusahaan', 
			'desc_perusahaan', 
			'prefix', 
			'alamat', 
			'telp', 
			'id_ibs', 
			'id_pm', 
			'email'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id_perusahaan', 
			'desc_perusahaan', 
			'prefix', 
			'alamat', 
			'telp', 
			'id_ibs', 
			'id_pm', 
			'email'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id_perusahaan LIKE :search"), 
			sequelize.literal("desc_perusahaan LIKE :search"), 
			sequelize.literal("prefix LIKE :search"), 
			sequelize.literal("alamat LIKE :search"), 
			sequelize.literal("telp LIKE :search"), 
			sequelize.literal("id_ibs LIKE :search"), 
			sequelize.literal("id_pm LIKE :search"), 
			sequelize.literal("email LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Perusahaan;
