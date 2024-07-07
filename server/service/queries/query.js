
function getQuery(tableName) {
  return `SELECT * FROM system.${tableName} `;
}
function deleteQuery(tableName, column) {
  return `UPDATE system.${tableName} SET isactive=0 WHERE  ${column} = ?`;
}
function getByQuery1(tableName, key, column) { 
  return `SELECT ${column} FROM system.${tableName} WHERE ${key} = ?`
}
function getByQuery(tableName, keys) {
  return `SELECT * FROM system.${tableName} WHERE isActive = 1 ${keys.map((key) => { return ' AND ' + key + ' = ?' }).toString().replace(',', ' ')}`;
}
function addQuery(tableName, keys) {
  return `INSERT INTO system.${tableName} (${keys.map((key, i) => { return key })}) VALUES (${keys.map((i) => { return '?' })})`;
}

export {
  getQuery,
  getByQuery,
  deleteQuery,
  addQuery,
  getByQuery1
}
