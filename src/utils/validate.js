export const validateData=(email,pwd)=>
{
    const isEmailValid=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const isPwdValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPwdValid) return "password is not valid"
    return null;
}

export const validateSignUp=(name,email,pwd)=>

{
    const isName=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    const isEmailValid=/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(email);
    const isPwdValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pwd);
    if(!isName) return "Name is not valid"
    if(!isEmailValid) return "Email ID is not valid"
    if(!isPwdValid) return "password is not valid"
    return null;

}