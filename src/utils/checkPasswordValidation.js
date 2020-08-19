const checkPasswordValidation=(password)=>{
    if(password.length<7){
        return true;
    }
    else return false
}
export default (checkPasswordValidation)