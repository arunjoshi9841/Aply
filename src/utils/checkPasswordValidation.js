const checkPasswordValidation=(password)=>{
    if(password.length<8){
        return true;
    }
    else return false
}
export default (checkPasswordValidation)