/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  function deletePizzaItem() {
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type="small" onClick={deletePizzaItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
