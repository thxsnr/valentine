const story = {
    1: "จ๊ะเอ๋ คนสวยยย",
    2: "Happy Valentine's Day naaaa",
    3: "จาก สุดหล่อข้างๆนุ่น\nขอบคุณที่อยู่ข้างๆมาตลอดนะคับบ ขอบคุณที่ชอบกันมานานขนาดนี้\nตอนแรกก็ว่าจะไม่อะไรละ สุดท้ายก็ใจอ่อนอยู่ดี\nตัสแพ้ความใส่ใจ ดูแลเทคแคร์ดี๊ดี ความตลกบ้าๆบอๆของนุ่นนั่นแหละ\nอยากจะบอกว่าตัสอยากมีนุ่นในชีวิตไม่ว่าจะในสถานะไหนก็ตาม\nไม่ว่าจะเกิดอะไรขึ้นอย่าหายไปไหนนะอ้วนน ห้ามทิ้งกันนเด็ดขาด!\nจะพยายามใจเย็นขึ้นให้ได้นะ อยากทำให้นุ่นยิ้มเย้อๆ\nช่วยอยู่เป็นความสบายใจของตัสไปเรื่อยๆเลยนะ\nชอบนะคับ"
};

function nextStep(num) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const targetScreen = document.getElementById('step' + num);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    if (num === 2) {
        type(document.getElementById('text2'), story[2], 'hint2');
    }
}

function handleMainBtn() {
    const btn = document.getElementById('mainBtn');
    const textElement = document.getElementById('text3');

    if (btn.innerText === "เริ่ม") {
        type(textElement, story[3]);

        btn.innerText = "หน้าแรก";

        btn.onclick = () => location.reload();
    }
}

function type(element, text, hintId) {
    let i = 0;
    element.innerHTML = ""; 
    if(hintId) document.getElementById(hintId).classList.remove('show');

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 90);
        } else if (hintId) {
            document.getElementById(hintId).classList.add('show');
        }
    }
    typing();
}

window.onload = () => {
    type(document.getElementById('text1'), story[1], 'hint1');
};
let clickCount = 0;

function revealPhoto() {
    const photo = document.getElementById('main-photo');
    const polaroid = document.getElementById('polaroid');
    const photoText = document.querySelector('.polaroid-text');
    const hint3 = document.getElementById('hint3');

    if (clickCount < 5) {
        clickCount++;
        
        if (hint3) hint3.style.display = 'none';

        let opacityValue = 0.1 + (clickCount * 0.18); 
        let saturateValue = clickCount * 20; 

        photo.style.opacity = opacityValue;
        photo.style.filter = `saturate(${saturateValue}%)`;

        if (clickCount < 5) {
            photoText.innerText = `${5 - clickCount}`;
        } else {
            photo.style.opacity = "1";
            photo.style.filter = "saturate(100%)";
            photoText.innerText = "หน้าถัดไป";
        }
    } 
    else if (clickCount === 5) {
        nextStep(4);
        clickCount++;
    }
}
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-bg');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + "vw"; 
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
