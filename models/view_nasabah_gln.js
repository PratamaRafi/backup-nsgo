
const BaseModel = require("./basemodel");
class View_Nasabah_Gln extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_nasabah: { type: Sequelize.STRING, primaryKey: true  },
				id_kelompok: {name: 'id_kelompok', type:Sequelize.STRING},
				id_karyawan: {name: 'id_karyawan', type:Sequelize.INTEGER},
				nm_kelompok: {name: 'nm_kelompok', type:Sequelize.STRING},
				nm_karyawan: {name: 'nm_karyawan', type:Sequelize.STRING},
				nm_nasabah: {name: 'nm_nasabah', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_nasabah_gln",
				modelName: "view_nasabah_gln",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_nasabah', 
			'id_kelompok', 
			'id_karyawan', 
			'nm_kelompok', 
			'nm_karyawan', 
			'nm_nasabah'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_nasabah', 
			'id_kelompok', 
			'id_karyawan', 
			'nm_kelompok', 
			'nm_karyawan', 
			'nm_nasabah'
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
			sequelize.literal("id_nasabah LIKE :search"), 
			sequelize.literal("id_kelompok LIKE :search"), 
			sequelize.literal("id_karyawan LIKE :search"), 
			sequelize.literal("nm_kelompok LIKE :search"), 
			sequelize.literal("nm_karyawan LIKE :search"), 
			sequelize.literal("nm_nasabah LIKE :search"),
		];
	}

	
	
}
module.exports = View_Nasabah_Gln;
