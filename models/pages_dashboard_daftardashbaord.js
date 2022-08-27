
const BaseModel = require("./basemodel");
class Pages_Dashboard_Daftardashbaord extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				desc_dashboard: {name: 'desc_dashboard', type:Sequelize.STRING},
				path: {name: 'path', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "pages_dashboard_daftardashbaord",
				modelName: "pages_dashboard_daftardashbaord",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_dashboard', 
			'path'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_dashboard', 
			'path'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_dashboard', 
			'path'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_dashboard', 
			'path'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'desc_dashboard', 
			'path'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("desc_dashboard LIKE :search"), 
			sequelize.literal("path LIKE :search"),
		];
	}

	
	
}
module.exports = Pages_Dashboard_Daftardashbaord;
