
const BaseModel = require("./basemodel");
class Produk_Sukubunga extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_sukubunga: { type: Sequelize.INTEGER, primaryKey: true  },
				id_produk: {name: 'id_produk', type:Sequelize.INTEGER},
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "produk_sukubunga",
				modelName: "produk_sukubunga",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_sukubunga', 
			'id_produk', 
			'id_pt'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_sukubunga', 
			'id_produk', 
			'id_pt'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id_sukubunga', 
			'id_produk', 
			'id_pt'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id_sukubunga', 
			'id_produk', 
			'id_pt'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id_sukubunga', 
			'id_produk', 
			'id_pt'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id_sukubunga LIKE :search"), 
			sequelize.literal("id_produk LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"),
		];
	}

	
	
}
module.exports = Produk_Sukubunga;
