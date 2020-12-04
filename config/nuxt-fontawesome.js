export default {
    component: 'fa',
    imports: [
        {
            set: '@fortawesome/pro-solid-svg-icons',
            icons: ['faAngleDoubleLeft', 'faBars', 'faMapMarkerAlt', 'faPhone', 'faEnvelope', 'faChevronLeft', 'faChevronRight',
                'faCloud', 'faLeaf', 'faBullhorn', 'faSun', 'faExclamationTriangle', 'faCode', 'faDatabase', 'faCloudsSun',
                'faSitemap', 'faWind', 'faFileChartLine']
        },
        {
            set: '@fortawesome/pro-light-svg-icons',
            icons: ['faAngleDown']
        },
        {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebook', 'faLinkedin', 'faInstagram']
        }
    ]
}
