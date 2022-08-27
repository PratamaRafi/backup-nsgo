
const BaseModel = require("./basemodel");
class Nasabah_Aspeklegalitas_Gln extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				jenisusaha: {name: 'jenisusaha', type:Sequelize.STRING},
				alamatusaha: {name: 'alamatusaha', type:Sequelize.STRING},
				status_tempatusaha: {name: 'status_tempatusaha', type:Sequelize.STRING},
				lamausaha: {name: 'lamausaha', type:Sequelize.INTEGER},
				periode_penghasilan: {name: 'periode_penghasilan', type:Sequelize.STRING},
				ratarata_penghasilan_bln: {name: 'ratarata_penghasilan_bln', type:Sequelize.INTEGER},
				komoditilainya: {name: 'komoditilainya', type:Sequelize.STRING},
				lamausahalainya: {name: 'lamausahalainya', type:Sequelize.INTEGER},
				periodepengasilanlainya: {name: 'periodepengasilanlainya', type:Sequelize.STRING},
				rataratapenghasilanlainya: {name: 'rataratapenghasilanlainya', type:Sequelize.INTEGER},
				idprov: {name: 'idprov', type:Sequelize.INTEGER},
				idkotakab: {name: 'idkotakab', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_aspeklegalitas_gln",
				modelName: "nasabah_aspeklegalitas_gln",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'jenisusaha', 
			'alamatusaha', 
			'status_tempatusaha', 
			'lamausaha', 
			'periode_penghasilan', 
			'ratarata_penghasilan_bln', 
			'komoditilainya', 
			'lamausahalainya', 
			'periodepengasilanlainya', 
			'rataratapenghasilanlainya', 
			'idprov', 
			'idkotakab'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'jenisusaha', 
			'alamatusaha', 
			'status_tempatusaha', 
			'lamausaha', 
			'periode_penghasilan', 
			'ratarata_penghasilan_bln', 
			'komoditilainya', 
			'lamausahalainya', 
			'periodepengasilanlainya', 
			'rataratapenghasilanlainya', 
			'idprov', 
			'idkotakab'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'jenisusaha', 
			'alamatusaha', 
			'status_tempatusaha', 
			'lamausaha', 
			'periode_penghasilan', 
			'ratarata_penghasilan_bln', 
			'komoditilainya', 
			'lamausahalainya', 
			'periodepengasilanlainya', 
			'rataratapenghasilanlainya', 
			'idprov', 
			'idkotakab'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'jenisusaha', 
			'alamatusaha', 
			'status_tempatusaha', 
			'lamausaha', 
			'periode_penghasilan', 
			'ratarata_penghasilan_bln', 
			'komoditilainya', 
			'lamausahalainya', 
			'periodepengasilanlainya', 
			'rataratapenghasilanlainya', 
			'idprov', 
			'idkotakab'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'jenisusaha', 
			'alamatusaha', 
			'status_tempatusaha', 
			'lamausaha', 
			'periode_penghasilan', 
			'ratarata_penghasilan_bln', 
			'komoditilainya', 
			'lamausahalainya', 
			'periodepengasilanlainya', 
			'rataratapenghasilanlainya', 
			'idprov', 
			'idkotakab'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("jenisusaha LIKE :search"), 
			sequelize.literal("alamatusaha LIKE :search"), 
			sequelize.literal("status_tempatusaha LIKE :search"), 
			sequelize.literal("lamausaha LIKE :search"), 
			sequelize.literal("periode_penghasilan LIKE :search"), 
			sequelize.literal("ratarata_penghasilan_bln LIKE :search"), 
			sequelize.literal("komoditilainya LIKE :search"), 
			sequelize.literal("lamausahalainya LIKE :search"), 
			sequelize.literal("periodepengasilanlainya LIKE :search"), 
			sequelize.literal("rataratapenghasilanlainya LIKE :search"), 
			sequelize.literal("idprov LIKE :search"), 
			sequelize.literal("idkotakab LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Aspeklegalitas_Gln;
