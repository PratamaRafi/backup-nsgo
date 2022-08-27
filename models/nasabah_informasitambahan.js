
const BaseModel = require("./basemodel");
class Nasabah_Informasitambahan extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				sifatpinjaman: {name: 'sifatpinjaman', type:Sequelize.STRING},
				sandipenjamin: {name: 'sandipenjamin', type:Sequelize.STRING},
				persenpenjamin: {name: 'persenpenjamin', type:Sequelize.STRING},
				sumberpelunasan: {name: 'sumberpelunasan', type:Sequelize.STRING},
				sektorekonomi: {name: 'sektorekonomi', type:Sequelize.STRING},
				jenispenggunaan: {name: 'jenispenggunaan', type:Sequelize.STRING},
				golongandebitur: {name: 'golongandebitur', type:Sequelize.STRING},
				hubungandebiturdgbank: {name: 'hubungandebiturdgbank', type:Sequelize.STRING},
				kodeketerkaitan: {name: 'kodeketerkaitan', type:Sequelize.STRING},
				jenisusaha: {name: 'jenisusaha', type:Sequelize.STRING},
				badanusaha: {name: 'badanusaha', type:Sequelize.STRING},
				hubunganljk: {name: 'hubunganljk', type:Sequelize.STRING},
				sumberpenghasilan: {name: 'sumberpenghasilan', type:Sequelize.STRING},
				golongandebiturbi: {name: 'golongandebiturbi', type:Sequelize.STRING},
				jnspenggunaanbi: {name: 'jnspenggunaanbi', type:Sequelize.STRING},
				sektorekonomibi: {name: 'sektorekonomibi', type:Sequelize.STRING},
				jnskreditslik: {name: 'jnskreditslik', type:Sequelize.STRING},
				katdebiturslik: {name: 'katdebiturslik', type:Sequelize.STRING},
				sifatkreditslik: {name: 'sifatkreditslik', type:Sequelize.STRING},
				orientasipgnslik: {name: 'orientasipgnslik', type:Sequelize.STRING},
				kabkotapenggunaslik: {name: 'kabkotapenggunaslik', type:Sequelize.STRING},
				provalmtnas: {name: 'provalmtnas', type:Sequelize.STRING},
				bidangusahabi: {name: 'bidangusahabi', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_informasitambahan",
				modelName: "nasabah_informasitambahan",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'sifatpinjaman', 
			'sandipenjamin', 
			'persenpenjamin', 
			'sumberpelunasan', 
			'sektorekonomi', 
			'jenispenggunaan', 
			'golongandebitur', 
			'hubungandebiturdgbank', 
			'kodeketerkaitan', 
			'jenisusaha', 
			'badanusaha', 
			'hubunganljk', 
			'sumberpenghasilan', 
			'golongandebiturbi', 
			'jnspenggunaanbi', 
			'sektorekonomibi', 
			'jnskreditslik', 
			'katdebiturslik', 
			'sifatkreditslik', 
			'orientasipgnslik', 
			'kabkotapenggunaslik', 
			'provalmtnas', 
			'bidangusahabi'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'sifatpinjaman', 
			'sandipenjamin', 
			'persenpenjamin', 
			'sumberpelunasan', 
			'sektorekonomi', 
			'jenispenggunaan', 
			'golongandebitur', 
			'hubungandebiturdgbank', 
			'kodeketerkaitan', 
			'jenisusaha', 
			'badanusaha', 
			'hubunganljk', 
			'sumberpenghasilan', 
			'golongandebiturbi', 
			'jnspenggunaanbi', 
			'sektorekonomibi', 
			'jnskreditslik', 
			'katdebiturslik', 
			'sifatkreditslik', 
			'orientasipgnslik', 
			'kabkotapenggunaslik', 
			'provalmtnas', 
			'bidangusahabi'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'sifatpinjaman', 
			'sandipenjamin', 
			'persenpenjamin', 
			'sumberpelunasan', 
			'sektorekonomi', 
			'jenispenggunaan', 
			'golongandebitur', 
			'hubungandebiturdgbank', 
			'kodeketerkaitan', 
			'jenisusaha', 
			'badanusaha', 
			'hubunganljk', 
			'sumberpenghasilan', 
			'golongandebiturbi', 
			'jnspenggunaanbi', 
			'sektorekonomibi', 
			'jnskreditslik', 
			'katdebiturslik', 
			'sifatkreditslik', 
			'orientasipgnslik', 
			'kabkotapenggunaslik', 
			'provalmtnas', 
			'bidangusahabi'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'sifatpinjaman', 
			'sandipenjamin', 
			'persenpenjamin', 
			'sumberpelunasan', 
			'sektorekonomi', 
			'jenispenggunaan', 
			'golongandebitur', 
			'hubungandebiturdgbank', 
			'kodeketerkaitan', 
			'jenisusaha', 
			'badanusaha', 
			'hubunganljk', 
			'sumberpenghasilan', 
			'golongandebiturbi', 
			'jnspenggunaanbi', 
			'sektorekonomibi', 
			'jnskreditslik', 
			'katdebiturslik', 
			'sifatkreditslik', 
			'orientasipgnslik', 
			'kabkotapenggunaslik', 
			'provalmtnas', 
			'bidangusahabi'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'sifatpinjaman', 
			'sandipenjamin', 
			'persenpenjamin', 
			'sumberpelunasan', 
			'sektorekonomi', 
			'jenispenggunaan', 
			'golongandebitur', 
			'hubungandebiturdgbank', 
			'kodeketerkaitan', 
			'jenisusaha', 
			'badanusaha', 
			'hubunganljk', 
			'sumberpenghasilan', 
			'golongandebiturbi', 
			'jnspenggunaanbi', 
			'sektorekonomibi', 
			'jnskreditslik', 
			'katdebiturslik', 
			'sifatkreditslik', 
			'orientasipgnslik', 
			'kabkotapenggunaslik', 
			'provalmtnas', 
			'bidangusahabi'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("sifatpinjaman LIKE :search"), 
			sequelize.literal("sandipenjamin LIKE :search"), 
			sequelize.literal("persenpenjamin LIKE :search"), 
			sequelize.literal("sumberpelunasan LIKE :search"), 
			sequelize.literal("sektorekonomi LIKE :search"), 
			sequelize.literal("jenispenggunaan LIKE :search"), 
			sequelize.literal("golongandebitur LIKE :search"), 
			sequelize.literal("hubungandebiturdgbank LIKE :search"), 
			sequelize.literal("kodeketerkaitan LIKE :search"), 
			sequelize.literal("jenisusaha LIKE :search"), 
			sequelize.literal("badanusaha LIKE :search"), 
			sequelize.literal("hubunganljk LIKE :search"), 
			sequelize.literal("sumberpenghasilan LIKE :search"), 
			sequelize.literal("golongandebiturbi LIKE :search"), 
			sequelize.literal("jnspenggunaanbi LIKE :search"), 
			sequelize.literal("sektorekonomibi LIKE :search"), 
			sequelize.literal("jnskreditslik LIKE :search"), 
			sequelize.literal("katdebiturslik LIKE :search"), 
			sequelize.literal("sifatkreditslik LIKE :search"), 
			sequelize.literal("orientasipgnslik LIKE :search"), 
			sequelize.literal("kabkotapenggunaslik LIKE :search"), 
			sequelize.literal("provalmtnas LIKE :search"), 
			sequelize.literal("bidangusahabi LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Informasitambahan;
