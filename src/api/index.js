export default class API {
  constructor() {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0/'
    this.baseUrlItems = 'https://hacker-news.firebaseio.com/v0/item/'

  }

  getItem(endpoint) {
    const url = this.baseUrlItems + endpoint + '.json'
    return fetch(url).then((response) => response.json())
  }
  
  getList(category) {
    const url = this.baseUrl + category + '.json';
    return fetch(url).then((response) => response.json())
  }
}
