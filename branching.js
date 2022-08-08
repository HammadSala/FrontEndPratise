var phone_Price = 30000;
var account_Balance = 25000;
var credit_Balance = 3000;

if ( phone_Price <= account_Balance ){
    console.log("I can buy the phone");
} else if (phone_Price <= (account_Balance + credit_Balance) ) {
    console.log(" i can buy using bank and credit balalce togther")
}
else {
    console.log("I cannot buy the phone, insufficient balance" );
    console.log("Balance Needed without credit card ", phone_Price - account_Balance);
    console.log("Balance Needed with credit card ", phone_Price - (account_Balance + credit_Balance));

}