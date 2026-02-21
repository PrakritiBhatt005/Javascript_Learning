const accountid = 17979798
let accountEmail = "prakritibhatt578@gmail.com"
var accountPassword = "abc123"
accountCity = "Dehradun"
let accountState

// accountId = 2 
// not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountid)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountid, accountEmail, accountPassword, accountCity, accountState])