import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(-1)
    const [fullName, setFullName] = useState("")
    const [admin, setAdmin] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const toggleLogin = (body) => {
        if (body._id) {
            setUserId(-1)
            setAdmin(false)
            setFullName("")
            setLoggedIn(false)
        } else {
            setUserId(body._id)
            setAdmin(body.admin)
            setFullName(body.fullName)
            setLoggedIn(true)
        }
    }

    return (
        <AuthContext.Provider value={{ userId, fullName, admin, toggleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}