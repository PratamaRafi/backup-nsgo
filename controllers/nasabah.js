/** Express router providing Nasabah related routes
 *
 * @module routers/Nasabah
 * @module config - app config
 * @module utils - app utils functions
 * @module express-validator - form validation module
 * @module models- app model module
 * @requires express
 */
const express = require("express");
const router = express.Router();
const utils = require("../helpers/utils");
const { body, validationResult } = require("express-validator");
const models = require("../models/index.js");
// const Nasabah = models.Nasabah;
const View_Daftarkaryawan = models.View_Daftarkaryawan;
const Karyawan_Perusahaan = models.Karyawan_Perusahaan;
const Karyawan_Cabang = models.Karyawan_Cabang;
const View_R1_Nasabah_Pengajuan = models.View_R1_Nasabah_Pengajuan;
const DWHclone_kre = models.Dwhclone_Kre;
const Dataumum = models.Dataumum;

const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression

/**
 * Route to insert Nasabah record
 * @route {POST} /Nasabah/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post(
	"/cek_ktp/",
	[
		body("no_ktp").optional({ checkFalsy: true }),
		body("id_kar").optional({ checkFalsy: true }),
	],
	async function (req, res) {
		try {
			let errors = validationResult(req); // get validation errors if any
			if (!errors.isEmpty()) {
				let errorMsg = utils.formatValidationError(errors.array());
				return res.badRequest(errorMsg);
			}

			let view_karyawan = await View_Daftarkaryawan.findOne({
				where: {
					id_karyawan: req.body.id_kar,
				},
			});
			let karyawan = await Karyawan_Perusahaan.findOne({
				where: {
					id_perusahaan: view_karyawan.id_pt,
				},
			});

			let id_pt = view_karyawan.id_pt;
			let src = karyawan.id_ibs;
			let id_cabang_nsgo = view_karyawan.id_cabang;
			let kode_kantor = await Karyawan_Cabang.findOne({
				where: {
					id_cabang: id_cabang_nsgo,
				},
			});

			let data_nsgo = await View_R1_Nasabah_Pengajuan.findAll({
				where: {
					[Op.or]: [
						{
							ktp_nasabah: req.body.no_ktp,
							hasil_putusan: {
								[Op.ne]: "pengajuan_ditolak",
							},
							id_ptkar: id_pt,
							id_cabangkar: id_cabang_nsgo,
						},
						{
							ktp_nasabah: req.body.no_ktp,
							hasil_putusan: {
								[Op.is]: null,
							},
							id_ptkar: id_pt,
							id_cabangkar: id_cabang_nsgo,
						},
					],
				},
			});
			let data_dwh = await DWHclone_kre.findAll({
				where: {
					noktp: req.body.no_ktp,
					kdbpr: src,
					kdcab: kode_kantor.kode_cabang,
				},
			});
			// check if data_nsgo > 0
			var record;
			if (data_nsgo.length > 0 && data_dwh.length > 0) {
				record = 0;
			} else if (data_nsgo.length > 0 && data_dwh.length < 1) {
				record = 1;
			} else if (data_nsgo.length < 1 && data_dwh.length > 0) {
				record = 2;
			} else {
				record = 3;
			}

			// let res = record;
			// create array
			const result = {
				result: record,
			};

			return res.ok(result);
		} catch (err) {
			return res.serverError(err);
		}
	}
);

// /**
//  * Route to get Nasabah record by id_karyawan
//  * @route {GET} /Nasabah/count/{id_karyawan}
//  * @param {string} path - Express path
//  * @param {callback} middleware - Express middleware.
//  */

// router.get(["/count/:id_karyawan"], async (req, res) => {
// 	try {
// 		let id_karyawan = req.params.id_karyawan || null;
// 		let query = {};
// 		let where = {};
// 		where["id_karyawan"] = id_karyawan;
// 		query.raw = true;
// 		query.where = where;
// 		query.attributes = Nasabah.countNasabah();
// 		let record = await Nasabah.findOne(query);
// 		if (!record) {
// 			return res.notFound();
// 		}
// 		return res.ok(record);

// 		// let query = {};  // sequelize query object
// 		// let where = {};  // sequelize where conditions
// 		// let replacements = {};  // sequelize query params
// 		// let fieldname = req.params.fieldname;
// 		// let fieldvalue = req.params.fieldvalue;

// 		// if (fieldname){
// 		// 	where[Op.and] = [
// 		// 		sequelize.literal(`(${fieldname} = :fieldvalue)`)
// 		// 	];
// 		// 	replacements.fieldvalue = fieldvalue;
// 		// }
// 		// let search = req.query.search;
// 		// if(search){
// 		// 	let searchFields = Informasi_Lo_Home.countsearchFields();
// 		// 	where[Op.or] = searchFields;
// 		// 	replacements.search = `%${search}%`;
// 		// }

// 		// query.raw = true;
// 		// query.where = where;
// 		// query.replacements = replacements;
// 		// query.order = Informasi_Lo_Home.getOrderBy(req, 'desc');
// 		// query.attributes = Informasi_Lo_Home.countNasabah();
// 		// let page = parseInt(req.query.page) || 1;
// 		// let limit = parseInt(req.query.limit) || 20;
// 		// let result = await Informasi_Lo_Home.paginate(query);
// 		// return res.ok(result);
// 	} catch (err) {
// 		return res.serverError(err);
// 	}
// });

// /**
//  * Route to get  Nasabah record for edit
//  * @route {GET} /Nasabah/edit/{recid}
//  * @param {string} path - Express path
//  * @param {callback} middleware - Express middleware.
//  */
// router.get("/edit/:recid", async (req, res) => {
// 	try {
// 		let recid = req.params.recid;
// 		let query = {};
// 		let where = {};
// 		where["id"] = recid;
// 		query.raw = true;
// 		query.where = where;
// 		query.attributes = Nasabah.editFields();
// 		let record = await Nasabah.findOne(query);
// 		if (!record) {
// 			return res.notFound();
// 		}
// 		return res.ok(record);
// 	} catch (err) {
// 		return res.serverError(err);
// 	}
// });

// /**
//  * Route to update  Nasabah record
//  * @route {POST} /Nasabah/edit/{recid}
//  * @param {string} path - Express path
//  * @param {callback} middleware - Express middleware.
//  */
// router.post(
// 	"/edit/:recid",
// 	[
// 		body("nm_prospek").optional({ nullable: true, checkFalsy: true }),
// 		body("almt_prospek").optional({ nullable: true, checkFalsy: true }),
// 		body("telp").optional({ nullable: true, checkFalsy: true }),
// 		body("pekerjaan").optional({ nullable: true, checkFalsy: true }),
// 		body("penghasilan")
// 			.optional({ nullable: true, checkFalsy: true })
// 			.isNumeric(),
// 		body("status_prospek").optional({ nullable: true, checkFalsy: true }),
// 		body("tg_prospek").optional({ nullable: true, checkFalsy: true }),
// 	],
// 	async (req, res) => {
// 		try {
// 			let errors = validationResult(req); // get validation errors if any
// 			if (!errors.isEmpty()) {
// 				let errorMsg = utils.formatValidationError(errors.array());
// 				return res.badRequest(errorMsg);
// 			}
// 			let recid = req.params.recid;
// 			let modeldata = req.body;
// 			let query = {};
// 			let where = {};
// 			where["id"] = recid;
// 			query.raw = true;
// 			query.where = where;
// 			query.attributes = Nasabah.editFields();
// 			let record = await Nasabah.findOne(query);
// 			if (!record) {
// 				return res.notFound();
// 			}
// 			await Nasabah.update(modeldata, { where: where });
// 			return res.ok(modeldata);
// 		} catch (err) {
// 			return res.serverError(err);
// 		}
// 	}
// );

// /**
//  * Route to delete Nasabah record by table primary key
//  * Multi delete supported by recid separated by comma(,)
//  * @route {GET} /Nasabah/delete/{recid}
//  * @param {array} path - Array of express paths
//  * @param {callback} middleware - Express middleware.
//  */
// router.get("/delete/:recid", async (req, res) => {
// 	try {
// 		let recid = req.params.recid || "";
// 		recid = recid.split(",");
// 		let query = {};
// 		let where = {};
// 		where["id_nasabah"] = recid;
// 		query.raw = true;
// 		query.where = where;
// 		let records = await Nasabah.findAll(query);
// 		records.forEach(async (record) => {
// 			//perform action on each record before delete
// 		});
// 		await Nasabah.destroy(query);
// 		return res.ok(recid);
// 	} catch (err) {
// 		return res.serverError(err);
// 	}
// });
module.exports = router;
