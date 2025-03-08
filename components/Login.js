import React, { useState } from 'react';
import { supabase } from '../supabaseClient'; // Ensure you have a supabase client set up

function Login() {
    const [email, setEmail] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const { user, error } = await supabase.auth.signIn({ email });
        if (error) console.error('Error logging in:', error);
        else console.log('Logged in user:', user);
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login; 