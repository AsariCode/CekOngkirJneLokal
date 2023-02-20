// import SQLite from 'react-native-sqlite-storage';

// SQLite.DEBUG(true);
// SQLite.enablePromise(true);

// const databaseName = 'MyAppDatabase.db';
// const databaseVersion = '1.0';
// const databaseDisplayName = 'MyApp Database';
// const databaseSize = 800000;


// const getDBConnection = async () => {
//   return SQLite.openDatabase(
//     databaseName,
//     databaseVersion,
//     databaseDisplayName,
//     databaseSize,
//     () => console.log('Database openedd'),
//     (error) => console.error(error)
//   );
// };

// const createTableOngkir = (db) => {
//   db.transaction((tx) => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS ongkir (id INTEGER PRIMARY KEY AUTOINCREMENT, prov TEXT, kab TEXT, kec TEXT, search_text TEXT, ongkir INTEGER)'
//     );
//   });
// };

// const saveToOngkir = async (data) => {
//   const db = await getDBConnection();
//   createTableOngkir(db);
//   data.forEach((record) => {
//     const { PROV, KAB, KEC, ONGKIR } = record;
//     db.transaction((tx) => {
//       const search_text = `Kec. ${KEC}, Kab. ${KAB}, Prov. ${PROV}`
//       console.log("search_text", search_text)
//       tx.executeSql(`SELECT * from ongkir where kec=? and kab=?`, [KEC, KAB], function (tx, res) {
//         console.log("Kec", KEC, "Kab", KAB, res.rows.length )
//         if (res.rows.length == 0) {
//           tx.executeSql('INSERT INTO ongkir (prov, kab, kec, search_text, ongkir) VALUES (?, ?, ?, ?, ?)', [PROV, KAB, KEC, search_text, ONGKIR]);
//         }
//       })
//     });
//   });
// };

// const deleteOngkir = async (search_text) => {
//   const db = await getDBConnection();
//   db.transaction((tx) => {
//     tx.executeSql(`DELETE FROM ongkir`, [], function (tx, res) {
//       console.log('item:', res);
//       return res
//     })
//   })
// };



// export default {
//   getDBConnection,
//   saveToOngkir,
//   deleteOngkir
// };