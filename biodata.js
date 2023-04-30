let biodata = {
  nama: "Priscillia",
  tanggal: "10 Oktober 2005",
  tinggi: "152cm",
  jenis: "Perempuan",
  negara: "Indonesia",
  pekerjaan: "Pelajar (SMA)",
  status: "Belum Menikah",
  goldarah: "AB",
  agama: "Katolik",
  alamat: "Apartment MOI, Kelapa Gading, Jakarta Utara",
  nomor: "08118131010",
  email: "priscilcandra.98@gmail.com",
  hobi: ["Basket", " Coding", " Olahraga"],
};

let pendidikan = {
  tk: "Ecole Children's House",
  sd: "Mahatma Gading School",
  smp: "Mahatma Gading School",
  sma: "Mahatma Gading School jurusan IPA",
  kuliah: "Binus University jurusan Computer Science",
};

let gabungan = {
  ...biodata,
  ...pendidikan,
};

console.log(`
BIODATA 

1. Nama: ${gabungan.nama}

2. Tanggal Lahir: ${gabungan.tanggal}

3. Tinggi Badan: ${gabungan.tinggi}

4. Jenis Kelamin: ${gabungan.jenis}

5. Asal Negara: ${gabungan.negara}

6. Pekerjaan: ${gabungan.pekerjaan}

7. Status: ${gabungan.status}

8. Golongan Darah: ${gabungan.goldarah}

9. Agama: ${gabungan.agama}

10. Alamat: ${gabungan.alamat}

11. Nomor Telefon: ${gabungan.nomor}

12. Email: ${gabungan.email}

13. Hobi: ${gabungan.hobi}


PENDIDIKAN

1. TK: ${gabungan.tk}

2. SD: ${gabungan.sd}

3. SMP: ${gabungan.smp}

4. SMA: ${gabungan.sma}

5. Rencana Kuliah: ${gabungan.kuliah}
`);
