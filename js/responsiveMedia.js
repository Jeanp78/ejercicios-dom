const youtube = document.getElementById("youtube");
const maps = document.getElementById("maps");

let breakpoint = matchMedia("(min-width: 768px)");

const responsive = (item, contentMobile, contentDesktop) => {
    if (breakpoint.matches) {
        item.innerHTML = contentDesktop;
    } else {
        item.innerHTML = contentMobile;
    }
};


responsive(
    youtube,
    '<a target="_blank" href="https://youtu.be/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA">Ver video</a>',
    '<iframe width="600" height="400" src="https://www.youtube.com/embed/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" title="Curso JavaScript: 90. DOM: Ejercicios Prácticos | Responsive con JavaScript - #jonmircha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
);
responsive(
    maps,
    '<a target="_blank" href="https://www.google.com/maps/place/Picnic+Sun/@7.8913166,-72.4846553,15.42z/data=!4m6!3m5!1s0x8e665bcfbf87f06d:0x62b559fbfa94db95!8m2!3d7.8870346!4d-72.4876932!16s%2Fg%2F11jyzn3jdw?entry=ttu"> Ver mapa </a>',
    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31616.614319468343!2d-72.487693!3d7.887035000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e665bcfbf87f06d%3A0x62b559fbfa94db95!2sPicnic%20Sun!5e0!3m2!1sen!2sus!4v1691506815502!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
);

breakpoint.addListener(() => {
    responsive(
        youtube,
        '<a href="https://youtu.be/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA">Ver video</a>',
        '<iframe width="600" height="400" src="https://www.youtube.com/embed/6IwUl-4pAzc?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" title="Curso JavaScript: 90. DOM: Ejercicios Prácticos | Responsive con JavaScript - #jonmircha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    );
    responsive(
        maps,
        '<a href="https://www.google.com/maps/place/Picnic+Sun/@7.8913166,-72.4846553,15.42z/data=!4m6!3m5!1s0x8e665bcfbf87f06d:0x62b559fbfa94db95!8m2!3d7.8870346!4d-72.4876932!16s%2Fg%2F11jyzn3jdw?entry=ttu"> Ver mapa </a>',
        '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31616.614319468343!2d-72.487693!3d7.887035000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e665bcfbf87f06d%3A0x62b559fbfa94db95!2sPicnic%20Sun!5e0!3m2!1sen!2sus!4v1691506815502!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    );
});

