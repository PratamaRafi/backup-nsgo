/** Express router providing Prospek related routes
 *
 * @module routers/Prospek
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
const Prospek = models.Prospek;
const Dataumum = models.Dataumum;

const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression

/**
 * Route to list Prospek records
 * @route {GET} /Prospek/index/{fieldname}/{fieldvalue}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(["/", "/index/:fieldname?/:fieldvalue?"], async (req, res) => {
	try {
		let query = {}; // sequelize query object
		let where = {}; // sequelize where conditions
		let replacements = {}; // sequelize query params
		let fieldname = req.params.fieldname;
		let fieldvalue = req.params.fieldvalue;

		if (fieldname) {
			where[Op.and] = [sequelize.literal(`(${fieldname} = :fieldvalue)`)];
			replacements.fieldvalue = fieldvalue;
		}
		let search = req.query.search;
		if (search) {
			let searchFields = Prospek.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}

		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Prospek.getOrderBy(req, "desc");
		query.attributes = Prospek.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Prospek.paginate(query, page, limit);
		return res.ok(result);
	} catch (err) {
		return res.serverError(err);
	}
});

router.get(['/view/:id_karyawan'], async (req, res) => {
	try{
		let id_karyawan = req.params.id_karyawan || null;
		let query = {}
		let where = {}
		where['id_karyawan'] = id_karyawan;
		query.raw = true;
		query.where = where;
		query.order = Prospek.getOrderBy(req, 'desc');
		query.attributes = Prospek.viewFields();
		let record = await Prospek.findAll(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});

/**
 * Route to insert Prospek record
 * @route {POST} /Prospek/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post(
	"/add/:id_karyawan",
	[
		// body("id_karyawan")
		// 	.optional({ nullable: true, checkFalsy: true })
		// 	.isNumeric(),
		body("nm_prospek").optional({ nullable: true, checkFalsy: true }),
		body("almt_prospek").optional({ nullable: true, checkFalsy: true }),
		body("telp").optional({ nullable: true, checkFalsy: true }),
		body("pkerjaan").optional({ nullable: true, checkFalsy: true }),
		body("penghasilan")
			.optional({ nullable: true, checkFalsy: true })
			.isNumeric(),
		body("status_prospek").optional({ nullable: true, checkFalsy: true }),
		body("keterangan_alasan").optional({ nullable: true, checkFalsy: true }),
		// body("tg_prospek").optional({ nullable: true, checkFalsy: true }),
	],
	async function (req, res) {
		try {
			let errors = validationResult(req); // get validation errors if any
			if (!errors.isEmpty()) {
				let errorMsg = utils.formatValidationError(errors.array());
				return res.badRequest(errorMsg);
			}

			//Generate id nasabah
			const d_t = new Date();
			let year = d_t.getFullYear();
			let month = ("0" + (d_t.getMonth() + 1)).slice(-2);
			let day = ("0" + d_t.getDate()).slice(-2);

			const tanggal = `${year}${month}${day}`;
			let nasabahExist = await Dataumum.findAll({
				where: {
					id_nasabah: {
						[Op.like]: `%${tanggal}%`,
					},
				},
				order: sequelize.literal("abs(id_nasabah) DESC"),
				// limit: 1,
			});

			var id_nasabah;

			if (nasabahExist.length == 0) {
				id_nasabah = `${tanggal}1`;
				// id_nasabah = "haii";
			} else {
				var length = nasabahExist.length;
				var sub_plus = parseInt(length) + 1;
				id_nasabah = `${tanggal}${sub_plus}`;
				// id_nasabah;
			}

			let id_karyawan = req.params.id_karyawan;
			let tg_prospek = `${year}-${month}-${day}`;

			req.body.id_nasabah = id_nasabah;
			req.body.id_karyawan = id_karyawan;
			req.body.tg_prospek = tg_prospek;
			let modeldata = req.body;

			// let dataumum = {
			// 	id_nasabah: id_nasabah,
			// 	nama: req.body.nm_prospek,
			// };
			// await Dataumum.create(dataumum);

			//save Prospek record
			let record = await Prospek.create(modeldata);
			//await record.reload(); //reload the record from database
			let recid = record["id"];

			return res.ok(record);
		} catch (err) {
			return res.serverError(err);
		}
	}
);

/**
 * Route to get Prospek record by id_karyawan
 * @route {GET} /Prospek/count/{id_karyawan}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */

router.get(['/count/:id_karyawan'], async (req, res) => {
	try {
		let id_karyawan = req.params.id_karyawan || null;
		let query = {}
		let where = {}
		where['id_karyawan'] = id_karyawan;
		query.raw = true;
		query.where = where;
		query.attributes = Prospek.countProspek();
		let record = await Prospek.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);

	} catch (err) {
		return res. serverError(err);
	}
});


// /**
//  * Route to get  Prospek record for edit
//  * @route {GET} /Prospek/edit/{recid}
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
// 		query.attributes = Prospek.editFields();
// 		let record = await Prospek.findOne(query);
// 		if (!record) {
// 			return res.notFound();
// 		}
// 		return res.ok(record);
// 	} catch (err) {
// 		return res.serverError(err);
// 	}
// });

// /**
//  * Route to update  Prospek record
//  * @route {POST} /Prospek/edit/{recid}
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
// 			query.attributes = Prospek.editFields();
// 			let record = await Prospek.findOne(query);
// 			if (!record) {
// 				return res.notFound();
// 			}
// 			await Prospek.update(modeldata, { where: where });
// 			return res.ok(modeldata);
// 		} catch (err) {
// 			return res.serverError(err);
// 		}
// 	}
// );

// /**
//  * Route to delete Prospek record by table primary key
//  * Multi delete supported by recid separated by comma(,)
//  * @route {GET} /Prospek/delete/{recid}
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
// 		let records = await Prospek.findAll(query);
// 		records.forEach(async (record) => {
// 			//perform action on each record before delete
// 		});
// 		await Prospek.destroy(query);
// 		return res.ok(recid);
// 	} catch (err) {
// 		return res.serverError(err);
// 	}
// });
module.exports = router;
