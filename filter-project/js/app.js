// Work to get the filter buttons working
(function () {

    const buttons = document.querySelectorAll('.btn');
    console.log('btn : ', buttons);
    const storeItem = document.querySelectorAll('.store-item');
    console.log('storeItem :', storeItem);

    const button = buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            console.log('e: ', e);
            const filter = e.target.dataset.filter;
            console.log('filter:', filter);

            storeItem.forEach((item) => {
                console.log('item: ', item);
                if (filter === 'all') {
                    item.style.display = 'block';
                }
                else if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            })
        })
    })

})();

//wire up filter search box
(function () {

    const searchBox = document.querySelector('#search-item')
    const storeItems = document.querySelectorAll('.store-item')

    searchBox.addEventListener('keyup', (e) => {

        const searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)) {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();