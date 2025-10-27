/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  console.log(order);
  return (
    //this will not navigate away from the form.
    //it will submit the form and revalidate the page.
    //Re-validation means React Router detects that data has changed as a result of the action,
    // automatically fetches the latest data in the background,
    // and updates the UI accordingly. This enables updating data without causing navigation or manual refreshes.
    //but the other Form will navigate away to another page.
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
export async function action({ request, params }) {
  console.log("update");
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
