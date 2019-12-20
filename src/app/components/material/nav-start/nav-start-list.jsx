import React from 'react';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter } from 'react-router-dom';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FunctionsIcon from '@material-ui/icons/Functions';
import ClassIcon from '@material-ui/icons/Class';
import BusinessIcon from '@material-ui/icons/Business';
import RvHookupIcon from '@material-ui/icons/RvHookup';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import NavStartListItem from './nav-start-list-item';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import UserCurrent from './user-current';
import NavLogo from './nav-logo';

const NavStartList = () => {
  const classes = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    listOverFlow: {
      overflowY: 'auto',
    }
  }))();

  const itens = [
    [
      { name: 'Home', link: '/home', icon: <HomeIcon/> },
      { name: 'ECMAScript 6', link: '/ecmascript6', icon: <CodeIcon/> },
      { name: 'Hooks', link: '/hooks', icon: <RvHookupIcon/> },
    ],
    [
      { name: 'Webpack', link: '/webpack', icon: <BusinessIcon/> },
      { name: 'metodologia RSCSS', link: '/rscss', icon: <ClassIcon/> },
      { name: 'Programação funcional', link: '/programFunc', icon: <FunctionsIcon/> },
      { name: 'Lib axios', link: '/libAxios', icon: <LibraryBooksIcon/> },
      { name: 'Auth', link: '/auth', icon: <ExitToAppIcon/> },
    ],
    [
      {
        name: 'docs', link: '/docs', icon: <LocalLibraryIcon/>,
        children: [
          { name: 'formik', link: '/docs/formik', icon: <PermDataSettingIcon/> },
        ]
      },
    ]
  ];

  return (
      <>
        <NavLogo />

        <HashRouter>
          <List className={ classes.listOverFlow }>
            {
              itens.map((itemContent, i) => (
                  itemContent.map((item, j) => (
                      <React.Fragment key={ `${ i }-${ j }-${ item.name }` }>
                        { i !== 0 && j === 0 && <Divider/> }
                        <NavStartListItem { ...item } />
                      </React.Fragment>
                  ))
              ))
            }
          </List>
        </HashRouter>

      </>
  );
};

export default NavStartList;
