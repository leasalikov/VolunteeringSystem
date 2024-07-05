
function getQuery(tableName) {
  return `SELECT * FROM sys.${tableName} `;
}
function deleteQuery(tableName, column) {
  return `UPDATE sys.${tableName} SET isactive=0 WHERE  ${column} = ?`;
}
function getByQuery1(tableName, key, column) { 
  return `SELECT ${column} FROM sys.${tableName} WHERE ${key} = ?`
}
function getByQuery(tableName, keys) {
  return `SELECT * FROM sys.${tableName} WHERE isActive = 1 ${keys.map((key) => { return ' AND ' + key + ' = ?' }).toString().replace(',', ' ')}`;
}
function addQuery(tableName, keys) {
  return `INSERT INTO sys.${tableName} (${keys.map((key, i) => { return key })}) VALUES (${keys.map((i) => { return '?' })})`;
}




function getUsersBy(table, usernametable, categorytable, idtable, isManager, num) {
  return `  SELECT * 
            FROM sys.users 
            JOIN sys.${table} on sys.${table}.${usernametable} = sys.users.username 
            JOIN sys.${categorytable} ON sys.${categorytable}.${idtable} = sys.${table}.${idtable}
            join sys.category on sys.category.idcategory=sys.${categorytable}.idcategory
            WHERE ${categorytable}.isactive = ${num} 
            ${isManager ? '' : `AND sys.category.idcategory = ? AND ${table}.${usernametable} != ?`}`;
}


function getAllLinking() {
  return `SELECT  uv.name,un.username,cn.namecategory
          FROM sys.users as un
          JOIN sys.needies on sys.needies.usernameneedies = un.username
          JOIN sys.categoryneedies ON sys.categoryneedies.idneedies = sys.needies.idneedies
          join sys.category as cn on cn.idcategory=sys.categoryneedies.idcategory
          join sys.linking as ln on ln.idcategoryneedies=sys.categoryneedies.idcategoryneedies
          join sys.categoryvolunteers on ln.idcategoryvolunteers=sys.categoryvolunteers.idcategoryvolunteers and sys.categoryvolunteers.idcategory = cn.idcategory
          join volunteers on volunteers.idvolunteers=categoryvolunteers.idvolunteers
          join users as uv on uv.username= sys.volunteers.usernamevolenteers 
          join  linking as lv on lv.idcategoryvolunteers=sys.categoryvolunteers.idcategoryvolunteers
          where ln.id=lv.id`
}
function linking(idcategorycolumn, categorytable, table, idcolumn, usernamecolumn) {
  return `  SELECT ${idcategorycolumn}  
            FROM sys.${categorytable} 
            JOIN sys.${table} on sys.${table}.${idcolumn} = sys.${categorytable}.${idcolumn} 
            JOIN sys.category ON sys.category.idcategory = sys.${categorytable}.idcategory
            where sys.${table}.${usernamecolumn}=? and sys.category.namecategory=? and ${categorytable}.isactive=1`
}

// function getByQuery5(table,usernametable) {
//   // return `SELECT * FROM sys.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
//   return `SELECT * FROM sys.${table} WHERE ${usernametable} = ?`
// }
// function getByQuery5() {
//   // return `SELECT * FROM sys.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
//   return `SELECT * FROM sys.needies WHERE usernameneedies = ?`
// }

// function getByQuery9(tableName, key, column) {
//   return `SELECT ${column} FROM sys.${tableName} WHERE ${key.map((key) => { return key + ' = ?' + ' AND ' }).toString().replace(',', ' ')} isActive = 1 limit 1`;
// }


// function getByQuery3(tablename, key) {
//   // return `SELECT * FROM sys.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
//   return ` SELECT * FROM sys.${tablename} WHERE ${key} = ?`
// }

// function getByQuery7(tablename, key) {
//   // return `SELECT * FROM sys.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
//   return ` SELECT namecategory FROM sys.${tablename} WHERE ${key} = ?`
// }

// function getByQuery4(tablename, keys) {
//   // return `SELECT * FROM sys.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
//   return `SELECT DISTINCT idneedies,idcategory,idcategoryneedies FROM sys.${tablename} WHERE ${keys} = ? and isActive = 1`
// }

// function updateQuery(tableName, keys) {
//   return `UPDATE sys.${tableName} SET ${keys.map((key, i) => { return key + '= ?' })} WHERE id = ? AND isActive = 1`;
// }



// function limit(tableName) {
//   return `SELECT * FROM sys.${tableName} LIMIT ? OFFSET ?;`
// }

export {
  getQuery,
  getByQuery,
  deleteQuery,
  addQuery,
  getByQuery1,
  getUsersBy,
  linking,
  getAllLinking
}
