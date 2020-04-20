const bcrypt = require('bcrypt');
const passwordhashing = {
    salt: 10,
    doHash(plainpassword){
        var promise = bcrypt.hash(plainpassword,this.salt);
        return promise;
    },
    compareHash(plainPwd, dbHashPwd){
        var promise = bcrypt.compare(plainPwd,dbHashPwd);
        return promise;
    }
}

module.exports = passwordhashing;