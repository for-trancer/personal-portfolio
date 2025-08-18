let isScrolling = false;

document.addEventListener('wheel',function(e){
    if(isScrolling) return;

    e.preventDefault();
    isScrolling = true;

    const delta = e.deltaY;
    const scrollSpeed = 0.1;
    const targetScroll = window.pageXOffset + (delta * scrollSpeed);

    window.scrollTo({
        top:targetScroll,
        behavior: 'smooth'
    });
});