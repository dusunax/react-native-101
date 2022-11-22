import HomeScreen from "./../screens/HomeScreen";
import CalendarScreen from "./../screens/CalendarScreen";
import LibraryScreen from "./../screens/LibraryScreen";
import MyPageScreen from "./../screens/MyPageScreen";

export const ROUTESLIST = [
  {
    kor: "메인",
    name: "Home",
    component: HomeScreen,
    icon: "home",
    iconOutline: "home",
  },
  {
    kor: "달력",
    name: "Calendar",
    component: CalendarScreen,
    icon: "calendar",
    iconOutline: "calendar",
  },
  {
    kor: "운동",
    name: "Library",
    component: LibraryScreen,
    icon: "barbell",
    iconOutline: "barbell",
  },
  {
    kor: "내 정보",
    name: "MyPage",
    component: MyPageScreen,
    icon: "person",
    iconOutline: "person",
  },
];
