import '../../src/Regionmap';
import data from '../data/hotels-russia.geojson';

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map', {
        center: [60, 100],
        zoom: 3,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    }, {
        typeSelectorSize: 'small',
        zoomControl: 'small'
    });

    ymaps.modules.require(['Regionmap'], (Regionmap) => {
        const regionmap = new Regionmap(data, {
            regionOptions: {
                region: 'RU'
            },
            strokeColor: '#666'
        });

        regionmap.setMap(myMap);
    });
});
