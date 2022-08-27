
const BaseModel = require("./basemodel");
class Karyawan_Penggunaan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				idkar: {name: 'idkar', type:Sequelize.INTEGER},
				tgl_login: {name: 'tgl_login', type:Sequelize.DATEONLY},
				timelogin: {name: 'timelogin', type:Sequelize.TIME},
				jam: {name: 'jam', type:Sequelize.INTEGER},
				status: {name: 'status', type:Sequelize.STRING},
				act: {name: 'act', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_penggunaan",
				modelName: "karyawan_penggunaan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idkar', 
			'tgl_login', 
			'timelogin', 
			'jam', 
			'status', 
			'act'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idkar', 
			'tgl_login', 
			'timelogin', 
			'jam', 
			'status', 
			'act'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idkar', 
			'tgl_login', 
			'timelogin', 
			'jam', 
			'status', 
			'act'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idkar', 
			'tgl_login', 
			'timelogin', 
			'jam', 
			'status', 
			'act'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idkar', 
			'tgl_login', 
			'timelogin', 
			'jam', 
			'status', 
			'act'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("idkar LIKE :search"), 
			sequelize.literal("tgl_login LIKE :search"), 
			sequelize.literal("timelogin LIKE :search"), 
			sequelize.literal("jam LIKE :search"), 
			sequelize.literal("status LIKE :search"), 
			sequelize.literal("act LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Penggunaan;
