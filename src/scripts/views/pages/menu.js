import TheMenuDbSource from '../../data/themenudb-source';

const Menu = {
  async render() {
    return `
        <h2>Menu Page</h2>
      `;
  },
   
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const menus = await TheMenuDbSource.menuFood();
    console.log(menus);
  },
};
   
export default Menu;
