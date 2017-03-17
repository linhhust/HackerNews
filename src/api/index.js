export default class API {
  constructor() {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/'
    this.baseUrlItems = 'https://hacker-news.firebaseio.com/v0/item/'

  }

  getNews(endpoint) {
    const url = this.baseUrlItems + endpoint + '.json'
    // const url = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    //console.log(url);
    return fetch(url).then((response) => response.json())
    // let response = await fetch(url);
    // return  await response.json();
  }
//
  getList(category){
    const url = this.baseUrl + category + '.json';
    //console.log(url);
    return fetch(url).then((response) => response.json())
  }
}
