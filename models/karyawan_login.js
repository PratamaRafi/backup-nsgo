
const BaseModel = require("./basemodel");
class Karyawan_Login extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				username: {name: 'username', type:Sequelize.STRING},
				password: {name: 'password', type:Sequelize.STRING},
				id_karyawan: {name: 'id_karyawan', type:Sequelize.INTEGER},
				stringpwd: {name: 'stringpwd', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_login",
				modelName: "karyawan_login",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	static accounteditFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	static accountviewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	static exportAccountviewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'username', 
			'password', 
			'id_karyawan', 
			'stringpwd'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("username LIKE :search"), 
			sequelize.literal("password LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("stringpwd LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Login;
