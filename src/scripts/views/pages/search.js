import TheMenuDbSource from '../../data/themenudb-source';

const Search = {
  async render() {
    return `
        <h2>search page</h2>
      `;
  },
   
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const menus = await TheMenuDbSource.searchFood();
    console.log(menus);
  },
};
   
export default Search;
