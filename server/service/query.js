
function getQuery(tableName) {
    return `SELECT * FROM system.${tableName} WHERE isActive = 1`;
}
function getByQuery2() {
    // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return  `SELECT * FROM system.volunteers WHERE usernamevolenteers = ?`
} 
function getByQuery5() {
    // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return  `SELECT * FROM system.needies WHERE usernameneedies = ?`
} 
function getByQuery6(tableName,key,column) {
  // return `SELECT ${column} FROM system.${tableName} WHERE ${key.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')} isActive = 1`;     
return  `SELECT ${column} FROM system.${tableName} WHERE ${key} = ?`
}
function getByQuery9(tableName,key,column) {
  return `SELECT ${column} FROM system.${tableName} WHERE ${key.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')} isActive = 1 limit 1`;  
}
function getByQuery3(tablename, key) {
    // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return  ` SELECT * FROM system.${tablename} WHERE ${key} = ?`
} 

function getByQuery7(tablename, key) {
    // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return  ` SELECT namecategory FROM system.${tablename} WHERE ${key} = ?`
} 

function getByQuery4(tablename, keys) {
    // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return  `SELECT DISTINCT idneedies,idcategory,idcategoryneedies FROM system.${tablename} WHERE ${keys} = ? and isActive = 1`
} 

function getByQuery( tableName, keys) {
    return `SELECT * FROM system.${tableName} WHERE isActive = 1 ${keys.map((key) => { return ' AND '+ key + ' = ?'}).toString().replace(',', ' ')}`;     
}
function addQuery(tableName, keys) {
    return `INSERT INTO system.${tableName} (${keys.map((key, i) => { return key })}) VALUES (${keys.map((i) => { return '?' })})`;
}

function updateQuery(tableName, keys) {
    return `UPDATE system.${tableName} SET ${keys.map((key, i) => { return key + '= ?' })} WHERE id = ? AND isActive = 1`;
}

function deleteQuery(tableName) {
    return `UPDATE system.${tableName} SET isActive=0 WHERE isActive=1 AND id = ?`;
}

function limit(tableName) {
    return `SELECT * FROM system.${tableName} LIMIT ? OFFSET ?;`
}

export {
    getQuery,
    getByQuery,
    deleteQuery,
    addQuery,
    updateQuery,
    limit,
    getByQuery2,
    getByQuery3,
    getByQuery4, 
    getByQuery5,
    getByQuery6
    ,getByQuery7,
    getByQuery9
}
