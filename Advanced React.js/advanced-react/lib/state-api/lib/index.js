class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  getArticles = () => this.mapIntoObject(this.rawData.articles);

  getAuthors = () => this.mapIntoObject(this.rawData.authors);
}

export default DataApi;
