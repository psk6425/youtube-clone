class youtubeService {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    mostPopular () {
        return fetch (`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=AIzaSyCN2kUUDEs7Xx7h9pUyClos0E21WfZ5TGs`
        , [this.getRequestOptions] )
        .then(response => response.json())
        .then(response => response.items)
        .catch(erro => console.log("error"))

    }

    searchVideos(query) {
        return fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCN2kUUDEs7Xx7h9pUyClos0E21WfZ5TGs` , this.getRequestOptions)
        .then(response => response.json())
        .then(result => result.items.map(item => ({...item,id: item.id.videoId})))
        .catch(error => console.log('error',error))
    }
}

export default youtubeService;