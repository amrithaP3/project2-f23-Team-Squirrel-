import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(-1)
    const [fullName, setFullName] = useState("")
    const [admin, setAdmin] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const login = (body) => {
        const { message } = body;
        setUserId(message._id)
        setAdmin(message.admin)
        setFullName(message.fullName)
    }

    const logout = () => {
        setUserId(-1)
        setAdmin(false)
        setFullName("")
    }

    return (
        <AuthContext.Provider value={{ userId, fullName, admin, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}