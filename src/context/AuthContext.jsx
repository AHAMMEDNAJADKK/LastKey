
import { createContext,useState} from "react";

export const AuthContext= createContext();
export function AuthProvider({ children }) {
const [user,setUser] = useState(
    JSON.parse(localStorage.getItem("lastkeyUser")) || null
);

const login = (userData)=>{
    setUser(userData);
    localStorage.setItem("lastkeyUser",JSON.stringify(userData));
};

const logout = ()=>{
    setUser(null);
    localStorage.removeItem("lastkeyUser");
};

return(
    <AuthContext.Provider value={{user,login,logout}}>
        {children}
    </AuthContext.Provider>
)
};