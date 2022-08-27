/** Express Server App
 * @module server/app
 * @requires express
 * @requires config - app configigurations
 * @requires path- path module
 * @requires cors- Enable cors for all routes
 * @requires auth/passport passport auth using JWTStrategy
 * @requires helpers/response Http Response Status Code
 */

const express = require("express");
const path = require("path");
const config = require("./config.js");
const cors = require("cors");

const app = express();

//set view engine use to return Html
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
require("./helpers/response")(app);
app.use(cors());
app.use(express.static(config.app.publicDir));
const passport = require("passport");
require("./helpers/passport-auth")(passport);
app.use(express.json()); // Parses json, multi-part (file), url-encoded
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

//login user and pass user to req.user object
app.use("/api", async (req, res, next) => {
	passport.authenticate("jwt", async (err, user, info) => {
		req.login(user, { session: false }, async (error) => {});
		return next();
	})(req, res, next);
});
// convert blank fields to null.
// trim string inputs
app.use((req, res, next) => {
	if (req.body) {
		const sanitizeInput = require("./helpers/sanitizeinput");
		sanitizeInput(req.body);
	}
	next();
});

//bind page route to the controllers
app.use("/api/home", require("./controllers/home.js"));
app.use("/api/components_data", require("./controllers/components_data.js"));
app.use("/api/fileuploader", require("./controllers/fileuploader.js"));
app.use("/api/s3uploader", require("./controllers/s3uploader.js"));
app.use("/api/auth", require("./controllers/auth.js"));

//protect all /api endpoints
app.use("/api", async (req, res, next) => {
	if (req.user) {
		return next(); //user is authenticated
	}
	return res.unauthorized();
});
app.use("/api/account", require("./controllers/account.js"));
app.use("/api/bank_daftarbank", require("./controllers/bank_daftarbank.js"));
app.use(
	"/api/credit_scoring_hasil",
	require("./controllers/credit_scoring_hasil.js")
);
app.use(
	"/api/credit_scoring_master",
	require("./controllers/credit_scoring_master.js")
);
app.use(
	"/api/dwhclone_actual_lo",
	require("./controllers/dwhclone_actual_lo.js")
);
app.use(
	"/api/informasi_lo_home",
	require("./controllers/informasi_lo_home.js")
);
app.use(
	"/api/dwhclone_detailnasabah",
	require("./controllers/dwhclone_detailnasabah.js")
);
app.use("/api/dwhclone_kre", require("./controllers/dwhclone_kre.js"));
app.use("/api/dwhclone_tab", require("./controllers/dwhclone_tab.js"));
app.use("/api/karyawan_bwpk", require("./controllers/karyawan_bwpk.js"));
app.use("/api/karyawan_cabang", require("./controllers/karyawan_cabang.js"));
app.use(
	"/api/karyawan_daftarteambymb",
	require("./controllers/karyawan_daftarteambymb.js")
);
app.use(
	"/api/karyawan_datatarget",
	require("./controllers/karyawan_datatarget.js")
);
app.use("/api/karyawan_jabatan", require("./controllers/karyawan_jabatan.js"));
app.use(
	"/api/karyawan_level_jabatan",
	require("./controllers/karyawan_level_jabatan.js")
);
app.use(
	"/api/karyawan_level_menubar",
	require("./controllers/karyawan_level_menubar.js")
);
app.use(
	"/api/karyawan_level_submenu",
	require("./controllers/karyawan_level_submenu.js")
);
app.use("/api/karyawan_login", require("./controllers/karyawan_login.js"));
app.use(
	"/api/karyawan_marketingprospek",
	require("./controllers/karyawan_marketingprospek.js")
);
app.use(
	"/api/karyawan_masterlevel",
	require("./controllers/karyawan_masterlevel.js")
);
app.use("/api/karyawan_menubar", require("./controllers/karyawan_menubar.js"));
app.use(
	"/api/karyawan_penggunaan",
	require("./controllers/karyawan_penggunaan.js")
);
app.use(
	"/api/karyawan_perusahaan",
	require("./controllers/karyawan_perusahaan.js")
);
app.use("/api/karyawan_profile", require("./controllers/karyawan_profile.js"));
app.use(
	"/api/karyawan_submenubar",
	require("./controllers/karyawan_submenubar.js")
);
app.use(
	"/api/karyawan_submenubar_inner",
	require("./controllers/karyawan_submenubar_inner.js")
);
app.use("/api/masterdata_agama", require("./controllers/masterdata_agama.js"));
app.use(
	"/api/masterdata_badanusaha",
	require("./controllers/masterdata_badanusaha.js")
);
app.use(
	"/api/masterdata_bidangusahabi",
	require("./controllers/masterdata_bidangusahabi.js")
);
app.use(
	"/api/masterdata_buktikepemilikan",
	require("./controllers/masterdata_buktikepemilikan.js")
);
app.use(
	"/api/masterdata_golongandebitur",
	require("./controllers/masterdata_golongandebitur.js")
);
app.use(
	"/api/masterdata_golongandebiturbi",
	require("./controllers/masterdata_golongandebiturbi.js")
);
app.use(
	"/api/masterdata_hubungandebiturdgbank",
	require("./controllers/masterdata_hubungandebiturdgbank.js")
);
app.use(
	"/api/masterdata_hubunganljk",
	require("./controllers/masterdata_hubunganljk.js")
);
app.use(
	"/api/masterdata_ikatan_agunan",
	require("./controllers/masterdata_ikatan_agunan.js")
);
app.use(
	"/api/masterdata_jenisagunan",
	require("./controllers/masterdata_jenisagunan.js")
);
app.use(
	"/api/masterdata_jenispenggunaan",
	require("./controllers/masterdata_jenispenggunaan.js")
);
app.use(
	"/api/masterdata_jenisusaha",
	require("./controllers/masterdata_jenisusaha.js")
);
app.use(
	"/api/masterdata_jnskreditslik",
	require("./controllers/masterdata_jnskreditslik.js")
);
app.use(
	"/api/masterdata_jnspenggunaanbi",
	require("./controllers/masterdata_jnspenggunaanbi.js")
);
app.use(
	"/api/masterdata_kab_kota",
	require("./controllers/masterdata_kab_kota.js")
);
app.use(
	"/api/masterdata_katdebiturslik",
	require("./controllers/masterdata_katdebiturslik.js")
);
app.use(
	"/api/masterdata_kecamatan",
	require("./controllers/masterdata_kecamatan.js")
);
app.use(
	"/api/masterdata_kelurahan",
	require("./controllers/masterdata_kelurahan.js")
);
app.use(
	"/api/masterdata_kodeketerkaitan",
	require("./controllers/masterdata_kodeketerkaitan.js")
);
app.use(
	"/api/masterdata_mandatoryfield",
	require("./controllers/masterdata_mandatoryfield.js")
);
app.use(
	"/api/masterdata_orientasipgnslik",
	require("./controllers/masterdata_orientasipgnslik.js")
);
app.use(
	"/api/masterdata_pendidikan",
	require("./controllers/masterdata_pendidikan.js")
);
app.use(
	"/api/masterdata_provinsi",
	require("./controllers/masterdata_provinsi.js")
);
app.use(
	"/api/masterdata_sandipenjamin",
	require("./controllers/masterdata_sandipenjamin.js")
);
app.use(
	"/api/masterdata_sektorekonomi",
	require("./controllers/masterdata_sektorekonomi.js")
);
app.use(
	"/api/masterdata_sektorekonomibi",
	require("./controllers/masterdata_sektorekonomibi.js")
);
app.use(
	"/api/masterdata_sifatkreditslik",
	require("./controllers/masterdata_sifatkreditslik.js")
);
app.use(
	"/api/masterdata_sifatpinjaman",
	require("./controllers/masterdata_sifatpinjaman.js")
);
app.use(
	"/api/masterdata_sumberpelunasan",
	require("./controllers/masterdata_sumberpelunasan.js")
);
app.use(
	"/api/masterdata_sumberpenghasilan",
	require("./controllers/masterdata_sumberpenghasilan.js")
);
app.use("/api/nasabah_account", require("./controllers/nasabah_account.js"));
app.use(
	"/api/nasabah_account_verification",
	require("./controllers/nasabah_account_verification.js")
);
app.use(
	"/api/nasabah_analisakkeuangan",
	require("./controllers/nasabah_analisakkeuangan.js")
);
app.use(
	"/api/nasabah_analisakkeuangan_gln",
	require("./controllers/nasabah_analisakkeuangan_gln.js")
);
app.use(
	"/api/nasabah_aspeklegalitas_gln",
	require("./controllers/nasabah_aspeklegalitas_gln.js")
);
app.use(
	"/api/nasabah_basepengajuan",
	require("./controllers/nasabah_basepengajuan.js")
);
app.use(
	"/api/nasabah_dataagunan",
	require("./controllers/nasabah_dataagunan.js")
);
app.use(
	"/api/nasabah_dataalamat",
	require("./controllers/nasabah_dataalamat.js")
);
app.use(
	"/api/nasabah_datakeluarga",
	require("./controllers/nasabah_datakeluarga.js")
);
app.use(
	"/api/nasabah_datakeuangan",
	require("./controllers/nasabah_datakeuangan.js")
);
app.use(
	"/api/nasabah_datapengajuan",
	require("./controllers/nasabah_datapengajuan.js")
);
app.use("/api/nasabah_dataslik", require("./controllers/nasabah_dataslik.js"));
app.use("/api/nasabah_dataumum", require("./controllers/nasabah_dataumum.js"));
app.use(
	"/api/nasabah_dtkeuangan_pdtetap",
	require("./controllers/nasabah_dtkeuangan_pdtetap.js")
);
app.use(
	"/api/nasabah_fileagunan",
	require("./controllers/nasabah_fileagunan.js")
);
app.use(
	"/api/nasabah_filedokumentasi",
	require("./controllers/nasabah_filedokumentasi.js")
);
app.use(
	"/api/nasabah_filekelengkapan",
	require("./controllers/nasabah_filekelengkapan.js")
);
app.use("/api/nasabah_fileslik", require("./controllers/nasabah_fileslik.js"));
app.use(
	"/api/nasabah_hubnasdgbank",
	require("./controllers/nasabah_hubnasdgbank.js")
);
app.use(
	"/api/nasabah_informasitambahan",
	require("./controllers/nasabah_informasitambahan.js")
);
app.use("/api/nasabah_karyawan", require("./controllers/nasabah_karyawan.js"));
app.use(
	"/api/nasabah_kelompokgln",
	require("./controllers/nasabah_kelompokgln.js")
);
app.use(
	"/api/nasabah_kelompokgln_nas",
	require("./controllers/nasabah_kelompokgln_nas.js")
);
app.use("/api/nasabah_lkn", require("./controllers/nasabah_lkn.js"));
app.use(
	"/api/nasabah_putusankredit",
	require("./controllers/nasabah_putusankredit.js")
);
app.use(
	"/api/nasabah_rekomendasi_manrisk",
	require("./controllers/nasabah_rekomendasi_manrisk.js")
);
app.use(
	"/api/nasabah_riwayat_update",
	require("./controllers/nasabah_riwayat_update.js")
);
app.use(
	"/api/nasabah_surveymarketing",
	require("./controllers/nasabah_surveymarketing.js")
);
app.use(
	"/api/nasabah_updatedireksi",
	require("./controllers/nasabah_updatedireksi.js")
);
app.use("/api/nasabah_updatekc", require("./controllers/nasabah_updatekc.js"));
app.use("/api/nasabah_updatemb", require("./controllers/nasabah_updatemb.js"));
app.use(
	"/api/pages_dashboard_daftardashbaord",
	require("./controllers/pages_dashboard_daftardashbaord.js")
);
app.use(
	"/api/pages_dashboard_jabatan",
	require("./controllers/pages_dashboard_jabatan.js")
);
app.use(
	"/api/pekerjaan_daftarpekerjaan",
	require("./controllers/pekerjaan_daftarpekerjaan.js")
);
app.use(
	"/api/pengajuan_historyhapus",
	require("./controllers/pengajuan_historyhapus.js")
);
app.use(
	"/api/produk_daftarproduk",
	require("./controllers/produk_daftarproduk.js")
);
app.use(
	"/api/produk_daftarproduk_bpr",
	require("./controllers/produk_daftarproduk_bpr.js")
);
app.use("/api/produk_index", require("./controllers/produk_index.js"));
app.use(
	"/api/produk_kodeintegrasi",
	require("./controllers/produk_kodeintegrasi.js")
);
app.use("/api/produk_sukubunga", require("./controllers/produk_sukubunga.js"));
app.use(
	"/api/produk_syaratproduk",
	require("./controllers/produk_syaratproduk.js")
);
app.use(
	"/api/prosesbisnis_flow",
	require("./controllers/prosesbisnis_flow.js")
);
app.use(
	"/api/prosesbisnis_flow_percabang",
	require("./controllers/prosesbisnis_flow_percabang.js")
);
app.use(
	"/api/prosesbisnis_flow_perlevel",
	require("./controllers/prosesbisnis_flow_perlevel.js")
);
app.use(
	"/api/view_daftar_ijinprinsip",
	require("./controllers/view_daftar_ijinprinsip.js")
);
app.use(
	"/api/view_daftarkaryawan",
	require("./controllers/view_daftarkaryawan.js")
);
app.use(
	"/api/view_detailnasabah",
	require("./controllers/view_detailnasabah.js")
);
app.use(
	"/api/view_jabatan_level",
	require("./controllers/view_jabatan_level.js")
);
app.use(
	"/api/view_jabatan_levelakses_childmenu",
	require("./controllers/view_jabatan_levelakses_childmenu.js")
);
app.use(
	"/api/view_jabatan_levelakses_mainmenu",
	require("./controllers/view_jabatan_levelakses_mainmenu.js")
);
app.use(
	"/api/view_jabatan_levelakses_submenu",
	require("./controllers/view_jabatan_levelakses_submenu.js")
);
app.use(
	"/api/view_karyawan_nasabah",
	require("./controllers/view_karyawan_nasabah.js")
);
app.use(
	"/api/view_marketing_prospek",
	require("./controllers/view_marketing_prospek.js")
);
app.use("/api/view_nasabah_gln", require("./controllers/view_nasabah_gln.js"));
app.use(
	"/api/view_nasabah_pengajuan",
	require("./controllers/view_nasabah_pengajuan.js")
);
app.use(
	"/api/view_produk_pengajuan",
	require("./controllers/view_produk_pengajuan.js")
);
app.use(
	"/api/view_produk_perbpr",
	require("./controllers/view_produk_perbpr.js")
);
app.use(
	"/api/view_produk_perbpr2",
	require("./controllers/view_produk_perbpr2.js")
);
app.use(
	"/api/view_pt_cabang_jabatan_karyawan",
	require("./controllers/view_pt_cabang_jabatan_karyawan.js")
);
app.use(
	"/api/view_r1_nasabah_pengajuan",
	require("./controllers/view_r1_nasabah_pengajuan.js")
);
app.use(
	"/api/view_userlog_penggunaan",
	require("./controllers/view_userlog_penggunaan.js")
);
app.use("/api/view_userlogin", require("./controllers/view_userlogin.js"));
app.use("/api/prospek", require("./controllers/prospek.js"));
app.use("/api/nasabah", require("./controllers/nasabah.js"));
app.use("/api/nasabah/pengajuan_baru", require("./controllers/pengajuan_baru.js")); 
app.get("*", function (req, res) {
	res.status(404).json("Page not found");
});

let port = 8060;
//start app
app.listen(port, () => {
	console.log("Server is up and running on port: " + port);
});
