class Currency {
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

const currencyApi = new Currency({
  baseUrl: 'https://cdn.cur.su/api/latest.json',
});

export default currencyApi;