/** Express router providing related routes to page component data
 *
 * @module routers/components_data
 * @module config - app config
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const models = require('../models/index.js');


const sequelize = models.sequelize;
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression


 /**
 * Route to get id_basepengajuan_option_list records
 * @route {GET} /components_data/id_basepengajuan_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/id_basepengajuan_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, id as label FROM nasabah_basepengajuan` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get idpt_option_list records
 * @route {GET} /components_data/idpt_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/idpt_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id_perusahaan as value, id_perusahaan as label FROM karyawan_perusahaan` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get id_mb_option_list records
 * @route {GET} /components_data/id_mb_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/id_mb_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, id as label FROM karyawan_profile` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get id_level_option_list records
 * @route {GET} /components_data/id_level_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/id_level_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, id as label FROM karyawan_masterlevel` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get id_menubar_option_list records
 * @route {GET} /components_data/id_menubar_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/id_menubar_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, id as label FROM karyawan_menubar` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get id_submenu_option_list records
 * @route {GET} /components_data/id_submenu_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/id_submenu_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, id as label FROM karyawan_submenubar` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Karyawan_Login table
 * @route {GET} /components_data/karyawan_login_username_exist/{fieldvalue}
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/karyawan_login_username_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await models.Karyawan_Login.count({ where:{ 'username': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get id_nasabah_option_list records
 * @route {GET} /components_data/id_nasabah_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/id_nasabah_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id_nasabah as value, id_nasabah as label FROM nasabah_dataumum` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get idprov_option_list records
 * @route {GET} /components_data/idprov_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/idprov_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, id as label FROM masterdata_provinsi` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});


 /**
 * Route to get id_dashboard_option_list records
 * @route {GET} /components_data/id_dashboard_option_list
 * @param {string} path - Express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/id_dashboard_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT id as value, id as label FROM pages_dashboard_daftardashbaord` ;
		let records = await sequelize.query(sqltext, { type: sequelize.QueryTypes.SELECT });
		return res.ok(records);
	}
	catch(err){
		console.error(err)
		return res.serverError(err);
	}
});
module.exports = router;
