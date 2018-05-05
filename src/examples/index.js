import './../Regionmap/Regionmap';

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
        const data = [[37.782551, -122.445368], [37.782745, -122.444586]];
        const regionmap = new Regionmap(data);

        regionmap.setMap(myMap);
    });
});
