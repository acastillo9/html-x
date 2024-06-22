// document.addEventListener('click', (e) => {
//     console.log('click', e)
// })

const saveTweetButton = document.getElementById('tweetSave')
console.log(saveTweetButton)
saveTweetButton.addEventListener('click', () => {
    console.log('Button clicked')
    const tweetTextInput = document.getElementById('tweetText')
    console.log(tweetTextInput)
    console.log(tweetTextInput.value)

    // const html = `<article class="tweet" onclick="tweetClick()">
    // <div>
    //     <div class="tweet-content">
    //         <p>${tweetTextInput.value}</p>
    //     </div>
    // </div>
    // </article>`

    // const timeline = document.getElementById('timeline')
    // timeline.innerHTML += html 

    const tweetElement = createTweet({
        textContent: tweetTextInput.value
    })

    const timeline = document.getElementById('timeline')
    timeline.appendChild(tweetElement)
})

function tweetClick() {
    console.log('tweet clicked')
}

function createTweet(tweetData) {
    const article = document.createElement('article')
    article.classList.add('tweet')
    article.addEventListener('click', tweetClick)
    const div = document.createElement('div')
    article.appendChild(div)
    const tweetContent = document.createElement('div')
    tweetContent.classList.add('tweet-content')
    div.append(tweetContent)
    const tweetText = document.createElement('p')
    tweetText.textContent = tweetData.textContent
    tweetContent.appendChild(tweetText)
    return article
}

const tweets = [
    {
        id: '1',
        user: {
            profileImage: 'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
            name: 'Elon Musk',
            username: '@elonmusk',
            date: '20h'
        },
        textContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae est animi rerum deleniti!',
        commentCount: 11,
        retweetCount: 28,
        likesCount: 313,
        viewsCount: 49
    },
    {
        id: '2',
        user: {
            profileImage: 'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
            name: 'Elon Musk',
            username: '@elonmusk',
            date: '20h'
        },
        textContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae est animi rerum deleniti!',
        commentCount: 11,
        retweetCount: 28,
        likesCount: 313,
        viewsCount: 49
    },
    {
        id: '3',
        user: {
            profileImage: 'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
            name: 'Elon Musk',
            username: '@elonmusk',
            date: '20h'
        },
        textContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae est animi rerum deleniti!',
        commentCount: 11,
        retweetCount: 28,
        likesCount: 313,
        viewsCount: 49
    },
    {
        id: '4',
        user: {
            profileImage: 'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
            name: 'Elon Musk',
            username: '@elonmusk',
            date: '20h'
        },
        textContent: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae est animi rerum deleniti!',
        commentCount: 11,
        retweetCount: 28,
        likesCount: 313,
        viewsCount: 49
    }
]

const timeline = document.getElementById('timeline')
tweets.forEach((tweet) => {
    const tweetElement = createTweet(tweet)
    timeline.appendChild(tweetElement)
})

// let count = 0
// setInterval(() => {
//     console.log('Hello', ++count)
// }, 1000)