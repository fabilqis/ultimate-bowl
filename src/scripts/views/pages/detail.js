import UrlParser from '../../routes/url-parsers';
import TheMenuDbSource from '../../data/themenudb-source';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },
   
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const menu = await TheMenuDbSource.detailFood(url.id);
    console.log(menu);
  },
};
   
export default Detail;
