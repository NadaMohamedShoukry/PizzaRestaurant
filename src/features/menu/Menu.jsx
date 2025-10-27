import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
//Implemented a render as you fetch strategy
function Menu() {
  //Third Step : provide the data to the page.
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
//First Step : create the loader.
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
