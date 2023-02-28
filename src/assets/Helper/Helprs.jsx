let arrow = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth ="0"
    viewBox="0 0 512 512"
    height="1em"
    width="0.9em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
  </svg>
);

export const navlinks = [
  {
    id: 1,
    name: "Order Request",
    arrow: arrow,
    to: "/",
    order: 1,
    linkOne: 'link',
    linkTwo: 'link',
    linkThree: 'link',
  },
  {
    id: 2,
    name: "PharmAssist",
    arrow: arrow,
    to: "pharmassist",
    order: 24,
    linkOne: 'link',
    linkTwo: 'link',
    linkThree: 'link',

  },
  {
    id: 3,
    name: "History",
    arrow: arrow,
    to: "history",
    linkOne: "login",
    linkTwo: 'link',
    linkThree: 'link',
  },
  {
    id: 4,
    name: "Navigation 4",
    arrow: arrow,
    linkOneName: "Products",
    linkTwoName: "Home",
    linkThreeName: "Login",
    to: "product",
    linkOne: 'product',
    linkTwo: '/',
    linkThree: 'login',
  },
  {
    id: 5,
    name: "Navigation 5",
    arrow: arrow,
    to: "",
    linkOneName: "Add Product",
    linkOne: 'link',
    linkTwo: 'link',
    linkThree: 'link',
  },
  {
    id: 6,
    name: "Navigation 6",
    arrow: arrow,
    linkOneName: "About Us",
    linkTwoName: "FAQs",
    to: "navigation6",
    linkOne: 'aboutus',
    linkTwo: 'faqs',
    linkThree: 'link',
  },
  {
    id: 7,
    name: "Navigation 7",
    arrow: arrow,
    to: "navigation7",
     linkOne: 'link',
    linkTwo: 'link',
    linkThree: 'link',
  },
];

// NavLinks
