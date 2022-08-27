
const BaseModel = require("./basemodel");
class Prosesbisnis_Flow_Perlevel extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				idflow: {name: 'idflow', type:Sequelize.INTEGER},
				idlevel: {name: 'idlevel', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "prosesbisnis_flow_perlevel",
				modelName: "prosesbisnis_flow_perlevel",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idflow', 
			'idlevel'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idflow', 
			'idlevel'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idflow', 
			'idlevel'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idflow', 
			'idlevel'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'idflow', 
			'idlevel'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("idflow LIKE :search"), 
			sequelize.literal("idlevel LIKE :search"),
		];
	}

	
	
}
module.exports = Prosesbisnis_Flow_Perlevel;
