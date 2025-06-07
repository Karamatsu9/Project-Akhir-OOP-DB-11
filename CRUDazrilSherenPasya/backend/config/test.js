const connection = require('./database');
let siswa = [
      {
        nama: "M. Azril Ryan A.",
        NISN: 123085673,
        umur: 16,
        hobi: "bermain alat musik",
        status: "single",
      },
      {
        nama: "Sheren absen terakhir",
        NISN: 123085490,
        umur: 17,
        hobi: "bermain medsos",
        status: "???",
      },
      {
        nama: "pasya subardjo",
        NISN: 123085467,
        umur: 17,
        hobi: "bermain medsos",
        status: "abis putus"
      },
      {
        nama: "Dehaep habib F",
        NISN: 123082354,
        umur: 17,
        hobi: "bermain CODM",
        status: "jomblo"
      },
      {
        nama: "Fajar Nuringsang",
        NISN: 123084574,
        umur: 17,
        hobi: "bermain crypto",
        status: "LDR"
      },
      {
        nama: "Rafael Senior",
        NISN: 123023458,
        umur: 17,
        hobi: "bermain XY kromossom",
        status: "pacaran dengan 4+ cewek "
      },
      {
        nama: "Alfanso d'aboquerque",
        NISN: 123045457,
        umur: 17,
        hobi: "ngoding ",
        status: "pacar 1 cewek (Setia)"
      },
      {
        nama: "Iqbal Aqbil",
        NISN: 123045574,
        umur: 17,
        hobi: "main bloxfruit",
        status: "roblox"
      },

]
siswa.forEach((item) => {
    const { nama, NISN, umur, hobi, status } = item;
    const sql = `
        INSERT INTO siswa 
        (nama, NISN, umur, hobi, status) 
        VALUES (?, ?, ?, ?, ?)
    `;
    connection.query(sql, [nama, NISN, umur, hobi, status]);
});

// connection.query(`
  
//   `,)
/*

CREATE TABLE siswa (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama VARCHAR(245) NOT NULL,
  NISN INT,
  umur INT, 
  hobi VARCHAR(45),
  status VARCHAR(30)
);

*/
