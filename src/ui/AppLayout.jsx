import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      {/* {true && <Loader />} */}
      <Header />
      {/* scroll the main if no space */}
      <div className="hide-scrollbar overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* to render the content of a nested route inside another route */}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
