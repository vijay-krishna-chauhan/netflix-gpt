export const checkValidData=(email,password)=>{
    const isEmailValid=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!isEmailValid) return "Email is not valid.";
    if(!isPasswordValid) return "Password is not valid.";

else return null;
}