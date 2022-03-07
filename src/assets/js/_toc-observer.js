const createObserver = ($links) => {
    const options = {
        rootMargin: "0px 0px -200px 0px",
        threshold: 1
    }
    const callback = (e, o) => handleObserver(e, o, $links)
    return new IntersectionObserver(callback, options)
}

const updateLinks = (visibleId, $links) => {
    $links.map(link => {
        let href = link.getAttribute('href')
        link.classList.remove('is-active')
        if(href === visibleId) link.classList.add('is-active')
    })
}

const handleObserver = (entries, observer, $links) => {
    entries.forEach((entry)=> {
        const { target, isIntersecting, intersectionRatio } = entry
        if (isIntersecting && intersectionRatio >= 1) {
            const visibleId = `#${target.getAttribute('id')}`
            updateLinks(visibleId, $links)
        }
    })
}

async function init() {
    // Parsing Markdown
    const $toc = document.querySelector('.page-nav');
    const $main = document.querySelector('.main');

    // Generating a list of heading links
    const $headings = [...$main.querySelectorAll('h2, h3')];

    // Adding an Intersection Observer
    const $links = [...$toc.querySelectorAll('a')]
    const observer = createObserver($links)
    $headings.map(heading => observer.observe(heading))
};

init()
