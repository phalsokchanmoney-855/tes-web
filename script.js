const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// មុខងារឱ្យប៊ូតុង No រត់គេច
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// មុខងារនៅពេលចុចលើប៊ូតុង Yes
yesBtn.addEventListener('click', () => {
    question.innerHTML = "ខ្ញុំក៏ស្រឡាញ់អ្នកដែរ! 🥰💖";
    noBtn.style.display = 'none'; // លាក់ប៊ូតុង No ចោល
});