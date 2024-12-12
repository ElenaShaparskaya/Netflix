const cardWrapper = document.querySelector('.content-cards')

const films = [
    {
        id: 0,
        title: 'Марсианин1',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        image: './image/film.png'
    },

    {
        id: 1,
        title: 'Марсианин2',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        image: './image/film.png'
    },

    {
        id: 2,
        title: 'Марсианин3',
        original: 'The Martian 2015',
        category: 'Фантастика, приключения',
        rating: 7.8,
        link: '/film.html',
        image: './image/film.png'
    }
]

const render = () => {
    cardWrapper.innerHTML = ''

    films.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
                <a href="${item.link}" class="content-cards__item">
                    <div class="content-cards__item--img">
                        <img src="${item.image}" alt="film">
                    </div>
                    <div class="content-cards__item--title">
                        <h5>${item.title},</h5>
                        <span>"${item.original}"</span>
                    </div>
                    <p class="content-cards__item--description">
                        ${item.category}
                    </p>
                    <p class="content-cards__item--rating">
                        ${item.rating}
                    </p>
                </a>
            `)
    })
}

render()