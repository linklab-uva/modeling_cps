module.exports = {
    title: 'Principles of Modeling for Cyber-Physical Systems',
    description: 'Essentially, all models are wrong, but some are useful. [George E. Box]. This course is about building useful models',
    dest: 'build',
    base: '/',
    ga: 'UA-96845591-3',
    head: [
        ['link', {rel: 'icon', href: `/logo.png`}],
        ['meta', {property: 'og:image', content: `/voyage-og-oas.png`}],
        ['meta', {name: 'twitter:image', content: `/voyage-og-oas.png`}]
    ],
    serviceWorker: false,
    themeConfig: {
        repo: 'voyage/open-autonomous-safety',
        editLinks: true,
        docsDir: 'docs',
        nav: [
            {
                text: 'Scenario Testing',
                link: '/scenarios/'
            },
            {
                text: 'Functional Safety',
                link: '/functional-safety/'
            },
            {
                text: 'Autonomy Assessment',
                link: '/autonomy-assessment/'
            },
            {
                text: 'Testing Toolkit',
                link: '/testing-toolkit/'
            },
            {
                text: 'Voyage',
                link: 'https://voyage.auto'
            }
        ],
        sidebar: {
            '/scenarios/': [
                {
                    title: 'Scenarios',
                    collapsable: false,
                    children: [
                        '',
                        'car-following',
                        'crosswalks',
                        'cul-de-sacs',
                        'intersections',
                        'vehicles-in-roadway',
                        'pedestrians-in-road',
                        'reversing-vehicles',
                        'speed-limits',
                        'template'
                    ]
                }
            ]
        }
    }
}
