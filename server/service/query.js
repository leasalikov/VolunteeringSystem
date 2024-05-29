

function getQuery(tableName) {
    return `SELECT * FROM system.${tableName} WHERE isActive = 1`;
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
    limit
}
