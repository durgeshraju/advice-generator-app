const adviceIdNumber = document.querySelector('#advice-id-number');
const adviceText = document.querySelector('.advice-text');

export async function renderAdvice(id, advice){
    adviceIdNumber.textContent = id;
    adviceText.textContent = advice
}