import { supabase } from './supabaseClient.js';

/**
 * Inscrit un nouvel utilisateur et enregistre son nom complet dans les metadata.
 */
export async function signUpUser(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { full_name: fullName }
        }
    });
    return { data, error };
}

/**
 * Connecte un utilisateur existant.
 */
export async function signInUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    return { data, error };
}

/**
 * Déconnecte l'utilisateur actuel.
 */
export async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    return { error };
}

/**
 * Récupère l'utilisateur actuel.
 */
export async function getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}
