const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const mobileMenu = document.getElementById('mobileMenu');
const cardContainer = document.getElementById('card-container');

const cardData = [
    {
        img: 'assets/card-image-1.png',
        title: 'A Resume That Passes ATS Filters',
        desc: 'Get a professionally written, keyword-optimized resume that lands in recruiter inboxes—not rejection piles.'
    },
    {
        img: 'assets/card-image-2.png',
        title: 'A Cover Letter That Gets Read',
        desc: 'Stand out with a cover letter that speaks directly to the role and reflects your strengths.'
    },
    {
        img: 'assets/card-image-3.png',
        title: 'A LinkedIn Profile That Works For You',
        desc: 'Attract the right eyes, start conversations, and show up in recruiter searches.'
    },
    {
        img: 'assets/card-image-4.png',
        title: 'Interview Confidence',
        desc: 'Interview preperation with real HR professionals so you speak clearly,confidently, and convincingly.'
    }
]

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

cardData.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'flex flex-col item-center justify-center p-5 rounded-[20px] shadow-md md:w-[230px] lg:w-[350px] lg:max-w-[298px] h-[450px]';
    card.id = `card-${i}`;
    card.innerHTML = `
        <img class="w-[200px] h-[150px] self-center" src=${item.img} alt=card-${i}>
                <h5 class="text-xl text-left mt-[18px] font-semibold">${item.title}</h5>
                <span class="text-lg leading-[30px] text-left mt-6">${item.desc}</span>
    `;
    console.log(card.img);
    cardContainer.appendChild(card);
})