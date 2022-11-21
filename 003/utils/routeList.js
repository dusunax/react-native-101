import HomeScreen from "./../screens/HomeScreen";
import CalendarScreen from "./../screens/CalendarScreen";
import LibraryScreen from "./../screens/LibraryScreen";
import MyPageScreen from "./../screens/MyPageScreen";

export const ROUTESLIST = [
  { name: "Home", component: HomeScreen, icon: "home", iconOutline: "home" },
  {
    name: "Calendar",
    component: CalendarScreen,
    icon: "calendar",
    iconOutline: "calendar",
  },
  {
    name: "Library",
    component: LibraryScreen,
    icon: "barbell",
    iconOutline: "barbell",
  },
  {
    name: "MyPage",
    component: MyPageScreen,
    icon: "person",
    iconOutline: "person",
  },
];
