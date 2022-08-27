/** Express router providing Nasabah_Dataumum related routes
 *
 * @module routers/Nasabah_Dataumum
 * @module config - app config
 * @module utils - app utils functions
 * @module express-validator - form validation module
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const utils = require('../helpers/utils');
const { body, validationResult } = require('express-validator');
const models = require('../models/index.js');
const Nasabah_Dataumum = models.Nasabah_Dataumum;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list nasabah_dataumum records
 * @route {GET} /nasabah_dataumum/index/{fieldname}/{fieldvalue}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		let query = {};  // sequelize query object
		let where = {};  // sequelize where conditions
		let replacements = {};  // sequelize query params
		let fieldname = req.params.fieldname;
		let fieldvalue = req.params.fieldvalue;
		
		if (fieldname){
			where[Op.and] = [
				sequelize.literal(`(${fieldname} = :fieldvalue)`)
			];
			replacements.fieldvalue = fieldvalue;
		}
		let search = req.query.search;
		if(search){
			let searchFields = Nasabah_Dataumum.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Nasabah_Dataumum.getOrderBy(req, 'desc');
		query.attributes = Nasabah_Dataumum.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Nasabah_Dataumum.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Nasabah_Dataumum record
 * @route {GET} /nasabah_dataumum/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['id_nasabah'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Nasabah_Dataumum.viewFields();
		let record = await Nasabah_Dataumum.findOne(query);
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
 * Route to insert Nasabah_Dataumum record
 * @route {POST} /nasabah_dataumum/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_nasabah').not().isEmpty(),
		body('nama').optional({nullable: true, checkFalsy: true}),
		body('jenis_kelamin').optional({nullable: true, checkFalsy: true}),
		body('tempat_lahir').optional({nullable: true, checkFalsy: true}),
		body('tgl_lahir').optional({nullable: true, checkFalsy: true}),
		body('usia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('no_ktp').optional({nullable: true, checkFalsy: true}),
		body('status_berlaku_ktp').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tg_berlaku_ktp').optional({nullable: true, checkFalsy: true}),
		body('pendidikan_terakhir').optional({nullable: true, checkFalsy: true}),
		body('status_pernikahan').optional({nullable: true, checkFalsy: true}),
		body('nm_ibukandung').optional({nullable: true, checkFalsy: true}),
		body('jm_anak_tanggungan').optional({nullable: true, checkFalsy: true}),
		body('tipe_kredit').optional({nullable: true, checkFalsy: true}),
		body('namafile_fotoktp').optional({nullable: true, checkFalsy: true}),
		body('extensiimg_fotoktp').optional({nullable: true, checkFalsy: true}),
		body('id_perusahaan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('email').optional({nullable: true, checkFalsy: true}).isEmail(),
		body('no_hp').optional({nullable: true, checkFalsy: true}),
		body('nama_panggilan').optional({nullable: true, checkFalsy: true}),
		body('namafile_fotokk').optional({nullable: true, checkFalsy: true}),
		body('extensiimg_fotokk').optional({nullable: true, checkFalsy: true}),
		body('namafile_ftopasangan').optional({nullable: true, checkFalsy: true}),
		body('extensiimg_ftopasangan').optional({nullable: true, checkFalsy: true}),
		body('id_pekerjaan').optional({nullable: true, checkFalsy: true}),
		body('namafile_fotottdnas').not().isEmpty(),
		body('idagama').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_fotoktp !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_fotoktp, "namafile_fotoktp");
			modeldata.namafile_fotoktp = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.extensiimg_fotoktp !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.extensiimg_fotoktp, "extensiimg_fotoktp");
			modeldata.extensiimg_fotoktp = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_fotokk !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_fotokk, "namafile_fotokk");
			modeldata.namafile_fotokk = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.extensiimg_fotokk !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.extensiimg_fotokk, "extensiimg_fotokk");
			modeldata.extensiimg_fotokk = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_ftopasangan !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_ftopasangan, "namafile_ftopasangan");
			modeldata.namafile_ftopasangan = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.extensiimg_ftopasangan !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.extensiimg_ftopasangan, "extensiimg_ftopasangan");
			modeldata.extensiimg_ftopasangan = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_fotottdnas !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_fotottdnas, "namafile_fotottdnas");
			modeldata.namafile_fotottdnas = fileInfo.filepath;
		}
		
		//save Nasabah_Dataumum record
		let record = await Nasabah_Dataumum.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id_nasabah'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Nasabah_Dataumum record for edit
 * @route {GET} /nasabah_dataumum/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['id_nasabah'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Nasabah_Dataumum.editFields();
		let record = await Nasabah_Dataumum.findOne(query);
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
 * Route to update  Nasabah_Dataumum record
 * @route {POST} /nasabah_dataumum/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_nasabah').optional({nullable: true}).not().isEmpty(),
		body('nama').optional({nullable: true, checkFalsy: true}),
		body('jenis_kelamin').optional({nullable: true, checkFalsy: true}),
		body('tempat_lahir').optional({nullable: true, checkFalsy: true}),
		body('tgl_lahir').optional({nullable: true, checkFalsy: true}),
		body('usia').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('no_ktp').optional({nullable: true, checkFalsy: true}),
		body('status_berlaku_ktp').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('tg_berlaku_ktp').optional({nullable: true, checkFalsy: true}),
		body('pendidikan_terakhir').optional({nullable: true, checkFalsy: true}),
		body('status_pernikahan').optional({nullable: true, checkFalsy: true}),
		body('nm_ibukandung').optional({nullable: true, checkFalsy: true}),
		body('jm_anak_tanggungan').optional({nullable: true, checkFalsy: true}),
		body('tipe_kredit').optional({nullable: true, checkFalsy: true}),
		body('namafile_fotoktp').optional({nullable: true, checkFalsy: true}),
		body('extensiimg_fotoktp').optional({nullable: true, checkFalsy: true}),
		body('id_perusahaan').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('email').optional({nullable: true, checkFalsy: true}).isEmail(),
		body('no_hp').optional({nullable: true, checkFalsy: true}),
		body('nama_panggilan').optional({nullable: true, checkFalsy: true}),
		body('namafile_fotokk').optional({nullable: true, checkFalsy: true}),
		body('extensiimg_fotokk').optional({nullable: true, checkFalsy: true}),
		body('namafile_ftopasangan').optional({nullable: true, checkFalsy: true}),
		body('extensiimg_ftopasangan').optional({nullable: true, checkFalsy: true}),
		body('id_pekerjaan').optional({nullable: true, checkFalsy: true}),
		body('namafile_fotottdnas').optional({nullable: true}).not().isEmpty(),
		body('idagama').optional({nullable: true, checkFalsy: true}).isNumeric(),
	]
, async (req, res) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let recid = req.params.recid;
		let modeldata = req.body;
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_fotoktp !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_fotoktp, "namafile_fotoktp");
			modeldata.namafile_fotoktp = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.extensiimg_fotoktp !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.extensiimg_fotoktp, "extensiimg_fotoktp");
			modeldata.extensiimg_fotoktp = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_fotokk !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_fotokk, "namafile_fotokk");
			modeldata.namafile_fotokk = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.extensiimg_fotokk !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.extensiimg_fotokk, "extensiimg_fotokk");
			modeldata.extensiimg_fotokk = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_ftopasangan !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_ftopasangan, "namafile_ftopasangan");
			modeldata.namafile_ftopasangan = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.extensiimg_ftopasangan !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.extensiimg_ftopasangan, "extensiimg_ftopasangan");
			modeldata.extensiimg_ftopasangan = fileInfo.filepath;
		}
		
        // move uploaded file from temp directory to destination directory
		if(modeldata.namafile_fotottdnas !== undefined) {
			let fileInfo = utils.moveUploadedFiles(modeldata.namafile_fotottdnas, "namafile_fotottdnas");
			modeldata.namafile_fotottdnas = fileInfo.filepath;
		}
		let query = {};
		let where = {};
		where['id_nasabah'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Nasabah_Dataumum.editFields();
		let record = await Nasabah_Dataumum.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Nasabah_Dataumum.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Nasabah_Dataumum record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /nasabah_dataumum/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['id_nasabah'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Nasabah_Dataumum.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Nasabah_Dataumum.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
