   mdc.autoInit();
   var drawer = new mdc.drawer.MDCDrawer(document.querySelector('.mdc-drawer'));
   const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(document.getElementById('app-bar'));
   topAppBar.setScrollTarget(document.getElementById('main-content'));
   topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });
   // const list = new MDCList(document.querySelector('.mdc-list'));
   // list.singleSelection = true;
   // const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
   mdc.tabBar.MDCTabBar.attachTo(document.querySelector('.mdc-tab-bar'));