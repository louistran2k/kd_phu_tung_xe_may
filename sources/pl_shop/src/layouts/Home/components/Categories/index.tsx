import MenuIcon from '@mui/icons-material/Menu';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import categoriesStyles from './style.module.scss';
import { Icon1, Icon2, Icon3, Icon4, Icon5 } from 'assets/images';

const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];

type Props = {};

function Categories(props: Props) {
  const categories = [] as any;

  return (
    <div className={categoriesStyles['nav-bar']}>
      <div className={categoriesStyles['categories']}>
        <MenuIcon />
        <span>Danh mục sản phẩm</span>
      </div>
      <ul className={categoriesStyles['menu']}>
        {categories.map((item: any, index: number) => (
          <li key={item.id}>
            <RouterLink to={`/product-group/${item.id}`}>
              <img src={icons[index]} alt="" />
              <h4>{item.name}</h4>
            </RouterLink>
            <ul
              className={clsx(
                categoriesStyles['sub-menu'],
                categoriesStyles['sm1']
              )}
            >
              {!!item.productTypes &&
                item.productTypes.map((item1: any) => (
                  <li key={item1.id}>
                    <RouterLink to={`/product-type/${item1.id}`}>
                      {item1.name}
                    </RouterLink>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
