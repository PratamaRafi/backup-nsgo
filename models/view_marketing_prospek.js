
const BaseModel = require("./basemodel");
class View_Marketing_Prospek extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				idtb_prospek: { type: Sequelize.INTEGER, primaryKey: true  },
				tg_prospek: {name: 'tg_prospek', type:Sequelize.DATEONLY},
				id_nasabah: {name: 'id_nasabah', type:Sequelize.STRING},
				nm_prospek: {name: 'nm_prospek', type:Sequelize.STRING},
				status_prospek: {name: 'status_prospek', type:Sequelize.STRING},
				id_marketing: {name: 'id_marketing', type:Sequelize.INTEGER},
				nm_marketing: {name: 'nm_marketing', type:Sequelize.STRING},
				id_ptkar: {name: 'id_ptkar', type:Sequelize.INTEGER},
				id_cbkar: {name: 'id_cbkar', type:Sequelize.INTEGER},
				id_jabkar: {name: 'id_jabkar', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "view_marketing_prospek",
				modelName: "view_marketing_prospek",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'idtb_prospek', 
			'tg_prospek', 
			'id_nasabah', 
			'nm_prospek', 
			'status_prospek', 
			'id_marketing', 
			'nm_marketing', 
			'id_ptkar', 
			'id_cbkar', 
			'id_jabkar'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'idtb_prospek', 
			'tg_prospek', 
			'id_nasabah', 
			'nm_prospek', 
			'status_prospek', 
			'id_marketing', 
			'nm_marketing', 
			'id_ptkar', 
			'id_cbkar', 
			'id_jabkar'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("idtb_prospek LIKE :search"), 
			sequelize.literal("tg_prospek LIKE :search"), 
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("nm_prospek LIKE :search"), 
			sequelize.literal("status_prospek LIKE :search"), 
			sequelize.literal("id_marketing LIKE :search"), 
			sequelize.literal("nm_marketing LIKE :search"), 
			sequelize.literal("id_ptkar LIKE :search"), 
			sequelize.literal("id_cbkar LIKE :search"), 
			sequelize.literal("id_jabkar LIKE :search"),
		];
	}

	
	
}
module.exports = View_Marketing_Prospek;
