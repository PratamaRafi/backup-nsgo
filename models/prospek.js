const BaseModel = require("./basemodel");
class Prospek extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				id_karyawan: { name: "id_karyawan", type: Sequelize.INTEGER },
				id_nasabah: { name: "id_nasabah", type: Sequelize.STRING },
				nm_prospek: { name: "nm_prospek", type: Sequelize.STRING },
				almt_prospek: { name: "almt_prospek", type: Sequelize.STRING },
				telp: { name: "telp", type: Sequelize.STRING },
				pkerjaan: { name: "pekerjaan", type: Sequelize.STRING },
				penghasilan: { name: "penghasilan", type: Sequelize.INTEGER },
				status_prospek: { name: "status_prospek", type: Sequelize.STRING },
				keterangan_alasan: { name: "status_prospek", type: Sequelize.STRING },
				tg_prospek: { name: "Kode_Cabang", type: Sequelize.STRING },
			},
			{
				sequelize,

				tableName: "karyawan_marketingprospek",
				modelName: "Prospek",
			}
		);
	}

	static listFields() {
		let sequelize = this.sequelize;
		return [
			"id",
			sequelize.literal("id_karyawan"),
			sequelize.literal("id_nasabah"),
			sequelize.literal("nm_prospek"),
			sequelize.literal("almt_prospek"),
			sequelize.literal("telp"),
			sequelize.literal("pkerjaan as pekerjaan"),
			sequelize.literal("penghasilan"),
			sequelize.literal("status_prospek"),
			sequelize.literal("tg_prospek"),
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			"id",
			sequelize.literal("id_karyawan"),
			sequelize.literal("id_nasabah"),
			sequelize.literal("nm_prospek"),
			sequelize.literal("almt_prospek"),
			sequelize.literal("telp"),
			sequelize.literal("pkerjaan as pekerjaan"),
			sequelize.literal("penghasilan"),
			sequelize.literal("status_prospek"),
			sequelize.literal("tg_prospek"),
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			"id",
			sequelize.literal("id_karyawan"),
			sequelize.literal("id_nasabah"),
			sequelize.literal("nm_prospek"),
			sequelize.literal("almt_prospek"),
			sequelize.literal("telp"),
			sequelize.literal("pkerjaan as pekerjaan"),
			sequelize.literal("penghasilan"),
			sequelize.literal("status_prospek"),
			sequelize.literal("tg_prospek"),
		];
	}
	static countProspek() {
		let sequelize = this.sequelize;
		return [
			"id",
			sequelize.literal("id_karyawan"),
			sequelize.fn("COUNT", sequelize.col("id_nasabah")),
		];
	}
	
	static countsearchFields() {
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"),
			sequelize.literal("id_karyawan LIKE :search"),
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			"id",
			sequelize.literal("id_karyawan"),
			sequelize.literal("id_nasabah"),
			sequelize.literal("nm_prospek"),
			sequelize.literal("almt_prospek"),
			sequelize.literal("telp"),
			sequelize.literal("pkerjaan as pekerjaan"),
			sequelize.literal("penghasilan"),
			sequelize.literal("status_prospek"),
			sequelize.literal("tg_prospek"),
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			"id",
			sequelize.literal("id_karyawan"),
			sequelize.literal("id_nasabah"),
			sequelize.literal("nm_prospek"),
			sequelize.literal("almt_prospek"),
			sequelize.literal("telp"),
			sequelize.literal("pkerjaan as pekerjaan"),
			sequelize.literal("penghasilan"),
			sequelize.literal("status_prospek"),
			sequelize.literal("tg_prospek"),
		];
	}


	static searchFields() {
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"),
			sequelize.literal("id_karyawan LIKE :search"),
			sequelize.literal("id_nasabah LIKE :search"),
			sequelize.literal("nm_prospek LIKE :search"),
			sequelize.literal("almt_prospek LIKE :search"),
			sequelize.literal("telp LIKE :search"),
			sequelize.literal("pkerjaan LIKE :search"),
			sequelize.literal("penghasilan LIKE :search"),
			sequelize.literal("status_prospek LIKE :search"),
			sequelize.literal("tg_prospek LIKE :search"),
		];
	}
}
module.exports = Prospek;
