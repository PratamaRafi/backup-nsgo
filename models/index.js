const Sequelize = require("sequelize");
const dbConfig = require("../config.js").database;

const sequelize = new Sequelize(
	dbConfig.name,
	dbConfig.username,
	dbConfig.password,
	{
		dialect: dbConfig.type,
		host: dbConfig.host,
		port: dbConfig.port,
		pool: {
			max: 15,
			min: 5,
			idle: 20000,
			evict: 15000,
			acquire: 30000,
		},
		define: {
			timestamps: false,
			freezeTableName: true,
		},
		operatorsAliases: 0,
	}
);

// Override timezone formatting
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
	return this._applyTimezone(date, options).format("YYYY-MM-DD HH:mm:ss");
};

const Bank_Daftarbank = require("./bank_daftarbank").init(sequelize, Sequelize);
const Credit_Scoring_Hasil = require("./credit_scoring_hasil").init(
	sequelize,
	Sequelize
);
const Credit_Scoring_Master = require("./credit_scoring_master").init(
	sequelize,
	Sequelize
);
const Dwhclone_Actual_Lo = require("./dwhclone_actual_lo").init(
	sequelize,
	Sequelize
);
const Informasi_Lo_Home = require("./informasi_lo_home").init(
	sequelize,
	Sequelize
);
const Prospek = require("./prospek").init(sequelize, Sequelize);
const Dataumum = require("./dataumum").init(sequelize, Sequelize);
const Dwhclone_Detailnasabah = require("./dwhclone_detailnasabah").init(
	sequelize,
	Sequelize
);
const Dwhclone_Kre = require("./dwhclone_kre").init(sequelize, Sequelize);
const Dwhclone_Tab = require("./dwhclone_tab").init(sequelize, Sequelize);
const Karyawan_Bwpk = require("./karyawan_bwpk").init(sequelize, Sequelize);
const Karyawan_Cabang = require("./karyawan_cabang").init(sequelize, Sequelize);
const Karyawan_Daftarteambymb = require("./karyawan_daftarteambymb").init(
	sequelize,
	Sequelize
);
const Karyawan_Datatarget = require("./karyawan_datatarget").init(
	sequelize,
	Sequelize
);
const Karyawan_Jabatan = require("./karyawan_jabatan").init(
	sequelize,
	Sequelize
);
const Karyawan_Level_Jabatan = require("./karyawan_level_jabatan").init(
	sequelize,
	Sequelize
);
const Karyawan_Level_Menubar = require("./karyawan_level_menubar").init(
	sequelize,
	Sequelize
);
const Karyawan_Level_Submenu = require("./karyawan_level_submenu").init(
	sequelize,
	Sequelize
);
const Karyawan_Login = require("./karyawan_login").init(sequelize, Sequelize);
const Karyawan_Marketingprospek = require("./karyawan_marketingprospek").init(
	sequelize,
	Sequelize
);
const Karyawan_Masterlevel = require("./karyawan_masterlevel").init(
	sequelize,
	Sequelize
);
const Karyawan_Menubar = require("./karyawan_menubar").init(
	sequelize,
	Sequelize
);
const Karyawan_Penggunaan = require("./karyawan_penggunaan").init(
	sequelize,
	Sequelize
);
const Karyawan_Perusahaan = require("./karyawan_perusahaan").init(
	sequelize,
	Sequelize
);
const Karyawan_Profile = require("./karyawan_profile").init(
	sequelize,
	Sequelize
);
const Karyawan_Submenubar = require("./karyawan_submenubar").init(
	sequelize,
	Sequelize
);
const Karyawan_Submenubar_Inner = require("./karyawan_submenubar_inner").init(
	sequelize,
	Sequelize
);
const Masterdata_Agama = require("./masterdata_agama").init(
	sequelize,
	Sequelize
);
const Masterdata_Badanusaha = require("./masterdata_badanusaha").init(
	sequelize,
	Sequelize
);
const Masterdata_Bidangusahabi = require("./masterdata_bidangusahabi").init(
	sequelize,
	Sequelize
);
const Masterdata_Buktikepemilikan =
	require("./masterdata_buktikepemilikan").init(sequelize, Sequelize);
const Masterdata_Golongandebitur = require("./masterdata_golongandebitur").init(
	sequelize,
	Sequelize
);
const Masterdata_Golongandebiturbi =
	require("./masterdata_golongandebiturbi").init(sequelize, Sequelize);
const Masterdata_Hubungandebiturdgbank =
	require("./masterdata_hubungandebiturdgbank").init(sequelize, Sequelize);
const Masterdata_Hubunganljk = require("./masterdata_hubunganljk").init(
	sequelize,
	Sequelize
);
const Masterdata_Ikatan_Agunan = require("./masterdata_ikatan_agunan").init(
	sequelize,
	Sequelize
);
const Masterdata_Jenisagunan = require("./masterdata_jenisagunan").init(
	sequelize,
	Sequelize
);
const Masterdata_Jenispenggunaan = require("./masterdata_jenispenggunaan").init(
	sequelize,
	Sequelize
);
const Masterdata_Jenisusaha = require("./masterdata_jenisusaha").init(
	sequelize,
	Sequelize
);
const Masterdata_Jnskreditslik = require("./masterdata_jnskreditslik").init(
	sequelize,
	Sequelize
);
const Masterdata_Jnspenggunaanbi = require("./masterdata_jnspenggunaanbi").init(
	sequelize,
	Sequelize
);
const Masterdata_Kab_Kota = require("./masterdata_kab_kota").init(
	sequelize,
	Sequelize
);
const Masterdata_Katdebiturslik = require("./masterdata_katdebiturslik").init(
	sequelize,
	Sequelize
);
const Masterdata_Kecamatan = require("./masterdata_kecamatan").init(
	sequelize,
	Sequelize
);
const Masterdata_Kelurahan = require("./masterdata_kelurahan").init(
	sequelize,
	Sequelize
);
const Masterdata_Kodeketerkaitan = require("./masterdata_kodeketerkaitan").init(
	sequelize,
	Sequelize
);
const Masterdata_Mandatoryfield = require("./masterdata_mandatoryfield").init(
	sequelize,
	Sequelize
);
const Masterdata_Orientasipgnslik =
	require("./masterdata_orientasipgnslik").init(sequelize, Sequelize);
const Masterdata_Pendidikan = require("./masterdata_pendidikan").init(
	sequelize,
	Sequelize
);
const Masterdata_Provinsi = require("./masterdata_provinsi").init(
	sequelize,
	Sequelize
);
const Masterdata_Sandipenjamin = require("./masterdata_sandipenjamin").init(
	sequelize,
	Sequelize
);
const Masterdata_Sektorekonomi = require("./masterdata_sektorekonomi").init(
	sequelize,
	Sequelize
);
const Masterdata_Sektorekonomibi = require("./masterdata_sektorekonomibi").init(
	sequelize,
	Sequelize
);
const Masterdata_Sifatkreditslik = require("./masterdata_sifatkreditslik").init(
	sequelize,
	Sequelize
);
const Masterdata_Sifatpinjaman = require("./masterdata_sifatpinjaman").init(
	sequelize,
	Sequelize
);
const Masterdata_Sumberpelunasan = require("./masterdata_sumberpelunasan").init(
	sequelize,
	Sequelize
);
const Masterdata_Sumberpenghasilan =
	require("./masterdata_sumberpenghasilan").init(sequelize, Sequelize);
const Nasabah_Account = require("./nasabah_account").init(sequelize, Sequelize);
const Nasabah_Account_Verification =
	require("./nasabah_account_verification").init(sequelize, Sequelize);
const Nasabah_Analisakkeuangan = require("./nasabah_analisakkeuangan").init(
	sequelize,
	Sequelize
);
const Nasabah_Analisakkeuangan_Gln =
	require("./nasabah_analisakkeuangan_gln").init(sequelize, Sequelize);
const Nasabah_Aspeklegalitas_Gln = require("./nasabah_aspeklegalitas_gln").init(
	sequelize,
	Sequelize
);
const Nasabah_Basepengajuan = require("./nasabah_basepengajuan").init(
	sequelize,
	Sequelize
);
const Nasabah_Dataagunan = require("./nasabah_dataagunan").init(
	sequelize,
	Sequelize
);
const Nasabah_Dataalamat = require("./nasabah_dataalamat").init(
	sequelize,
	Sequelize
);
const Nasabah_Datakeluarga = require("./nasabah_datakeluarga").init(
	sequelize,
	Sequelize
);
const Nasabah_Datakeuangan = require("./nasabah_datakeuangan").init(
	sequelize,
	Sequelize
);
const Nasabah_Datapengajuan = require("./nasabah_datapengajuan").init(
	sequelize,
	Sequelize
);
const Nasabah_Dataslik = require("./nasabah_dataslik").init(
	sequelize,
	Sequelize
);
const Nasabah_Dataumum = require("./nasabah_dataumum").init(
	sequelize,
	Sequelize
);
const Nasabah_Dtkeuangan_Pdtetap = require("./nasabah_dtkeuangan_pdtetap").init(
	sequelize,
	Sequelize
);
const Nasabah_Fileagunan = require("./nasabah_fileagunan").init(
	sequelize,
	Sequelize
);
const Nasabah_Filedokumentasi = require("./nasabah_filedokumentasi").init(
	sequelize,
	Sequelize
);
const Nasabah_Filekelengkapan = require("./nasabah_filekelengkapan").init(
	sequelize,
	Sequelize
);
const Nasabah_Fileslik = require("./nasabah_fileslik").init(
	sequelize,
	Sequelize
);
const Nasabah_Hubnasdgbank = require("./nasabah_hubnasdgbank").init(
	sequelize,
	Sequelize
);
const Nasabah_Informasitambahan = require("./nasabah_informasitambahan").init(
	sequelize,
	Sequelize
);
const Nasabah_Karyawan = require("./nasabah_karyawan").init(
	sequelize,
	Sequelize
);
const Nasabah_Kelompokgln = require("./nasabah_kelompokgln").init(
	sequelize,
	Sequelize
);
const Nasabah_Kelompokgln_Nas = require("./nasabah_kelompokgln_nas").init(
	sequelize,
	Sequelize
);
const Nasabah_Lkn = require("./nasabah_lkn").init(sequelize, Sequelize);
const Nasabah_Putusankredit = require("./nasabah_putusankredit").init(
	sequelize,
	Sequelize
);
const Nasabah_Rekomendasi_Manrisk =
	require("./nasabah_rekomendasi_manrisk").init(sequelize, Sequelize);
const Nasabah_Riwayat_Update = require("./nasabah_riwayat_update").init(
	sequelize,
	Sequelize
);
const Nasabah_Surveymarketing = require("./nasabah_surveymarketing").init(
	sequelize,
	Sequelize
);
const Nasabah_Updatedireksi = require("./nasabah_updatedireksi").init(
	sequelize,
	Sequelize
);
const Nasabah_Updatekc = require("./nasabah_updatekc").init(
	sequelize,
	Sequelize
);
const Nasabah_Updatemb = require("./nasabah_updatemb").init(
	sequelize,
	Sequelize
);
const Pages_Dashboard_Daftardashbaord =
	require("./pages_dashboard_daftardashbaord").init(sequelize, Sequelize);
const Pages_Dashboard_Jabatan = require("./pages_dashboard_jabatan").init(
	sequelize,
	Sequelize
);
const Pekerjaan_Daftarpekerjaan = require("./pekerjaan_daftarpekerjaan").init(
	sequelize,
	Sequelize
);
const Pengajuan_Historyhapus = require("./pengajuan_historyhapus").init(
	sequelize,
	Sequelize
);
const Produk_Daftarproduk = require("./produk_daftarproduk").init(
	sequelize,
	Sequelize
);
const Produk_Daftarproduk_Bpr = require("./produk_daftarproduk_bpr").init(
	sequelize,
	Sequelize
);
const Produk_Index = require("./produk_index").init(sequelize, Sequelize);
const Produk_Kodeintegrasi = require("./produk_kodeintegrasi").init(
	sequelize,
	Sequelize
);
const Produk_Sukubunga = require("./produk_sukubunga").init(
	sequelize,
	Sequelize
);
const Produk_Syaratproduk = require("./produk_syaratproduk").init(
	sequelize,
	Sequelize
);
const Prosesbisnis_Flow = require("./prosesbisnis_flow").init(
	sequelize,
	Sequelize
);
const Prosesbisnis_Flow_Percabang =
	require("./prosesbisnis_flow_percabang").init(sequelize, Sequelize);
const Prosesbisnis_Flow_Perlevel = require("./prosesbisnis_flow_perlevel").init(
	sequelize,
	Sequelize
);
const View_Daftar_Ijinprinsip = require("./view_daftar_ijinprinsip").init(
	sequelize,
	Sequelize
);
const View_Daftarkaryawan = require("./view_daftarkaryawan").init(
	sequelize,
	Sequelize
);
const View_Detailnasabah = require("./view_detailnasabah").init(
	sequelize,
	Sequelize
);
const View_Jabatan_Level = require("./view_jabatan_level").init(
	sequelize,
	Sequelize
);
const View_Jabatan_Levelakses_Childmenu =
	require("./view_jabatan_levelakses_childmenu").init(sequelize, Sequelize);
const View_Jabatan_Levelakses_Mainmenu =
	require("./view_jabatan_levelakses_mainmenu").init(sequelize, Sequelize);
const View_Jabatan_Levelakses_Submenu =
	require("./view_jabatan_levelakses_submenu").init(sequelize, Sequelize);
const View_Karyawan_Nasabah = require("./view_karyawan_nasabah").init(
	sequelize,
	Sequelize
);
const View_Marketing_Prospek = require("./view_marketing_prospek").init(
	sequelize,
	Sequelize
);
const View_Nasabah_Gln = require("./view_nasabah_gln").init(
	sequelize,
	Sequelize
);
const View_Nasabah_Pengajuan = require("./view_nasabah_pengajuan").init(
	sequelize,
	Sequelize
);
const View_Produk_Pengajuan = require("./view_produk_pengajuan").init(
	sequelize,
	Sequelize
);
const View_Produk_Perbpr = require("./view_produk_perbpr").init(
	sequelize,
	Sequelize
);
const View_Produk_Perbpr2 = require("./view_produk_perbpr2").init(
	sequelize,
	Sequelize
);
const View_Pt_Cabang_Jabatan_Karyawan =
	require("./view_pt_cabang_jabatan_karyawan").init(sequelize, Sequelize);
const View_R1_Nasabah_Pengajuan = require("./view_r1_nasabah_pengajuan").init(
	sequelize,
	Sequelize
);
const View_Userlog_Penggunaan = require("./view_userlog_penggunaan").init(
	sequelize,
	Sequelize
);
const View_Userlogin = require("./view_userlogin").init(sequelize, Sequelize);

const Op = Sequelize.Op;

const filterByRaw = function (expression, value) {
	return sequelize.where(sequelize.literal(expression), value);
};

module.exports = {
	sequelize,
	Op,
	filterByRaw,
	Bank_Daftarbank,
	Credit_Scoring_Hasil,
	Credit_Scoring_Master,
	Dwhclone_Actual_Lo,
	Informasi_Lo_Home,
	Prospek,
	Dataumum,
	Dwhclone_Detailnasabah,
	Dwhclone_Kre,
	Dwhclone_Tab,
	Karyawan_Bwpk,
	Karyawan_Cabang,
	Karyawan_Daftarteambymb,
	Karyawan_Datatarget,
	Karyawan_Jabatan,
	Karyawan_Level_Jabatan,
	Karyawan_Level_Menubar,
	Karyawan_Level_Submenu,
	Karyawan_Login,
	Karyawan_Marketingprospek,
	Karyawan_Masterlevel,
	Karyawan_Menubar,
	Karyawan_Penggunaan,
	Karyawan_Perusahaan,
	Karyawan_Profile,
	Karyawan_Submenubar,
	Karyawan_Submenubar_Inner,
	Masterdata_Agama,
	Masterdata_Badanusaha,
	Masterdata_Bidangusahabi,
	Masterdata_Buktikepemilikan,
	Masterdata_Golongandebitur,
	Masterdata_Golongandebiturbi,
	Masterdata_Hubungandebiturdgbank,
	Masterdata_Hubunganljk,
	Masterdata_Ikatan_Agunan,
	Masterdata_Jenisagunan,
	Masterdata_Jenispenggunaan,
	Masterdata_Jenisusaha,
	Masterdata_Jnskreditslik,
	Masterdata_Jnspenggunaanbi,
	Masterdata_Kab_Kota,
	Masterdata_Katdebiturslik,
	Masterdata_Kecamatan,
	Masterdata_Kelurahan,
	Masterdata_Kodeketerkaitan,
	Masterdata_Mandatoryfield,
	Masterdata_Orientasipgnslik,
	Masterdata_Pendidikan,
	Masterdata_Provinsi,
	Masterdata_Sandipenjamin,
	Masterdata_Sektorekonomi,
	Masterdata_Sektorekonomibi,
	Masterdata_Sifatkreditslik,
	Masterdata_Sifatpinjaman,
	Masterdata_Sumberpelunasan,
	Masterdata_Sumberpenghasilan,
	Nasabah_Account,
	Nasabah_Account_Verification,
	Nasabah_Analisakkeuangan,
	Nasabah_Analisakkeuangan_Gln,
	Nasabah_Aspeklegalitas_Gln,
	Nasabah_Basepengajuan,
	Nasabah_Dataagunan,
	Nasabah_Dataalamat,
	Nasabah_Datakeluarga,
	Nasabah_Datakeuangan,
	Nasabah_Datapengajuan,
	Nasabah_Dataslik,
	Nasabah_Dataumum,
	Nasabah_Dtkeuangan_Pdtetap,
	Nasabah_Fileagunan,
	Nasabah_Filedokumentasi,
	Nasabah_Filekelengkapan,
	Nasabah_Fileslik,
	Nasabah_Hubnasdgbank,
	Nasabah_Informasitambahan,
	Nasabah_Karyawan,
	Nasabah_Kelompokgln,
	Nasabah_Kelompokgln_Nas,
	Nasabah_Lkn,
	Nasabah_Putusankredit,
	Nasabah_Rekomendasi_Manrisk,
	Nasabah_Riwayat_Update,
	Nasabah_Surveymarketing,
	Nasabah_Updatedireksi,
	Nasabah_Updatekc,
	Nasabah_Updatemb,
	Pages_Dashboard_Daftardashbaord,
	Pages_Dashboard_Jabatan,
	Pekerjaan_Daftarpekerjaan,
	Pengajuan_Historyhapus,
	Produk_Daftarproduk,
	Produk_Daftarproduk_Bpr,
	Produk_Index,
	Produk_Kodeintegrasi,
	Produk_Sukubunga,
	Produk_Syaratproduk,
	Prosesbisnis_Flow,
	Prosesbisnis_Flow_Percabang,
	Prosesbisnis_Flow_Perlevel,
	View_Daftar_Ijinprinsip,
	View_Daftarkaryawan,
	View_Detailnasabah,
	View_Jabatan_Level,
	View_Jabatan_Levelakses_Childmenu,
	View_Jabatan_Levelakses_Mainmenu,
	View_Jabatan_Levelakses_Submenu,
	View_Karyawan_Nasabah,
	View_Marketing_Prospek,
	View_Nasabah_Gln,
	View_Nasabah_Pengajuan,
	View_Produk_Pengajuan,
	View_Produk_Perbpr,
	View_Produk_Perbpr2,
	View_Pt_Cabang_Jabatan_Karyawan,
	View_R1_Nasabah_Pengajuan,
	View_Userlog_Penggunaan,
	View_Userlogin,
};
