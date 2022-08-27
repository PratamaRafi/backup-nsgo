
const BaseModel = require("./basemodel");
class Nasabah_Analisakkeuangan_Gln extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_basepengajuan: {name: 'id_basepengajuan', type:Sequelize.STRING},
				biayatn: {name: 'biayatn', type:Sequelize.INTEGER},
				biayalistriktelpair: {name: 'biayalistriktelpair', type:Sequelize.INTEGER},
				biayapjkretri: {name: 'biayapjkretri', type:Sequelize.INTEGER},
				biayart: {name: 'biayart', type:Sequelize.INTEGER},
				biayalainlain: {name: 'biayalainlain', type:Sequelize.INTEGER},
				angsurandibanklain: {name: 'angsurandibanklain', type:Sequelize.INTEGER},
				pendapatan: {name: 'pendapatan', type:Sequelize.INTEGER},
				totalbiaya: {name: 'totalbiaya', type:Sequelize.INTEGER},
				pendapatanbersih: {name: 'pendapatanbersih', type:Sequelize.INTEGER},
				penghasilan_tmbahanbersih: {name: 'penghasilan_tmbahanbersih', type:Sequelize.INTEGER},
				totalpendapatan: {name: 'totalpendapatan', type:Sequelize.INTEGER},
				maxangsuranpbln: {name: 'maxangsuranpbln', type:Sequelize.INTEGER},
				sukubunga_bln: {name: 'sukubunga_bln', type:Sequelize.INTEGER},
				jangkawaktu: {name: 'jangkawaktu', type:Sequelize.INTEGER},
				polaangsuran: {name: 'polaangsuran', type:Sequelize.INTEGER},
				angsuran_pokok: {name: 'angsuran_pokok', type:Sequelize.INTEGER},
				angsuran_bunga: {name: 'angsuran_bunga', type:Sequelize.INTEGER},
				total_angsuran: {name: 'total_angsuran', type:Sequelize.INTEGER}
			}, 
			{ 
				sequelize,
				
				tableName: "nasabah_analisakkeuangan_gln",
				modelName: "nasabah_analisakkeuangan_gln",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'biayatn', 
			'biayalistriktelpair', 
			'biayapjkretri', 
			'biayart', 
			'biayalainlain', 
			'angsurandibanklain', 
			'pendapatan', 
			'totalbiaya', 
			'pendapatanbersih', 
			'penghasilan_tmbahanbersih', 
			'totalpendapatan', 
			'maxangsuranpbln', 
			'sukubunga_bln', 
			'jangkawaktu', 
			'polaangsuran', 
			'angsuran_pokok', 
			'angsuran_bunga', 
			'total_angsuran'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'biayatn', 
			'biayalistriktelpair', 
			'biayapjkretri', 
			'biayart', 
			'biayalainlain', 
			'angsurandibanklain', 
			'pendapatan', 
			'totalbiaya', 
			'pendapatanbersih', 
			'penghasilan_tmbahanbersih', 
			'totalpendapatan', 
			'maxangsuranpbln', 
			'sukubunga_bln', 
			'jangkawaktu', 
			'polaangsuran', 
			'angsuran_pokok', 
			'angsuran_bunga', 
			'total_angsuran'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'biayatn', 
			'biayalistriktelpair', 
			'biayapjkretri', 
			'biayart', 
			'biayalainlain', 
			'angsurandibanklain', 
			'pendapatan', 
			'totalbiaya', 
			'pendapatanbersih', 
			'penghasilan_tmbahanbersih', 
			'totalpendapatan', 
			'maxangsuranpbln', 
			'sukubunga_bln', 
			'jangkawaktu', 
			'polaangsuran', 
			'angsuran_pokok', 
			'angsuran_bunga', 
			'total_angsuran'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'biayatn', 
			'biayalistriktelpair', 
			'biayapjkretri', 
			'biayart', 
			'biayalainlain', 
			'angsurandibanklain', 
			'pendapatan', 
			'totalbiaya', 
			'pendapatanbersih', 
			'penghasilan_tmbahanbersih', 
			'totalpendapatan', 
			'maxangsuranpbln', 
			'sukubunga_bln', 
			'jangkawaktu', 
			'polaangsuran', 
			'angsuran_pokok', 
			'angsuran_bunga', 
			'total_angsuran'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_basepengajuan', 
			'biayatn', 
			'biayalistriktelpair', 
			'biayapjkretri', 
			'biayart', 
			'biayalainlain', 
			'angsurandibanklain', 
			'pendapatan', 
			'totalbiaya', 
			'pendapatanbersih', 
			'penghasilan_tmbahanbersih', 
			'totalpendapatan', 
			'maxangsuranpbln', 
			'sukubunga_bln', 
			'jangkawaktu', 
			'polaangsuran', 
			'angsuran_pokok', 
			'angsuran_bunga', 
			'total_angsuran'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("id LIKE :search"), 
			sequelize.literal("id_basepengajuan LIKE :search"), 
			sequelize.literal("biayatn LIKE :search"), 
			sequelize.literal("biayalistriktelpair LIKE :search"), 
			sequelize.literal("biayapjkretri LIKE :search"), 
			sequelize.literal("biayart LIKE :search"), 
			sequelize.literal("biayalainlain LIKE :search"), 
			sequelize.literal("angsurandibanklain LIKE :search"), 
			sequelize.literal("pendapatan LIKE :search"), 
			sequelize.literal("totalbiaya LIKE :search"), 
			sequelize.literal("pendapatanbersih LIKE :search"), 
			sequelize.literal("penghasilan_tmbahanbersih LIKE :search"), 
			sequelize.literal("totalpendapatan LIKE :search"), 
			sequelize.literal("maxangsuranpbln LIKE :search"), 
			sequelize.literal("sukubunga_bln LIKE :search"), 
			sequelize.literal("jangkawaktu LIKE :search"), 
			sequelize.literal("polaangsuran LIKE :search"), 
			sequelize.literal("angsuran_pokok LIKE :search"), 
			sequelize.literal("angsuran_bunga LIKE :search"), 
			sequelize.literal("total_angsuran LIKE :search"),
		];
	}

	
	
}
module.exports = Nasabah_Analisakkeuangan_Gln;
