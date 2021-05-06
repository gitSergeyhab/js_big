const scrolling = (upSelector) => {
    const upper = document.querySelector(upSelector)
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1666) {
            upper.style.opacity = 1;
        } else {
            upper.style.opacity = 0;
        }
    });

    // const element = document.documentElement;
    // const body = document.body;

    // const calcScroll = () => {
    //     upper.addEventListener('click', function(evt) {
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);

    //         if (this.hash !== "") {
    //             evt.preventDefault();
    //             let hashElement = document.querySelector(this.hash);
    //             let hashElementTop = 0;

    //             while (hashElement.offsetParent) {
    //                 hashElementTop += hashElement.offsetTop;
    //                 hashElement = hashElement.offsetParent;
    //             }

    //             hashElementTop = Math.round(hashElementTop);
    //             smoothScroll(scrollTop, hashElementTop, this.hash)
    //         }
    //     })
    // }

    // const smoothScroll = (start, end, hast) => {
    //     let timeInterval=1, prevScrollTop;
    //     const speed = end > start ? 30 : -30;

    //     let move = setInterval(function() {
    //         let scrollTop = Math.round(element.scrollTop || body.scrollTop);

    //         if (
    //             prevScrollTop === scrollTop ||
    //             (end > start && scrollTop >= end) ||
    //             (end < start && scrollTop <= end)
    //         ) {
    //             clearInterval(move);
    //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/, '') + hash)
    //         } else {
    //             body.scrollTop += speed;
    //             element.scrollTop += speed;
    //             prevScrollTop = scrollTop;
    //         }
    //     }, timeInterval);
    // };

    // calcScroll()


    const links = document.querySelectorAll('[href^="#"]');
    const speed = 0.1;

    links.forEach(link => {
        link.addEventListener('click', function(evt) {
            evt.preventDefault();

            let widhTop = document.documentElement.scrollTop; // прокрученная часть сайта
            let hash = this.hash; // то что в хрефе после #
            //.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим)
            let toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time // выполнит один (первый раз)
                }

                let progress = time - start;
                let y = (
                    toBlock < 0 ? // если элемент "внизу"
                    Math.max(widhTop - progress / speed, widhTop + toBlock) :
                    Math.min(widhTop + progress / speed, widhTop + toBlock)
                    );

                document.documentElement.scrollTo(0, y);

                if (y != widhTop + toBlock) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash;
                }
            }
        })
    })




}

export default scrolling;