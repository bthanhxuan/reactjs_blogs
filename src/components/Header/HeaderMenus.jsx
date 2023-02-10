import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actLogout } from '../../store/user/actions';

function HeaderMenus() {
  const currentUser = useSelector((state) => state.USER.currentUser);
  const menus = useSelector((state) => state.MENU.menus);
  // console.log(menus);
  // console.log(currentUser);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }

  function renderMenus(items) {
    return items.map((item) => {
      return (
        <li key={item.id}>
          <a href={item.linkURL}>{item.name}</a>
          {item.childItems.length > 0 && (
            <ul>{renderMenus(item.childItems)}</ul>
          )}
        </li>
      );
    });
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">{renderMenus(menus)}</ul>
        <ul className="header-nav__lists">
          {!currentUser && (
            <li className="user">
              <Link to="/login">
                <i className="icons ion-person" /> Tài khoản
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="user">
              <Link to="/profile">
                <i className="icons ion-person" /> {currentUser.name}
              </Link>
              <ul>
                <li>
                  <Link to="/" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
                <li>
                  <Link to="/change-pw">Change Password</Link>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
