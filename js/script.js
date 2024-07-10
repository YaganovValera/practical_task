
/*========================================= create rating stars ============================================*/
const starSvg = `
<svg width="24" class="rating-star-icon" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.947 9.44902C21.818 9.07102 21.477 8.80402 21.079 8.77302L15.378 8.32002L12.911 2.85902C12.75 2.50002 12.393 2.27002 12 2.27002C11.607 2.27002 11.25 2.50002 11.089 2.85802L8.62197 8.32002L2.92097 8.77302C2.52997 8.80402 2.19297 9.06102 2.05997 9.43002C1.92697 9.79902 2.02097 10.212 2.30197 10.486L6.51497 14.593L5.02497 21.045C4.93297 21.444 5.09397 21.859 5.43097 22.092C5.60297 22.21 5.80097 22.27 5.99997 22.27C6.19297 22.27 6.38697 22.214 6.55497 22.102L12 18.472L17.445 22.102C17.793 22.334 18.25 22.325 18.59 22.078C18.928 21.831 19.077 21.398 18.962 20.996L17.133 14.596L21.669 10.514C21.966 10.246 22.075 9.82802 21.947 9.44902Z" fill="#FFB700"/>
</svg>
`;

const ratingStars = document.querySelectorAll('.js-rating-stars');

ratingStars.forEach(ul => {
    for (let i = 0; i < 5; i++) {
        const li = document.createElement('li');
        li.className = 'customers__rating-star';
        li.innerHTML = starSvg;
        ul.appendChild(li);
    }
});
/*======================================================================================================*/
