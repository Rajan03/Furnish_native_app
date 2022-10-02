import {createContext, useContext, useEffect, useMemo, useState} from "react";

const AuthContext = createContext({});


export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({
        name: "John Doe",
        email: "johnDoe@gmail.com",
        avatar: "https://i.pravatar.cc/150?img=1"
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    const signIn = async (email, password) => {
        console.log({email, password});
    }

    const signUp = async (name, email, password) => {
        console.log({name, email, password});
    }

    const signOut = async () => {
        console.log("signOut");
    }

    const resetPassword = async (email) => {
        console.log({email});
    }

    const memoizedValue = useMemo(() => ({
        signIn, signUp, signOut, resetPassword,
        user, error, loading
    }), [user, error, loading]);

    return (
        <AuthContext.Provider value={memoizedValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};
