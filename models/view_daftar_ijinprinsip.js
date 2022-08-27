
const BaseModel = require("./basemodel");
class View_Daftar_Ijinprinsip extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id_basepengajuan: { type: Sequelize.STRING, primaryKey: true  },
				step_proses: {name: 'step_proses', type:Sequelize.STRING},
				idkar: {name: 'idkar', type:Sequelize.STRING},
				id_pt: {name: 'id_pt', type:Sequelize.INTEGER},
				id_cabang: {name: 'id_cabang', type:Sequelize.INTEGER},
				id_jabatan: {name: 'id_jabatan', type:Sequelize.INTEGER},
				id_kc: {name: 'id_kc', type:Sequelize.STRING},
				ijinprinsip: {name: 'ijinprinsip', type:Sequelize.INTEGER},
				id_mb: {name: 'id_mb', type:Sequelize.STRING},
				status_ijinprinsip: {name: 'status_ijinprinsip', type:Sequelize.INTEGER},
				ijin_prinsiptx: {name: 'ijin_prinsiptx', type:Sequelize.STRING},
				note_kc: {name: 'note_kc', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "view_daftar_ijinprinsip",
				modelName: "view_daftar_ijinprinsip",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id_basepengajuan', 
			'step_proses', 
			'idkar', 
			'id_pt', 
			'id_cabang', 
			'id_jabatan', 
			'id_kc', 
			'ijinprinsip', 
			'id_mb', 
			'status_ijinprinsip', 
			'ijin_prinsiptx', 
			'note_kc'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id_basepengajuan', 
			'step_proses', 
			'idkar', 
			'id_pt', 
			'id_cabang', 
			'id_jabatan', 
			'id_kc', 
			'ijinprinsip', 
			'id_mb', 
			'status_ijinprinsip', 
			'ijin_prinsiptx', 
			'note_kc'
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
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("step_proses LIKE :search"), 
			sequelize.literal("idkar LIKE :search"), 
			sequelize.literal("id_pt LIKE :search"), 
			sequelize.literal("id_cabang LIKE :search"), 
			sequelize.literal("id_jabatan LIKE :search"), 
			sequelize.literal("id_kc LIKE :search"), 
			sequelize.literal("ijinprinsip LIKE :search"), 
			sequelize.literal("id_mb LIKE :search"), 
			sequelize.literal("status_ijinprinsip LIKE :search"), 
			sequelize.literal("ijin_prinsiptx LIKE :search"), 
			sequelize.literal("note_kc LIKE :search"),
		];
	}

	
	
}
module.exports = View_Daftar_Ijinprinsip;
