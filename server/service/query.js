
function getQuery(tableName) {
  return `SELECT * FROM system.${tableName} `;
}

function getByQuery2() {
  // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return `SELECT * FROM system.volunteers WHERE usernamevolenteers = ?`
}
function getByQuery5() {
  // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return `SELECT * FROM system.needies WHERE usernameneedies = ?`
}
function getByQuery6(tableName, key, column) {
  // return `SELECT ${column} FROM system.${tableName} WHERE ${key.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')} isActive = 1`;     
  return `SELECT ${column} FROM system.${tableName} WHERE ${key} = ?`
}
function getByQuery9(tableName, key, column) {
  return `SELECT ${column} FROM system.${tableName} WHERE ${key.map((key) => { return key + ' = ?' + ' AND ' }).toString().replace(',', ' ')} isActive = 1 limit 1`;
}
function linking(idcategorycolumn, categorytable, table, idcolumn, usernamecolumn) {
  return ` SELECT ${idcategorycolumn}  FROM system.${categorytable}  JOIN system.${table} 
      on system.${table}.${idcolumn} = system.${categorytable}.${idcolumn} 
       JOIN system.category 
   ON system.category.idcategory = system.${categorytable}.idcategory
   where system.${table}.${usernamecolumn}=? and system.category.namecategory=? `
}

function getByQuery3(tablename, key) {
  // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return ` SELECT * FROM system.${tablename} WHERE ${key} = ?`
}

function getByQuery7(tablename, key) {
  // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return ` SELECT namecategory FROM system.${tablename} WHERE ${key} = ?`
}

function getByQuery4(tablename, keys) {
  // return `SELECT * FROM system.${tableName} WHERE ${keys.map((key) => { return  key + ' = ?' +' AND '  }).toString().replace(',', ' ')}`;     
  return `SELECT DISTINCT idneedies,idcategory,idcategoryneedies FROM system.${tablename} WHERE ${keys} = ? and isActive = 1`
}
function join(table, usernametable, categorytable, idtable, isManager, num) {
  return `  SELECT * 
FROM system.users 
 JOIN system.${table} 
    on system.${table}.${usernametable} = system.users.username 
 JOIN system.${categorytable} 
ON system.${categorytable}.${idtable} = system.${table}.${idtable}
join system.category
on system.category.idcategory=system.${categorytable}.idcategory
WHERE ${categorytable}.isactive = ${num} 
    ${isManager ? '' : `AND system.category.idcategory = ? AND ${table}.${usernametable} != ?`}`;
}
function getAllLinking(){
  return `SELECT  uv.name,un.username,cn.namecategory
FROM system.users as un
 JOIN system.needies
    on system.needies.usernameneedies = un.username
 JOIN system.categoryneedies
ON system.categoryneedies.idneedies = system.needies.idneedies
join system.category as cn
on cn.idcategory=system.categoryneedies.idcategory
join system.linking as ln
on ln.idcategoryneedies=system.categoryneedies.idcategoryneedies
join system.categoryvolunteers
on ln.idcategoryvolunteers=system.categoryvolunteers.idcategoryvolunteers and system.categoryvolunteers.idcategory = cn.idcategory
join volunteers
on volunteers.idvolunteers=categoryvolunteers.idvolunteers
join users as uv
on uv.username= system.volunteers.usernamevolenteers 
join  linking as lv
on lv.idcategoryvolunteers=system.categoryvolunteers.idcategoryvolunteers
where ln.id=lv.id`
}


function getByQuery(tableName, keys) {
  return `SELECT * FROM system.${tableName} WHERE isActive = 1 ${keys.map((key) => { return ' AND ' + key + ' = ?' }).toString().replace(',', ' ')}`;
}
function addQuery(tableName, keys) {
  return `INSERT INTO system.${tableName} (${keys.map((key, i) => { return key })}) VALUES (${keys.map((i) => { return '?' })})`;
}

function updateQuery(tableName, keys) {
  return `UPDATE system.${tableName} SET ${keys.map((key, i) => { return key + '= ?' })} WHERE id = ? AND isActive = 1`;
}

function deleteQuery(tableName, column) {
  return `UPDATE system.${tableName} SET isactive=0 WHERE  ${column} = ?`;
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
  , getByQuery7,
  getByQuery9,
  join,
  linking,
  getAllLinking
}
