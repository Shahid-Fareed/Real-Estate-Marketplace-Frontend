import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PropertyList from "../pages/PropertyList";
import Agency from "../pages/Agency";
import PropertyDetails from "../pages/PropertyDetails";
import Inbox from "../dashboard/Inbox/Inbox";
import Properties from "../dashboard/Properties/Properties";
import AddProperties from "../dashboard/Properties/AddProperties";
import DashboardHome from "../dashboard/Dashboard/Dash";
import Login from "../dashboard/Auth/Login";
import ManageMembers from "../dashboard/User Managment/ManageMembers";
import AddUserRole from "../dashboard/User Managment/AddUserRole";
import AgencyProfile from "../dashboard/Profile/AgencyProfile";
import UserProfile from "../dashboard/Profile/UserProfile";
import Client from "../dashboard/Client/Client";
import EditProfile from "../dashboard/Profile/EditProfile";
import EditAgencyProfile from "../dashboard/Profile/EditAgencyProfile";
import Roles from "../dashboard/User Managment/Roles";
import EditRole from "../dashboard/User Managment/EditRole";
import AddMember from "../dashboard/User Managment/AddMember";
import EditMember from "../dashboard/User Managment/EditMember";
import CreatePackage from "../dashboard/Package/CreatePackage";
import AllPackages from "../dashboard/Package/AllPackages";
import EditPackage from "../dashboard/Package/EditPackage";
import Advertisments from "../dashboard/Advertisment/Advertisments";
import SelectPayment from "../dashboard/Advertisment/SelectPayment";
import UserOrders from "../dashboard/Orders/UserOrders";
import OrderHistory from "../dashboard/Orders/OrderHistory";
import PropertiesAgency from "../dashboard/Properties/PropertiesAgency";
import PropertiesAdmin from "../dashboard/Properties/PropertiesAdmin";
import VerifyProperties from "../dashboard/Properties/VerifyProperties";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import Careers from "../pages/Careers/Careers";
import About from "../pages/About/About";
import ResetPassword from "../pages/ResetPassword";

export const HomeRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<PropertyList />} />
      <Route path="/agency" element={<Agency />} />
      <Route path="/property-detail/:slug" element={<PropertyDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog-detail/:id" element={<BlogDetail />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
};

export const DashboardRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardHome />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="properties/user" element={<Properties />} />
      <Route path="properties/admin" element={<PropertiesAdmin />} />
      <Route path="properties/agency" element={<PropertiesAgency />} />
      <Route path="properties/verify" element={<VerifyProperties />} />
      <Route path="properties/add" element={<AddProperties />} />
      <Route path="clients" element={<Client />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="profile/edit" element={<EditProfile />} />
      <Route path="agency-profile" element={<AgencyProfile />} />
      <Route path="agency-profile/edit" element={<EditAgencyProfile />} />
      <Route path="roles" element={<Roles />} />
      <Route path="add-user-role" element={<AddUserRole />} />
      <Route path="roles/:id" element={<EditRole />} />
      <Route path="manage-members" element={<ManageMembers />} />
      <Route path="add-members" element={<AddMember />} />
      <Route path="manage-members/:id" element={<EditMember />} />
      <Route path="add-package" element={<CreatePackage />} />
      <Route path="packages" element={<AllPackages />} />
      <Route path="packages/:id" element={<EditPackage />} />
      <Route path="advertisments" element={<Advertisments />} />
      <Route path="advertisments/payment/:id" element={<SelectPayment />} />
      <Route path="user-orders" element={<UserOrders />} />
      <Route path="order-history" element={<OrderHistory />} />
    </Routes>
  );
};
