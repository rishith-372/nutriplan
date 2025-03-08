import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function MealPlanning() {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from('user_prompts')
            .insert([{ prompt }]);
        if (error) console.error('Error inserting prompt:', error);
        else console.log('Prompt added:', data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter your meal prompt"
                required
            />
            <button type="submit">Submit Prompt</button>
        </form>
    );
}

export default MealPlanning; 