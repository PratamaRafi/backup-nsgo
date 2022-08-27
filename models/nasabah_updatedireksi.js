
const BaseModel = require("./basemodel");
class Nasabah_Updatedireksi extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				idkar: {name: 'idkar', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.STRING},
				tgupdate: {name: 'tgupdate', type:Sequelize.DATEONLY},
				waktuupdate: {name: 'waktuupdate', type:Sequelize.TIME},
				tipe_update: {name: 'tipe_update', type:Sequelize.STRING},
				output_update: {name: 'output_update', type:Sequelize.STRING},
				keterangan_update: {name: 'keterangan_update', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_updatedireksi",
				modelName: "nasabah_updatedireksi",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'tipe_update', 
			'output_update', 
			'keterangan_update'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'tipe_update', 
			'output_update', 
			'keterangan_update'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'tipe_update', 
			'output_update', 
			'keterangan_update'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'tipe_update', 
			'output_update', 
			'keterangan_update'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkar', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'tipe_update', 
			'output_update', 
			'keterangan_update'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idkar LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("tgupdate LIKE :search"), 
			sequelize.literal("waktuupdate LIKE :search"), 
			sequelize.literal("tipe_update LIKE :search"), 
			sequelize.literal("output_update LIKE :search"), 
			sequelize.literal("keterangan_update LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Updatedireksi;
