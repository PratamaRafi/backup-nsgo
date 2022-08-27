
const BaseModel = require("./basemodel");
class Nasabah_Updatekc extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				idkarkc: {name: 'idkarkc', type:Sequelize.STRING},
				idnas: {name: 'idnas', type:Sequelize.STRING},
				tgupdate: {name: 'tgupdate', type:Sequelize.DATEONLY},
				waktuupdate: {name: 'waktuupdate', type:Sequelize.DATEONLY},
				ijinprinsip: {name: 'ijinprinsip', type:Sequelize.INTEGER},
				note_kc: {name: 'note_kc', type:Sequelize.STRING},
				lengkap: {name: 'lengkap', type:Sequelize.INTEGER},
				acc_ijinprinsipbwpkmb: {name: 'acc_ijinprinsipbwpkmb', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_updatekc",
				modelName: "nasabah_updatekc",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarkc', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'ijinprinsip', 
			'note_kc', 
			'lengkap', 
			'acc_ijinprinsipbwpkmb'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarkc', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'ijinprinsip', 
			'note_kc', 
			'lengkap', 
			'acc_ijinprinsipbwpkmb'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarkc', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'ijinprinsip', 
			'note_kc', 
			'lengkap', 
			'acc_ijinprinsipbwpkmb'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarkc', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'ijinprinsip', 
			'note_kc', 
			'lengkap', 
			'acc_ijinprinsipbwpkmb'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'idkarkc', 
			'idnas', 
			'tgupdate', 
			'waktuupdate', 
			'ijinprinsip', 
			'note_kc', 
			'lengkap', 
			'acc_ijinprinsipbwpkmb'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("idkarkc LIKE :search"), 
			sequelize.literal("idnas LIKE :search"), 
			sequelize.literal("tgupdate LIKE :search"), 
			sequelize.literal("waktuupdate LIKE :search"), 
			sequelize.literal("ijinprinsip LIKE :search"), 
			sequelize.literal("note_kc LIKE :search"), 
			sequelize.literal("lengkap LIKE :search"), 
			sequelize.literal("acc_ijinprinsipbwpkmb LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Updatekc;
