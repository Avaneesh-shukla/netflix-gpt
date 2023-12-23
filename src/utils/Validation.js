
export const checkValid = (email,pass)=>{
    const isValidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPass=true
    if(!isValidEmail) return "Invalid Email"
    // if(!isValidPass) return "Invalid Pass"
    return null
}