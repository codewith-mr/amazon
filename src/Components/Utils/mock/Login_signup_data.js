import { faInfo } from "@fortawesome/free-solid-svg-icons";
import discount from "../../../Images/discount.svg";
import add_user from "../../../Images/add-user.svg";
import business_prime from "../../../Images/business-prime.svg";

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
