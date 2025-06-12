function pass_Valid(pass){
     if(pass.length < 8){
        return false;
     }
     if(!/[A-Z]/.test(pass) || !/[a-z]/.test(pass)){
        return false;
     }
     if(!/[0-9]/.test(pass))
        return false;
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    return false;
    }
    return true;
}

console.log(pass_Valid("Arbajkhan"))
console.log(pass_Valid("Arbajkhan1"))
console.log(pass_Valid("arbajkhan1"))
console.log(pass_Valid("arbajkhan1"))
console.log(pass_Valid("ARBAJ1"))
console.log(pass_Valid("ARBAJKHAN1k"))