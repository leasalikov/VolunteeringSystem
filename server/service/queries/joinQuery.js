
function getUsersBy(table, usernametable, categorytable, idtable, isManager, num) {
    return `  SELECT * 
              FROM system.users 
              JOIN system.${table} on system.${table}.${usernametable} = system.users.username 
              JOIN system.${categorytable} ON system.${categorytable}.${idtable} = system.${table}.${idtable}
              join system.category on system.category.idcategory=system.${categorytable}.idcategory
              WHERE ${categorytable}.isactive = ${num} 
              ${isManager ? '' : `AND system.category.idcategory = ? AND ${table}.${usernametable} != ?`}`;
}

function getAllLinking() {
    return `SELECT  uv.name,un.username,cn.namecategory
            FROM system.users as un
            JOIN system.needies on system.needies.usernameneedies = un.username
            JOIN system.categoryneedies ON system.categoryneedies.idneedies = system.needies.idneedies
            join system.category as cn on cn.idcategory=system.categoryneedies.idcategory
            join system.linking as ln on ln.idcategoryneedies=system.categoryneedies.idcategoryneedies
            join system.categoryvolunteers on ln.idcategoryvolunteers=system.categoryvolunteers.idcategoryvolunteers and system.categoryvolunteers.idcategory = cn.idcategory
            join volunteers on volunteers.idvolunteers=categoryvolunteers.idvolunteers
            join users as uv on uv.username= system.volunteers.usernamevolenteers 
            join  linking as lv on lv.idcategoryvolunteers=system.categoryvolunteers.idcategoryvolunteers
            where ln.id=lv.id`
}

function linking(idcategorycolumn, categorytable, table, idcolumn, usernamecolumn) {
    return `  SELECT ${idcategorycolumn}  
              FROM system.${categorytable} 
              JOIN system.${table} on system.${table}.${idcolumn} = system.${categorytable}.${idcolumn} 
              JOIN system.category ON system.category.idcategory = system.${categorytable}.idcategory
              where system.${table}.${usernamecolumn}=? and system.category.namecategory=? and ${categorytable}.isactive=1`
}

export {
    getUsersBy,
    linking,
    getAllLinking
  }