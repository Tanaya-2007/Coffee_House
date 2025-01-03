gsap.from("#logo", {
    border: "1000px solid #fff",
    duration: 5,
    onComplete: function() {
        document.querySelector('.loader').style.display = 'none';
        document.getElementById('logo').style.border = 'none';
    }
});
