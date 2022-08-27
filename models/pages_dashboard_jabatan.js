
const BaseModel = require("./basemodel");
class Pages_Dashboard_Jabatan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				kd_akses: {name: 'kd_akses', type:Sequelize.INTEGER},
				id_dashboard: {name: 'id_dashboard', type:Sequelize.INTEGER},
				id_dashboard: {name: 'id_dashboard', type:Sequelize.INTEGER},
				id_dashboard: {name: 'id_dashboard', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "pages_dashboard_jabatan",
				modelName: "pages_dashboard_jabatan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kd_akses', 
			'id_dashboard', 
			'id_dashboard', 
			'id_dashboard'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kd_akses', 
			'id_dashboard', 
			'id_dashboard', 
			'id_dashboard'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kd_akses', 
			'id_dashboard', 
			'id_dashboard', 
			'id_dashboard'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kd_akses', 
			'id_dashboard', 
			'id_dashboard', 
			'id_dashboard'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'kd_akses', 
			'id_dashboard', 
			'id_dashboard', 
			'id_dashboard'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("kd_akses LIKE :search"), 
			sequelize.literal("id_dashboard LIKE :search"), 
			sequelize.literal("id_dashboard LIKE :search"), 
			sequelize.literal("id_dashboard LIKE :search"),
		];
	}

	
	
}
module.exports = Pages_Dashboard_Jabatan;
