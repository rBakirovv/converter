class Ip {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  };

  getCurrency() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
    })
    .then(this._checkResponse)
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  };
}

const ipApi = new Ip({
  baseUrl: 'https://ipapi.co/json/',
});

export default ipApi;