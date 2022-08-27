
const BaseModel = require("./basemodel");
class Karyawan_Submenubar_Inner extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				descproduk: {name: 'descproduk', type:Sequelize.STRING},
				idproduk: {name: 'idproduk', type:Sequelize.INTEGER},
				idlevel: {name: 'idlevel', type:Sequelize.INTEGER},
				daftarmenus: {name: 'daftarmenus', type:Sequelize.STRING},
				ijinprinsip: {name: 'ijinprinsip', type:Sequelize.INTEGER},
				urutan: {name: 'urutan', type:Sequelize.INTEGER},
				nmmenu: {name: 'nmmenu', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_submenubar_inner",
				modelName: "karyawan_submenubar_inner",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'descproduk', 
			'idproduk', 
			'idlevel', 
			'daftarmenus', 
			'ijinprinsip', 
			'urutan', 
			'nmmenu'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'descproduk', 
			'idproduk', 
			'idlevel', 
			'daftarmenus', 
			'ijinprinsip', 
			'urutan', 
			'nmmenu'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'descproduk', 
			'idproduk', 
			'idlevel', 
			'daftarmenus', 
			'ijinprinsip', 
			'urutan', 
			'nmmenu'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'descproduk', 
			'idproduk', 
			'idlevel', 
			'daftarmenus', 
			'ijinprinsip', 
			'urutan', 
			'nmmenu'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'descproduk', 
			'idproduk', 
			'idlevel', 
			'daftarmenus', 
			'ijinprinsip', 
			'urutan', 
			'nmmenu'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("descproduk LIKE :search"), 
			sequelize.literal("idproduk LIKE :search"), 
			sequelize.literal("idlevel LIKE :search"), 
			sequelize.literal("daftarmenus LIKE :search"), 
			sequelize.literal("ijinprinsip LIKE :search"), 
			sequelize.literal("urutan LIKE :search"), 
			sequelize.literal("nmmenu LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Submenubar_Inner;
