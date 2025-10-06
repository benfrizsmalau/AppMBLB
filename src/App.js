import React, { useState, useEffect } from 'react';
import { FileText } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [materialData, setMaterialData] = useState([]);
  const [sptpdData, setSptpdData] = useState({
    nomorSurat: '',
    masaPajak: '',
    tahun: '',
    namaWP: '',
    npwpd: '',
    alamat: '',
    namaProyek: '',
    nomorKontrak: '',
    opdPelaksana: '',
    terminPembayaran: '',
    materials: [],
    lampiran: {
      rab: false,
      boq: false,
      fikal: false
    },
    tanggalTTD: '',
    namaTTD: '',
    jabatanTTD: ''
  });

  const [nppdData, setNppdData] = useState({
    nomorNPPD: '',
    masaPajak: '',
    namaWP: '',
    npwpd: '',
    alamat: '',
    namaProyek: '',
    nomorKontrak: '',
    opdPelaksana: '',
    terminPembayaran: '',
    materials: [],
    tanggalNPPD: '',
    namaKepala: '',
    nipKepala: '',
    namaKabid: '',
    nipKabid: ''
  });

  useEffect(() => {
    loadMaterialData();
  }, []);

  const loadMaterialData = async () => {
    // Data lengkap 50 jenis material MBLB
    const materials = [
      { no: '1', nama: 'Pasir Urug / Pasir Sungai', satuan: 'm³', hargaPatokan: 150000, tarif: 20, hargaPajak: 30000 },
      { no: '2', nama: 'Batu Kali / Batu Gunung', satuan: 'm³', hargaPatokan: 200000, tarif: 20, hargaPajak: 40000 },
      { no: '3', nama: 'Kerikil / Batu Pecah', satuan: 'm³', hargaPatokan: 180000, tarif: 20, hargaPajak: 36000 },
      { no: '4', nama: 'Tanah Timbun', satuan: 'm³', hargaPatokan: 100000, tarif: 20, hargaPajak: 20000 },
      { no: '5', nama: 'Pasir Pasang', satuan: 'm³', hargaPatokan: 160000, tarif: 20, hargaPajak: 32000 },
      { no: '6', nama: 'Batu Belah', satuan: 'm³', hargaPatokan: 190000, tarif: 20, hargaPajak: 38000 },
      { no: '7', nama: 'Sirtu (Pasir Batu)', satuan: 'm³', hargaPatokan: 170000, tarif: 20, hargaPajak: 34000 },
      { no: '8', nama: 'Tanah Merah', satuan: 'm³', hargaPatokan: 120000, tarif: 20, hargaPajak: 24000 },
      { no: '9', nama: 'Agregat Kasar', satuan: 'm³', hargaPatokan: 185000, tarif: 20, hargaPajak: 37000 },
      { no: '10', nama: 'Agregat Halus', satuan: 'm³', hargaPatokan: 155000, tarif: 20, hargaPajak: 31000 },
      { no: '11', nama: 'Split', satuan: 'm³', hargaPatokan: 195000, tarif: 20, hargaPajak: 39000 },
      { no: '12', nama: 'Abu Batu', satuan: 'm³', hargaPatokan: 140000, tarif: 20, hargaPajak: 28000 },
      { no: '13', nama: 'Batu Pondasi', satuan: 'm³', hargaPatokan: 210000, tarif: 20, hargaPajak: 42000 },
      { no: '14', nama: 'Batu Koral', satuan: 'm³', hargaPatokan: 175000, tarif: 20, hargaPajak: 35000 },
      { no: '15', nama: 'Pasir Cor', satuan: 'm³', hargaPatokan: 165000, tarif: 20, hargaPajak: 33000 },
      { no: '16', nama: 'Pasir Beton', satuan: 'm³', hargaPatokan: 158000, tarif: 20, hargaPajak: 31600 },
      { no: '17', nama: 'Pasir Plester', satuan: 'm³', hargaPatokan: 152000, tarif: 20, hargaPajak: 30400 },
      { no: '18', nama: 'Batu Hias', satuan: 'm³', hargaPatokan: 250000, tarif: 20, hargaPajak: 50000 },
      { no: '19', nama: 'Batu Granit', satuan: 'm³', hargaPatokan: 300000, tarif: 20, hargaPajak: 60000 },
      { no: '20', nama: 'Batu Marmer', satuan: 'm³', hargaPatokan: 350000, tarif: 20, hargaPajak: 70000 },
      { no: '21', nama: 'Batu Andesit', satuan: 'm³', hargaPatokan: 220000, tarif: 20, hargaPajak: 44000 },
      { no: '22', nama: 'Batu Gamping', satuan: 'm³', hargaPatokan: 180000, tarif: 20, hargaPajak: 36000 },
      { no: '23', nama: 'Kapur', satuan: 'm³', hargaPatokan: 130000, tarif: 20, hargaPajak: 26000 },
      { no: '24', nama: 'Tanah Liat', satuan: 'm³', hargaPatokan: 110000, tarif: 20, hargaPajak: 22000 },
      { no: '25', nama: 'Lempung', satuan: 'm³', hargaPatokan: 115000, tarif: 20, hargaPajak: 23000 },
      { no: '26', nama: 'Tras', satuan: 'm³', hargaPatokan: 145000, tarif: 20, hargaPajak: 29000 },
      { no: '27', nama: 'Batu Apung', satuan: 'm³', hargaPatokan: 135000, tarif: 20, hargaPajak: 27000 },
      { no: '28', nama: 'Pasir Kuarsa', satuan: 'm³', hargaPatokan: 200000, tarif: 20, hargaPajak: 40000 },
      { no: '29', nama: 'Pasir Zirkon', satuan: 'm³', hargaPatokan: 280000, tarif: 20, hargaPajak: 56000 },
      { no: '30', nama: 'Pasir Besi', satuan: 'm³', hargaPatokan: 240000, tarif: 20, hargaPajak: 48000 },
      { no: '31', nama: 'Feldsfar', satuan: 'm³', hargaPatokan: 260000, tarif: 20, hargaPajak: 52000 },
      { no: '32', nama: 'Bentonit', satuan: 'm³', hargaPatokan: 225000, tarif: 20, hargaPajak: 45000 },
      { no: '33', nama: 'Dolomit', satuan: 'm³', hargaPatokan: 215000, tarif: 20, hargaPajak: 43000 },
      { no: '34', nama: 'Gips', satuan: 'm³', hargaPatokan: 195000, tarif: 20, hargaPajak: 39000 },
      { no: '35', nama: 'Batu Slate', satuan: 'm³', hargaPatokan: 270000, tarif: 20, hargaPajak: 54000 },
      { no: '36', nama: 'Batu Serpih', satuan: 'm³', hargaPatokan: 185000, tarif: 20, hargaPajak: 37000 },
      { no: '37', nama: 'Batu Sabak', satuan: 'm³', hargaPatokan: 230000, tarif: 20, hargaPajak: 46000 },
      { no: '38', nama: 'Oker', satuan: 'm³', hargaPatokan: 205000, tarif: 20, hargaPajak: 41000 },
      { no: '39', nama: 'Pasir Gunung', satuan: 'm³', hargaPatokan: 148000, tarif: 20, hargaPajak: 29600 },
      { no: '40', nama: 'Kerikil Sungai', satuan: 'm³', hargaPatokan: 172000, tarif: 20, hargaPajak: 34400 },
      { no: '41', nama: 'Batu Candi', satuan: 'm³', hargaPatokan: 320000, tarif: 20, hargaPajak: 64000 },
      { no: '42', nama: 'Batu Alam', satuan: 'm³', hargaPatokan: 235000, tarif: 20, hargaPajak: 47000 },
      { no: '43', nama: 'Pasir Vulkanik', satuan: 'm³', hargaPatokan: 168000, tarif: 20, hargaPajak: 33600 },
      { no: '44', nama: 'Tanah Urugan', satuan: 'm³', hargaPatokan: 105000, tarif: 20, hargaPajak: 21000 },
      { no: '45', nama: 'Material Galian C Lainnya', satuan: 'm³', hargaPatokan: 150000, tarif: 20, hargaPajak: 30000 },
      { no: '46', nama: 'Batu Belah Ukuran 10-20 cm', satuan: 'm³', hargaPatokan: 198000, tarif: 20, hargaPajak: 39600 },
      { no: '47', nama: 'Batu Belah Ukuran 20-30 cm', satuan: 'm³', hargaPatokan: 205000, tarif: 20, hargaPajak: 41000 },
      { no: '48', nama: 'Screening (Abu Batu Halus)', satuan: 'm³', hargaPatokan: 142000, tarif: 20, hargaPajak: 28400 },
      { no: '49', nama: 'Base Course (Agregat Kelas A)', satuan: 'm³', hargaPatokan: 188000, tarif: 20, hargaPajak: 37600 },
      { no: '50', nama: 'Sub Base Course (Agregat Kelas B)', satuan: 'm³', hargaPatokan: 178000, tarif: 20, hargaPajak: 35600 }
    ];
    
    setMaterialData(materials);
  };

  const addMaterialSPTPD = () => {
    setSptpdData({
      ...sptpdData,
      materials: [...sptpdData.materials, { jenis: '', volume: 0, hargaPatokan: 0, dpp: 0 }]
    });
  };

  const removeMaterialSPTPD = (index) => {
    const newMaterials = sptpdData.materials.filter((_, i) => i !== index);
    setSptpdData({ ...sptpdData, materials: newMaterials });
  };

  const updateMaterialSPTPD = (index, field, value) => {
    const newMaterials = [...sptpdData.materials];
    
    if (field === 'jenis') {
      const selectedMaterial = materialData.find(m => m.nama === value);
      newMaterials[index] = {
        ...newMaterials[index],
        jenis: value,
        hargaPatokan: selectedMaterial ? selectedMaterial.hargaPatokan : 0,
        dpp: (newMaterials[index].volume || 0) * (selectedMaterial ? selectedMaterial.hargaPatokan : 0)
      };
    } else if (field === 'volume') {
      const vol = parseFloat(value) || 0;
      newMaterials[index] = {
        ...newMaterials[index],
        volume: vol,
        dpp: vol * (newMaterials[index].hargaPatokan || 0)
      };
    }
    
    setSptpdData({ ...sptpdData, materials: newMaterials });
  };

  const calculateTotalDPP = (materials) => {
    return materials.reduce((sum, m) => sum + (m.dpp || 0), 0);
  };

  const calculatePajak = (dpp) => {
    return dpp * 0.2;
  };

  const numberToWords = (num) => {
    const ones = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    const teens = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    const tens = ['', '', 'dua puluh', 'tiga puluh', 'empat puluh', 'lima puluh', 'enam puluh', 'tujuh puluh', 'delapan puluh', 'sembilan puluh'];
    
    if (num === 0) return 'nol rupiah';
    if (num < 10) return ones[num] + ' rupiah';
    if (num < 20) return teens[num - 10] + ' rupiah';
    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + ones[num % 10] : '') + ' rupiah';
    if (num < 1000) return (num === 100 ? 'seratus' : ones[Math.floor(num / 100)] + ' ratus') + (num % 100 !== 0 ? ' ' + numberToWords(num % 100).replace(' rupiah', '') : '') + ' rupiah';
    if (num < 1000000) return (num === 1000 ? 'seribu' : numberToWords(Math.floor(num / 1000)).replace(' rupiah', '') + ' ribu') + (num % 1000 !== 0 ? ' ' + numberToWords(num % 1000).replace(' rupiah', '') : '') + ' rupiah';
    if (num < 1000000000) return numberToWords(Math.floor(num / 1000000)).replace(' rupiah', '') + ' juta' + (num % 1000000 !== 0 ? ' ' + numberToWords(num % 1000000).replace(' rupiah', '') : '') + ' rupiah';
    return 'lebih dari satu miliar rupiah';
  };

  const copyToNPPD = () => {
    setNppdData({
      ...nppdData,
      namaWP: sptpdData.namaWP,
      npwpd: sptpdData.npwpd,
      alamat: sptpdData.alamat,
      namaProyek: sptpdData.namaProyek,
      nomorKontrak: sptpdData.nomorKontrak,
      opdPelaksana: sptpdData.opdPelaksana,
      terminPembayaran: sptpdData.terminPembayaran,
      masaPajak: sptpdData.masaPajak,
      materials: sptpdData.materials.map(m => ({...m}))
    });
    setCurrentPage('nppd');
  };

  const printSPTPD = () => {
    window.print();
  };

  const printNPPD = () => {
    window.print();
  };

  // Home Page
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Aplikasi Form Pajak MBLB</h1>
            <p className="text-gray-600">Pemerintah Kabupaten Mamberamo Raya</p>
            <p className="text-sm text-gray-500 mt-2">Badan Pendapatan Pengelolaan Keuangan dan Aset Daerah</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => setCurrentPage('sptpd')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 flex flex-col items-center"
            >
              <FileText size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">SPTPD</h2>
              <p className="text-sm text-blue-100 text-center">Surat Pemberitahuan Pajak Daerah</p>
            </button>
            
            <button
              onClick={() => setCurrentPage('nppd')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 flex flex-col items-center"
            >
              <FileText size={48} className="mb-4" />
              <h2 className="text-2xl font-bold mb-2">NPPD</h2>
              <p className="text-sm text-green-100 text-center">Nota Perhitungan Pajak Daerah</p>
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Informasi:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Data material otomatis dari database ({materialData.length} jenis)</li>
              <li>• Perhitungan pajak otomatis (Tarif 20%)</li>
              <li>• Format print sesuai standar</li>
              <li>• Data dapat dipindahkan dari SPTPD ke NPPD</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const SPTPDPage = () => (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setCurrentPage('home')}
          className="mb-4 bg-gray-600 text-white px-4 py-2 rounded no-print"
        >
          ← Kembali ke Beranda
        </button>

        <div className="bg-white border-2 border-gray-300 shadow-lg">
          <div className="bg-gray-800 text-white p-4 text-center">
            <h1 className="text-2xl font-bold">SURAT PEMBERITAHUAN PAJAK DAERAH</h1>
            <p className="text-sm">SPTPD - MATERIAL GALIAN C</p>
          </div>

          <div className="p-6">
            <table className="w-full border-collapse border border-gray-400 mb-6">
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold w-1/3">Nomor Surat</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.nomorSurat}
                      onChange={(e) => setSptpdData({ ...sptpdData, nomorSurat: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Masukkan nomor surat"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Masa Pajak</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.masaPajak}
                      onChange={(e) => setSptpdData({ ...sptpdData, masaPajak: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Contoh: Januari"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Tahun</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.tahun}
                      onChange={(e) => setSptpdData({ ...sptpdData, tahun: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="2024"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nama Wajib Pajak</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.namaWP}
                      onChange={(e) => setSptpdData({ ...sptpdData, namaWP: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nama lengkap"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">NPWPD</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.npwpd}
                      onChange={(e) => setSptpdData({ ...sptpdData, npwpd: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nomor NPWPD"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Alamat</td>
                  <td className="border border-gray-400 p-3">
                    <textarea
                      value={sptpdData.alamat}
                      onChange={(e) => setSptpdData({ ...sptpdData, alamat: e.target.value })}
                      rows="3"
                      className="w-full border-none outline-none resize-none"
                      placeholder="Alamat lengkap"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nama Proyek</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.namaProyek}
                      onChange={(e) => setSptpdData({ ...sptpdData, namaProyek: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nama proyek"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nomor Kontrak</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.nomorKontrak}
                      onChange={(e) => setSptpdData({ ...sptpdData, nomorKontrak: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nomor kontrak"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">OPD Pelaksana</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.opdPelaksana}
                      onChange={(e) => setSptpdData({ ...sptpdData, opdPelaksana: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="OPD pelaksana"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Termin Pembayaran</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={sptpdData.terminPembayaran}
                      onChange={(e) => setSptpdData({ ...sptpdData, terminPembayaran: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Termin pembayaran"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 bg-gray-200 p-2 border border-gray-400">DAFTAR MATERIAL GALIAN C</h3>
              <table className="w-full border-collapse border border-gray-400 mb-4">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="border border-gray-400 p-2 text-left font-bold">No</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">Jenis Material</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">Volume (m³)</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">Harga Patokan (Rp)</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">DPP (Rp)</th>
                    <th className="border border-gray-400 p-2 text-left font-bold no-print">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {sptpdData.materials.map((material, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 p-2 text-center">{index + 1}</td>
                      <td className="border border-gray-400 p-2">
                        <select
                          value={material.jenis}
                          onChange={(e) => updateMaterialSPTPD(index, 'jenis', e.target.value)}
                          className="w-full border-none outline-none"
                        >
                          <option value="">Pilih Material</option>
                          {materialData.map((mat) => (
                            <option key={mat.no} value={mat.nama}>{mat.nama}</option>
                          ))}
                        </select>
                      </td>
                      <td className="border border-gray-400 p-2">
                        <input
                          type="number"
                          value={material.volume}
                          onChange={(e) => updateMaterialSPTPD(index, 'volume', e.target.value)}
                          className="w-full border-none outline-none text-right"
                          min="0"
                          step="0.01"
                          placeholder="0.00"
                        />
                      </td>
                      <td className="border border-gray-400 p-2 text-right">
                        {material.hargaPatokan.toLocaleString('id-ID')}
                      </td>
                      <td className="border border-gray-400 p-2 text-right font-bold">
                        {material.dpp.toLocaleString('id-ID')}
                      </td>
                      <td className="border border-gray-400 p-2 text-center no-print">
                        <button
                          type="button"
                          onClick={() => removeMaterialSPTPD(index)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center no-print">
                <button
                  type="button"
                  onClick={addMaterialSPTPD}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  + Tambah Material
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <table className="w-full border-collapse border border-gray-400">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 p-3 bg-gray-100 font-semibold w-1/2">Tanggal TTD</td>
                      <td className="border border-gray-400 p-3">
                        <input
                          type="date"
                          value={sptpdData.tanggalTTD}
                          onChange={(e) => setSptpdData({ ...sptpdData, tanggalTTD: e.target.value })}
                          className="w-full border-none outline-none"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nama Penandatangan</td>
                      <td className="border border-gray-400 p-3">
                        <input
                          type="text"
                          value={sptpdData.namaTTD}
                          onChange={(e) => setSptpdData({ ...sptpdData, namaTTD: e.target.value })}
                          className="w-full border-none outline-none"
                          placeholder="Nama penandatangan"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Jabatan</td>
                      <td className="border border-gray-400 p-3">
                        <input
                          type="text"
                          value={sptpdData.jabatanTTD}
                          onChange={(e) => setSptpdData({ ...sptpdData, jabatanTTD: e.target.value })}
                          className="w-full border-none outline-none"
                          placeholder="Jabatan penandatangan"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="border-2 border-gray-400 p-4">
                  <h4 className="font-bold text-center mb-4 bg-gray-200 p-2 border border-gray-400">PERHITUNGAN PAJAK</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-gray-300 pb-1">
                      <span>Total DPP:</span>
                      <span className="font-bold">Rp {calculateTotalDPP(sptpdData.materials).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pajak Terutang (20%):</span>
                      <span className="font-bold text-lg">Rp {calculatePajak(calculateTotalDPP(sptpdData.materials)).toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between no-print mt-6 pt-4 border-t-2 border-gray-400">
              <button
                type="button"
                onClick={copyToNPPD}
                className="bg-green-600 text-white px-6 py-2 rounded border border-gray-600"
              >
                Salin ke NPPD
              </button>
              <button
                type="button"
                onClick={printSPTPD}
                className="bg-blue-600 text-white px-6 py-2 rounded border border-gray-600"
              >
                Cetak SPTPD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NPPDPage = () => (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => setCurrentPage('home')}
          className="mb-4 bg-gray-600 text-white px-4 py-2 rounded no-print"
        >
          ← Kembali ke Beranda
        </button>

        <div className="bg-white border-2 border-gray-300 shadow-lg">
          <div className="bg-gray-800 text-white p-4 text-center">
            <h1 className="text-2xl font-bold">NOTA PERHITUNGAN PAJAK DAERAH</h1>
            <p className="text-sm">NPPD - MATERIAL GALIAN C</p>
          </div>

          <div className="p-6">
            <table className="w-full border-collapse border border-gray-400 mb-6">
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold w-1/3">Nomor NPPD</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.nomorNPPD}
                      onChange={(e) => setNppdData({ ...nppdData, nomorNPPD: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Masukkan nomor NPPD"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Masa Pajak</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.masaPajak}
                      onChange={(e) => setNppdData({ ...nppdData, masaPajak: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Contoh: Januari"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Tanggal NPPD</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="date"
                      value={nppdData.tanggalNPPD}
                      onChange={(e) => setNppdData({ ...nppdData, tanggalNPPD: e.target.value })}
                      className="w-full border-none outline-none"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nama Wajib Pajak</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.namaWP}
                      onChange={(e) => setNppdData({ ...nppdData, namaWP: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nama lengkap"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">NPWPD</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.npwpd}
                      onChange={(e) => setNppdData({ ...nppdData, npwpd: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nomor NPWPD"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Alamat</td>
                  <td className="border border-gray-400 p-3">
                    <textarea
                      value={nppdData.alamat}
                      onChange={(e) => setNppdData({ ...nppdData, alamat: e.target.value })}
                      rows="3"
                      className="w-full border-none outline-none resize-none"
                      placeholder="Alamat lengkap"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nama Proyek</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.namaProyek}
                      onChange={(e) => setNppdData({ ...nppdData, namaProyek: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nama proyek"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nomor Kontrak</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.nomorKontrak}
                      onChange={(e) => setNppdData({ ...nppdData, nomorKontrak: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Nomor kontrak"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">OPD Pelaksana</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.opdPelaksana}
                      onChange={(e) => setNppdData({ ...nppdData, opdPelaksana: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="OPD pelaksana"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Termin Pembayaran</td>
                  <td className="border border-gray-400 p-3">
                    <input
                      type="text"
                      value={nppdData.terminPembayaran}
                      onChange={(e) => setNppdData({ ...nppdData, terminPembayaran: e.target.value })}
                      className="w-full border-none outline-none"
                      placeholder="Termin pembayaran"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mb-6">
              <h3 className="text-lg font-bold mb-4 bg-gray-200 p-2 border border-gray-400">DAFTAR MATERIAL GALIAN C</h3>
              <table className="w-full border-collapse border border-gray-400 mb-4">
                <thead>
                  <tr className="bg-gray-300">
                    <th className="border border-gray-400 p-2 text-left font-bold">No</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">Jenis Material</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">Volume (m³)</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">Harga Patokan (Rp)</th>
                    <th className="border border-gray-400 p-2 text-left font-bold">DPP (Rp)</th>
                  </tr>
                </thead>
                <tbody>
                  {nppdData.materials.map((material, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 p-2 text-center">{index + 1}</td>
                      <td className="border border-gray-400 p-2">{material.jenis}</td>
                      <td className="border border-gray-400 p-2 text-right">{material.volume}</td>
                      <td className="border border-gray-400 p-2 text-right">{material.hargaPatokan.toLocaleString('id-ID')}</td>
                      <td className="border border-gray-400 p-2 text-right font-bold">{material.dpp.toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <table className="w-full border-collapse border border-gray-400">
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 p-3 bg-gray-100 font-semibold w-1/2">Nama Kepala</td>
                      <td className="border border-gray-400 p-3">
                        <input
                          type="text"
                          value={nppdData.namaKepala}
                          onChange={(e) => setNppdData({ ...nppdData, namaKepala: e.target.value })}
                          className="w-full border-none outline-none"
                          placeholder="Nama kepala"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">NIP Kepala</td>
                      <td className="border border-gray-400 p-3">
                        <input
                          type="text"
                          value={nppdData.nipKepala}
                          onChange={(e) => setNppdData({ ...nppdData, nipKepala: e.target.value })}
                          className="w-full border-none outline-none"
                          placeholder="NIP kepala"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">Nama Kabid</td>
                      <td className="border border-gray-400 p-3">
                        <input
                          type="text"
                          value={nppdData.namaKabid}
                          onChange={(e) => setNppdData({ ...nppdData, namaKabid: e.target.value })}
                          className="w-full border-none outline-none"
                          placeholder="Nama kabid"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3 bg-gray-100 font-semibold">NIP Kabid</td>
                      <td className="border border-gray-400 p-3">
                        <input
                          type="text"
                          value={nppdData.nipKabid}
                          onChange={(e) => setNppdData({ ...nppdData, nipKabid: e.target.value })}
                          className="w-full border-none outline-none"
                          placeholder="NIP kabid"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <div className="border-2 border-gray-400 p-4">
                  <h4 className="font-bold text-center mb-4 bg-gray-200 p-2 border border-gray-400">PERHITUNGAN PAJAK</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-gray-300 pb-1">
                      <span>Total DPP:</span>
                      <span className="font-bold">Rp {calculateTotalDPP(nppdData.materials).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Pajak Terutang (20%):</span>
                      <span className="font-bold text-lg">Rp {calculatePajak(calculateTotalDPP(nppdData.materials)).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="mt-4 pt-2 border-t border-gray-300">
                      <div className="font-semibold mb-1">Terbilang:</div>
                      <div className="text-sm italic">
                        {numberToWords(calculatePajak(calculateTotalDPP(nppdData.materials)))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center no-print mt-6 pt-4 border-t-2 border-gray-400">
              <button
                type="button"
                onClick={printNPPD}
                className="bg-blue-600 text-white px-6 py-2 rounded border border-gray-600"
              >
                Cetak NPPD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
        `}
      </style>
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'sptpd' && <SPTPDPage />}
      {currentPage === 'nppd' && <NPPDPage />}
    </>
  );
};

export default App;
