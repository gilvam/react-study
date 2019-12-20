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

const NavStartList = () => {
  const classes = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
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

  const listMapChild = () => {
    return <h1>oi</h1>;
  };

  return (
      <React.Fragment>
        <div className={ classes.toolbar }/>

        <Divider/>

        <HashRouter>
          <List>
            {
              itens.map((itemContent, i) => (
                  itemContent.map((item, j) => (
                      <React.Fragment key={ `${ i }-${ j }-${ item.name }` }>
                        { i !== 0 && j === 0 && <Divider/> }
                        <NavStartListItem { ...item } listMap={ listMapChild }/>
                      </React.Fragment>
                  ))
              ))
            }
          </List>
        </HashRouter>

      </React.Fragment>
  );
};

export default NavStartList;
