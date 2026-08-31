/* =========================================
   TruePhone BD - Main JavaScript
========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ১. ফেভারিট (Heart/Save) বাটন টগল করা
    const favoriteButtons = document.querySelectorAll('button i.fa-heart');
    favoriteButtons.forEach(icon => {
        icon.parentElement.addEventListener('click', (e) => {
            e.preventDefault();
            // Regular (খালি হার্ট) থেকে Solid (ভরা হার্ট) এবং লাল রঙ টগল করা
            icon.classList.toggle('fa-regular');
            icon.classList.toggle('fa-solid');
            icon.classList.toggle('text-red-500');
        });
    });

    // ২. প্রোডাক্ট পেজের ইমেজ গ্যালারি (Thumbnail Click to Change Main Image)
    const thumbnails = document.querySelectorAll('.grid.grid-cols-5 > div');
    const mainImagePlaceholder = document.querySelector('.cursor-zoom-in > div.bg-gray-900');
    
    if (thumbnails.length > 0 && mainImagePlaceholder) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // সব থাম্বনেইল থেকে অ্যাকটিভ বর্ডার রিমুভ করা
                thumbnails.forEach(t => {
                    t.classList.remove('border-trust', 'border-2');
                    t.classList.add('border-gray-200', 'border');
                });
                
                // যেটিতে ক্লিক করা হয়েছে সেটিতে অ্যাকটিভ বর্ডার দেওয়া
                thumb.classList.remove('border-gray-200', 'border');
                thumb.classList.add('border-trust', 'border-2');

                // মেইন ইমেজে একটি হালকা ফ্ল্যাশ ইফেক্ট দেওয়া (ছবি চেঞ্জ হওয়ার ফিল দিতে)
                mainImagePlaceholder.style.opacity = '0.5';
                setTimeout(() => {
                    mainImagePlaceholder.style.opacity = '1';
                }, 200);
            });
        });
    }

    // ৩. ট্যাব সুইচিং (Store Profile বা অন্যান্য পেজের জন্য)
    const tabButtons = document.querySelectorAll('.hide-scrollbar > button');
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // সব ট্যাব থেকে অ্যাকটিভ স্টাইল রিমুভ করা
                tabButtons.forEach(btn => {
                    btn.classList.remove('text-trust', 'border-b-2', 'border-trust');
                    btn.classList.add('text-gray-500');
                });
                // ক্লিক করা ট্যাবে অ্যাকটিভ স্টাইল দেওয়া
                button.classList.remove('text-gray-500');
                button.classList.add('text-trust', 'border-b-2', 'border-trust');
            });
        });
    }

    // ৪. কম্পেয়ার (Compare) পেজের చెকবস হাইলাইট
    const compareCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    compareCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const card = e.target.closest('.group');
            if (card && e.target.checked) {
                card.classList.add('ring-2', 'ring-trust');
            } else if (card) {
                card.classList.remove('ring-2', 'ring-trust');
            }
        });
    });

    // ৫. লগইন/OTP ইনপুট ফোকাস (অটোমেটিক পরের ঘরে যাওয়া)
    const otpInputs = document.querySelectorAll('.otp-input');
    if (otpInputs.length > 0) {
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });
    }
});