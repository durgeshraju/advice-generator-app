
// API Endpoint URL
const API_URL = "https://api.adviceslip.com/advice";


export async function fetchAdvice() {
    
    try{
        const response = await fetch(API_URL, {cache: 'no-cache'});        
        if(!response.ok){
            throw new Error('Response error')
        }        
        const data = await response.json();
        return data
    } catch(error){
        console.error('Error Message:', error);
        return null;
    }
}