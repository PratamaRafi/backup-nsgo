const BaseModel = require("./basemodel");
class Dataumum extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				id_nasabah: {
					type: Sequelize.STRING,
					primaryKey: true,
				},
				nama: { name: "nama", type: Sequelize.STRING },
			},
			{
				sequelize,

				tableName: "nasabah_dataumum",
				modelName: "Dataumum",
			}
		);
	}

	static listFields() {
		let sequelize = this.sequelize;
		return [sequelize.literal("id_nasabah"), sequelize.literal("nama")];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [sequelize.literal("id_nasabah"), sequelize.literal("nama")];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [sequelize.literal("id_nasabah"), sequelize.literal("nama")];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [sequelize.literal("id_nasabah"), sequelize.literal("nama")];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [sequelize.literal("id_nasabah"), sequelize.literal("nama")];
	}

	static searchFields() {
		let sequelize = this.sequelize;
		return [sequelize.literal("id_nasabah"), sequelize.literal("nama")];
	}
}
module.exports = Dataumum;
