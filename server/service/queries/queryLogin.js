
function loginQuery() {
    const query = `SELECT COUNT(*) FROM system.passwords WHERE idUser=? and password=?`;
    return query
}

function registerQuery() {
    const query = `INSERT INTO system.passwords ( idUser, password ) VALUES  ( ?, ? )`;
    return query
}

function updatePassword() {
    return `UPDATE system.userpassword SET password=? WHERE userId = ?`;
}

export {
    loginQuery,
    registerQuery, 
    updatePassword
} 