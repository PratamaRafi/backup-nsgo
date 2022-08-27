
const BaseModel = require("./basemodel");
class Karyawan_Cabang extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_cabang: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				desc_cabang: {name: 'desc_cabang', type:Sequelize.STRING},
				kode_cabang: {name: 'kode_cabang', type:Sequelize.STRING},
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				alamat: {name: 'alamat', type:Sequelize.STRING},
				telp: {name: 'telp', type:Sequelize.STRING},
				id_ptpm: {name: 'id_ptpm', type:Sequelize.INTEGER},
				shortname: {name: 'shortname', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "karyawan_cabang",
				modelName: "karyawan_cabang",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_cabang', 
			'desc_cabang', 
			'kode_cabang', 
			'id_pt', 
			'alamat', 
			'telp', 
			'id_ptpm', 
			'shortname'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_cabang', 
			'desc_cabang', 
			'kode_cabang', 
			'id_pt', 
			'alamat', 
			'telp', 
			'id_ptpm', 
			'shortname'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id_cabang', 
			'desc_cabang', 
			'kode_cabang', 
			'id_pt', 
			'alamat', 
			'telp', 
			'id_ptpm', 
			'shortname'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id_cabang', 
			'desc_cabang', 
			'kode_cabang', 
			'id_pt', 
			'alamat', 
			'telp', 
			'id_ptpm', 
			'shortname'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id_cabang', 
			'desc_cabang', 
			'kode_cabang', 
			'id_pt', 
			'alamat', 
			'telp', 
			'id_ptpm', 
			'shortname'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id_cabang LIKE :search"), 
			sequelize.literal("desc_cabang LIKE :search"), 
			sequelize.literal("kode_cabang LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("alamat LIKE :search"), 
			sequelize.literal("telp LIKE :search"), 
			sequelize.literal("id_ptpm LIKE :search"), 
			sequelize.literal("shortname LIKE :search"),
		];
	}

	
	
}
module.exports = Karyawan_Cabang;
