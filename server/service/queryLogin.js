
function loginQuery() {
    const query = `SELECT COUNT(*) FROM sys.passwords WHERE idUser=? and password=?`;
    return query
}

function registerQuery() {
    const query = `INSERT INTO sys.passwords ( idUser, password ) VALUES  ( ?, ? )`;
    return query
}

function updatePassword() {
    return `UPDATE sys.userpassword SET password=? WHERE userId = ?`;
}

export {
    loginQuery,
    registerQuery, 
    updatePassword
} 