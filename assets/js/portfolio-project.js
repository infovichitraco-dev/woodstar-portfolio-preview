(function () {
    "use strict";

    var projects = {
        "casa-b": {
            title: "Casa B’",
            type: "Villa",
            date: "2018",
            area: "14,000 sq.ft.",
            location: "Alibaug",
            projectBy: "ADND",
            imageCount: 12,
            description: [
                "Sunlit geometry. Clean lines. Quiet power.",
                "The façade stands composed — balanced proportions, warm textures, deliberate form. The pool reflects it all in perfect stillness.",
                "Inside, natural wood and stone soften the architecture. Bespoke tables. Sculpted lighting. Nothing excessive — only precision. Glass walls dissolve into landscape.",
                "Light moves freely. Space breathes. This is not decoration. It is intention.",
                "Crafted with clarity. Defined by restraint. Luxury, without noise."
            ],
            next: "casa-feliz"
        },
        "maison-liore": {
            title: "Maison Lioré",
            type: "Villa",
            date: "2018",
            area: "14,000 sq.ft.",
            location: "Lonavala",
            projectBy: "Woodstar Projects",
            imageCount: 1,
            description: [
                "Set within a lush jardin of palms and stone, the maison rises in quiet confidence — timber pergolas, textured façades, perfect équilibre.",
                "Mediterranean calm defines the exterior — layered stone, warm beams, deep verandas. Glass dissolves intérieur and landscape in seamless fluidité. Inside, restraint is refined.",
                "Exposed beams, limewashed walls, sculpted light. Walnut, quartz, artisanal tile — tailored precision. Soft neutrals, filtered lumière, spa-like sérénité.",
                "This maison does not speak loudly. It whispers in proportion, matière, and craft.",
                "Luxury — composed. Beauty — in silence."
            ],
            next: "magic-maneuver"
        },
        "listenlights": {
            title: "ListenLights",
            type: "Commercial",
            date: "2025",
            area: "10,000 sq.ft.",
            location: "Mumbai",
            projectBy: "Woodstar Projects",
            imageCount: 10,
            description: [
                "Spaces of purpose — precise, composed, and quietly commanding."
            ],
            next: "roche-bobois"
        },
        "roche-bobois": {
            title: "Roche Bobois",
            type: "Commercial",
            date: "To be confirmed",
            area: "To be confirmed",
            location: "Mumbai",
            projectBy: "To be confirmed",
            imageCount: 7,
            description: [
                "Project narrative and final credits to be confirmed."
            ],
            next: "oberoi-esquire"
        },
        "oberoi-esquire": {
            title: "Oberoi Esquire",
            type: "Residential",
            date: "2025",
            area: "10,000 sq.ft.",
            location: "Mumbai",
            projectBy: "Woodstar Projects",
            imageCount: 11,
            description: [
                "This residence is defined by clarity and restraint.",
                "Clean lines, softened stone, warm timber, and expansive glazing create a calm, light-filled interior where materials are honest and carefully balanced."
            ],
            next: "villa-epure"
        },
        "casa-feliz": {
            title: "Casa Feliz",
            type: "Villa",
            date: "2020",
            area: "9,500 sq.ft.",
            location: "Alibaug",
            projectBy: "ADND",
            imageCount: 16,
            description: [
                "Casa Feliz reveals itself as a refined European retreat — poised, intimate, and quietly poetic.",
                "Defined by clean lines and generous openness, the villa dissolves the boundary between interior and landscape, where light drifts through glass façades and gardens become part of daily life. Natural materials — warm timber, textured stone, lime-finished walls, and softened neutrals — lend a calm, tactile elegance that feels both grounded and timeless.",
                "Every space is distilled to its essence, celebrating la douceur de vivre: unhurried mornings, sunlit stillness, and evenings that linger in gentle conversation."
            ],
            next: "maison-liore"
        },
        "villa-epure": {
            title: "Villa Épure",
            type: "Villa",
            date: "2018",
            area: "18,000 sq.ft.",
            location: "Alibaug",
            projectBy: "Rajesh Jaggi",
            imageCount: 24,
            description: [
                "The architecture unfolds with justesse: clean lines, generous volumes, and a careful dialogue between stone, timber, and glass. Light drifts through the spaces like une respiration lente, tracing textures and softening form, allowing proportion to speak more loudly than ornament.",
                "Interiors are composed with retenue et raffinement — high ceilings grounded by warmth, minimal gestures enriched by craftsmanship. Each room invites le temps suspendu: a pause, a stillness, a moment simply to be.",
                "Beyond the walls, gardens and pathways reveal themselves en douceur, echoing the rhythm of European estates where house and landscape exist in harmonie naturelle. Water mirrors the sky, stone anchors the earth, and movement feels unforced, almost instinctive.",
                "This villa carries a soul of calme et confiance — a place where l’art de vivre is expressed not through excess, but through balance, light, and quiet grace."
            ],
            next: "casa-b"
        },
        "magic-maneuver": {
            title: "Magic Maneuver",
            type: "Villa",
            date: "2018",
            area: "7,000 sq.ft.",
            location: "Alibaug",
            projectBy: "Palmore",
            imageCount: 6,
            description: [
                "Magic Maneuver unfolds like a private manoir contemporain — calm, luminous, and exquisitely composed.",
                "Arranged around a serene courtyard pool, the villa is guided by proportion and symmetry, where pale stone façades, soft plaster walls, and cascading greenery establish a rhythm of élégance naturelle. Floor-to-ceiling glass glows gently at dusk, dissolving intérieur et extérieur, while reflections drift across still water — un jeu subtil de lumière et de silence.",
                "The architecture is restrained yet assured: clean horizontal lines, sheltered terraces, and refined detailing that speaks of luxe discret. Every space invites l’art de vivre — slow mornings by the pool, golden evenings under open skies, time unfolding sans hâte.",
                "Magic Maneuver is luxury expressed in quiet confidence — a residence of calme, clarté et grâce intemporelle, where modern life is shaped by light, balance, and enduring refinement."
            ],
            next: "listenlights"
        }
    };

    var pageByProject = {
        "casa-b": "project.html",
        "maison-liore": "project-2.html",
        "listenlights": "project-3.html",
        "oberoi-esquire": "project-4.html",
        "casa-feliz": "project-5.html",
        "villa-epure": "project-6.html",
        "magic-maneuver": "project-7.html",
        "roche-bobois": "project-8.html"
    };

    var slug = document.body.getAttribute("data-portfolio-project");
    var project = projects[slug];
    var main = document.querySelector("main.main-root");

    if (!project || !main) {
        return;
    }

    var imageBase = "assets/img/portfolio/" + slug;
    var slides = "";
    for (var i = 1; i <= project.imageCount; i += 1) {
        var number = String(i).padStart(2, "0");
        slides += '<figure class="portfolio-slide" aria-label="Image ' + i + ' of ' + project.imageCount + '">' +
            '<img src="' + imageBase + '/thumb/' + number + '.jpg" ' +
            'srcset="' + imageBase + '/thumb/' + number + '.jpg 1200w, ' + imageBase + '/full/' + number + '.jpg 1920w" ' +
            'sizes="(max-width: 767px) 100vw, 90vw" loading="' + (i === 1 ? "eager" : "lazy") + '" ' +
            'alt="' + project.title + ' — view ' + i + '"></figure>';
    }

    var story = project.description.map(function (paragraph) {
        return "<p>" + paragraph + "</p>";
    }).join("");

    var next = projects[project.next];
    var nextPage = pageByProject[project.next];
    var nextImage = "assets/img/portfolio/" + project.next + "/thumb/01.jpg";

    document.title = project.title + " | Woodstar Projects";
    var descriptionMeta = document.querySelector('meta[name="description"], meta[name="discrption"]');
    if (descriptionMeta) {
        descriptionMeta.setAttribute("content", project.title + " — " + project.type + " interior project by Woodstar Projects in " + project.location + ".");
    }

    main.innerHTML = '<div id="dsn-scrollbar">' +
        '<header class="portfolio-project-hero p-relative over-hidden dsn-header-animation">' +
            '<img class="portfolio-project-hero__image" src="' + imageBase + '/thumb/01.jpg" srcset="' + imageBase + '/thumb/01.jpg 1200w, ' + imageBase + '/full/01.jpg 1920w" sizes="100vw" alt="' + project.title + '">' +
            '<div class="portfolio-project-hero__shade"></div>' +
            '<div class="container portfolio-project-hero__content dsn-z-index-2">' +
                '<div class="portfolio-project-hero__type">' + project.type + '</div>' +
                '<h1 class="title" data-dsn-ajax="title">' + project.title + '</h1>' +
                '<p>' + project.location + '</p>' +
            '</div>' +
        '</header>' +
        '<div class="wrapper">' +
            '<section class="portfolio-project-info section-padding">' +
                '<div class="container">' +
                    '<dl class="portfolio-project-facts">' +
                        '<div><dt>Date</dt><dd>' + project.date + '</dd></div>' +
                        '<div><dt>Project Area</dt><dd>' + project.area + '</dd></div>' +
                        '<div><dt>Location</dt><dd>' + project.location + '</dd></div>' +
                        '<div><dt>Project By</dt><dd>' + project.projectBy + '</dd></div>' +
                    '</dl>' +
                    '<div class="portfolio-project-story">' + story + '</div>' +
                '</div>' +
            '</section>' +
            '<section class="portfolio-project-gallery section-padding pt-0" aria-labelledby="project-gallery-title">' +
                '<div class="container portfolio-gallery-heading">' +
                    '<div><p class="portfolio-eyebrow">Selected views</p><h2 id="project-gallery-title">Project gallery</h2></div>' +
                    '<div class="portfolio-gallery-controls">' +
                        '<button type="button" class="portfolio-gallery-prev" aria-label="Previous image">←</button>' +
                        '<span class="portfolio-gallery-count" aria-live="polite">1 / ' + project.imageCount + '</span>' +
                        '<button type="button" class="portfolio-gallery-next" aria-label="Next image">→</button>' +
                    '</div>' +
                '</div>' +
                '<div class="portfolio-slides" tabindex="0">' + slides + '</div>' +
            '</section>' +
            '<section class="portfolio-next-project p-relative">' +
                '<img src="' + nextImage + '" alt="" loading="lazy">' +
                '<div class="portfolio-next-project__shade"></div>' +
                '<a href="' + nextPage + '"><span>Next project</span><strong>' + next.title + '</strong></a>' +
            '</section>' +
        '</div>' +
    '</div>';

    var rail = main.querySelector(".portfolio-slides");
    var count = main.querySelector(".portfolio-gallery-count");
    var current = 0;

    function goTo(index) {
        current = Math.max(0, Math.min(project.imageCount - 1, index));
        rail.scrollTo({ left: current * rail.clientWidth, behavior: "smooth" });
        count.textContent = (current + 1) + " / " + project.imageCount;
    }

    main.querySelector(".portfolio-gallery-prev").addEventListener("click", function () {
        goTo(current - 1);
    });
    main.querySelector(".portfolio-gallery-next").addEventListener("click", function () {
        goTo(current + 1);
    });
    rail.addEventListener("scroll", function () {
        window.clearTimeout(rail.portfolioScrollTimer);
        rail.portfolioScrollTimer = window.setTimeout(function () {
            current = Math.round(rail.scrollLeft / Math.max(1, rail.clientWidth));
            count.textContent = (current + 1) + " / " + project.imageCount;
        }, 80);
    });
    rail.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(current - 1);
        }
        if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(current + 1);
        }
    });
}());
