import { faInfo } from "@fortawesome/free-solid-svg-icons";
import discount from "../../../Images/discount.svg";
import add_user from "../../../Images/add-user.svg";
import business_prime from "../../../Images/business-prime.svg";
import img1 from "../../../Images/item-box_imgs/img1.jpg";
import img2 from "../../../Images/item-box_imgs/img2.jpg";
import img3 from "../../../Images/item-box_imgs/img3.jpg";
import img4 from "../../../Images/item-box_imgs/img4.jpg";

export const signup_inputs = [
  {
    lableName: "your name",
    inputType: "text",
    inputPlaceholder: "First and last name",
  },
  {
    lableName: "Mobile number or email",
    inputType: "email",
    inputPlaceholder: "",
  },
  {
    lableName: "Password",
    inputType: "password",
    inputPlaceholder: "At least 6 characters",
    icon: faInfo,
    requriments: "Passwords must be at least 6 characters.",
  },
  {
    lableName: "Re-enter password",
    inputType: "password",
    inputPlaceholder: "",
  },
];

export const businessHeader_tabs = [
  { className: "tabs", digit: 1, title: "ACCOUNT CREATION" },
  { className: "tabs", digit: 2, title: "BUSINESS DETAILS" },
  { className: "tabs", digit: 3, title: "FINISH" },
];

export const organization_detail = [
  {
    className: "detail",
    image: discount,
    title: "Buy more, save more",
    info: "From commerce to education, save on over 60 million products when you buy two or more.",
  },
  {
    className: "detail",
    image: add_user,
    title: "Connect your people",
    info: "Create groups, share payment methods, and manage supplies across locations.",
  },
  {
    className: "detail",
    image: business_prime,
    title: "Get fast, FREE shipping with Business Prime",
    info: "Just one Business Prime membership covers unlimited free shipping on eligible orders for your entire organization.",
  },
];

export const BusinessLogin_forms = [
  { lableName: "Email or mobile phone number", type: "email" },
  { lableName: "Password", type: "password", option: "Password assistance" },
];

export const items_boxes = [
  {
    className: "box",
    title: "Gaming accessories",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
    imgClass: "img_box",
    image1: img1,
    image2: img2,
    image3: img3,
    image4: img4,
    item1_title: "Headsets",
    item2_title: "Keyboard",
    item3_title: "Computer mice",
    item4_title: "Chairs",
    button: "see more",
  },
  {
    className: "box",
    title: "TITLE2",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
  },
  {
    className: "box",
    title: "TITLE3",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
  },
  {
    className: "box",
    title: "TITLE4",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
  },
  {
    className: "box",
    title: "TITLE5",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
  },
  {
    className: "box",
    title: "TITLE6",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
  },
  {
    className: "box",
    title: "TITLE7",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
  },
  {
    className: "box",
    title: "TITLE8",
    firstRowClass: "first_row",
    secondRowClass: "second_row",
    item1Class: "item_1",
    item2Class: "item_2",
    item3Class: "item_3",
    item4Class: "item_4",
  },
];
