import Menu from '../views/pages/menu';
import Search from '../views/pages/search';
import Detail from '../views/pages/detail';

const routes = {
  '/': Menu,
  '/menu': Menu,
  '/search': Search,
  '/detail/id': Detail,
};

export default routes;
