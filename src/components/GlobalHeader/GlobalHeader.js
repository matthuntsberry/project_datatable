import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent
} from "carbon-components-react/lib/components/UIShell";

import Notification20 from "@carbon/icons-react/lib/notification/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import Search20 from "@carbon/icons-react/lib/search/20";

const GlobalHeader = () => (
  <Header aria-label="IBM Cloud" className="global-header">
    <SkipToContent />
    <HeaderName href="/" prefix="IBM">
      Cloud
    </HeaderName>
    <HeaderNavigation aria-label="Carbon Tutorial">
      <HeaderMenuItem href="/">Basic</HeaderMenuItem>
      <HeaderMenuItem href="/scroll">Scroll</HeaderMenuItem>
      <HeaderMenuItem href="/sticky">Sticky</HeaderMenuItem>
    </HeaderNavigation>
    <HeaderGlobalBar>
      <HeaderGlobalAction aria-label="Notifications">
        <Search20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="Notifications">
        <Notification20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="User Avatar">
        <UserAvatar20 />
      </HeaderGlobalAction>
      <HeaderGlobalAction aria-label="App Switcher">
        <AppSwitcher20 />
      </HeaderGlobalAction>
    </HeaderGlobalBar>{" "}
  </Header>
);

export default GlobalHeader;
