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
 const Dataalamat = models.Nasabah_Dataalamat;
 const Dataumum = models.Nasabah_Dataumum;
 const Basepengajuan = models.Nasabah_Basepengajuan;
 const Datapengajuan = models.Nasabah_Datapengajuan;
 
 const sequelize = models.sequelize; // sequelize functions and operations
 const Op = models.Op; // sequelize query operators
 const filterByRaw = models.filterByRaw; // sequelize where condtion
 const dbRaw = sequelize.literal; // sequelize raw query expression


 /**
 * Route to insert Prospek record
 * @route {POST} /Prospek/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
  router.post('/add/:idkar' , 
  [
    // data umum
      body('nama').optional({nullable: true, checkFalsy: true}),
      body('no_ktp').optional({nullable: true, checkFalsy: true}),
      body('status_pernikahan').optional({nullable: true, checkFalsy: true}),
      body('namafile_fotoktp').optional({nullable: true, checkFalsy: true}).isNumeric(),
      body('namafile_fotokk').optional ({nullable: true, checkFalsy: true}).isNumeric(),
      body('jenis_kelamin').optional({nullable: true, checkFalsy: true}),
      body('tempat_lahir').optional({nullable: true, checkFalsy: true}),
	    body('tgl_lahir').optional({nullable: true, checkFalsy: true}),
	    body('usia').optional({nullable: true, checkFalsy: true}).isNumeric(),
      body('pendidikan_terakhir').optional({nullable: true, checkFalsy: true}),
      body('nm_ibukandung').optional({nullable: true, checkFalsy: true}),
	    body('jm_anak_tanggungan').optional({nullable: true, checkFalsy: true}),
      // Data alamat
      body('alamat_ktp').optional({nullable: true, checkFalsy: true}),
      body('rt_rw').optional({nullable: true, checkFalsy: true}),
      body('desa_kelurahan').optional({nullable: true, checkFalsy: true}),
      body('kecamatan').optional({nullable: true, checkFalsy: true}),
      body('kabupaten_kota').optional({nullable: true, checkFalsy: true}),
      body('provinsi').optional({nullable: true, checkFalsy: true}),
      body('status_tptinggal').optional({nullable: true, checkFalsy: true}),
      // data pengajuan
      body('id_integrasi').optional({nullable: true, checkFalsy: true}).isNumeric(),
		  body('id_jenisproduk').optional({nullable: true, checkFalsy: true}).isNumeric(),
      body('jangkawaktu').optional({nullable: true, checkFalsy: true}).isNumeric(),
      body('tujuan_kredit').optional({nullable: true, checkFalsy: true}),

  ]
, async function (req, res) {
  try{
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
			const tgl_pengajuan = `${year}/${month}/${day}`;
			let nasabahExist = await Dataumum.findAll({
				where: {
					id_nasabah: {
						[Op.like]: `%${tanggal}%`,
					},
				},
				order: sequelize.literal("abs(id_nasabah) DESC"),
			});

			var id_nasabah;

			if (nasabahExist.length == 0) {
				id_nasabah = `${tanggal}1`;
			} else {
				var length = nasabahExist.length;
				var sub_plus = parseInt(length) + 1;
				id_nasabah = `${tanggal}${sub_plus}`;
			}
      let modeldata = req.body;
      
      let dataumum = {
        id_nasabah: id_nasabah,
        nama: req.body.nama,
        no_ktp: req.body.no_ktp,
        status_pernikahan: req.body.status_pernikahan,
        namafile_fotoktp: req.body.namafile_fotoktp,
        namafile_fotokk: req.body.namafile_fotokk,
        jenis_kelamin: req.body.jenis_kelamin,
        tempat_lahir: req.body.tempat_lahir,
        tgl_lahir: req.body.tgl_lahir,
        usia: req.body.usia,
        pendidikan_terakhir: req.body.pendidikan_terakhir,
        nm_ibukandung: req.body.nm_ibukandung,
        jm_anak_tanggungan: req.body.jm_anak_tanggungan,
        
      };
      await Dataumum.create(dataumum);
      

      let dataalamat = {
        id_nasabah: id_nasabah,
        alamat_ktp: req.body.alamat_ktp,
        rt_rw: req.body.rt_rw,
        desa_kelurahan: req.body.alamat_ktp,
        kecamatan: req.body.kecamatan,
        kabupaten_kota: req.body.kabupaten_kota,
        provinsi: req.body.provinsi,
        status_tptinggal: req.body.status_tptinggal,
      };

      await Dataalamat.create(dataalamat);

      //pengajuan field

      let pengajuanExist = await Basepengajuan.findAll({
				where: {
					id_pengajuan: {// potensi BUGS!!
						[Op.like]: `%${tanggal}%`,
					},
				},
				order: sequelize.literal("abs(id_nasabah) DESC"),
			});

      var id_pengajuan;

			if (pengajuanExist.length == 0) {
				id_pengajuan = `${tanggal}1`;
			} else {
				var length = pengajuanExist.length;
				var sub_plus = parseInt(length) + 1;
				id_pengajuan = `${tanggal}${sub_plus}`;
			}

      var id_pengajuan_int = BigInt(id_pengajuan);

      let basepengajuan = {
        id: id_pengajuan_int,
        id_pengajuan: id_pengajuan,
        tg_pengajuan: tgl_pengajuan,
        step_proses: "pengajuan_baru",
        id_nasabah: id_nasabah,
        idkar: req.params.idkar,
        jenis_pengajuan: "kredit",
        tipe_pengajuan: "pengajuan_baru"
      };
      await Basepengajuan.create(basepengajuan);

      let datapengajuan = {
        id_basepengajuan: id_pengajuan_int, //error insert, diff typedata
        id_nasabah: id_pengajuan,
        id_integrasi: req.body.id_integrasi,
        id_jenisproduk: req.body.id_jenisproduk,
        jangkawaktu: req.body.jangkawaktu,
        tujuan_kredit: req.body.tujuan_kredit,
        
      };
      await Datapengajuan.create(datapengajuan);
        



      //await record.reload(); //reload the record from database
      // let recid =  record['id'];
      
      return res.ok(dataumum);
  } catch(err){
      return res.serverError(err);
  }
});
module.exports = router;