# Pizza Ordering website
### Try it:
[PizzaRestaurant]()

## Business Requirements:
- The application should allow users to order one or more pizzas from a menu.
- No user accounts or login functionality are required; users input their names before using the app.
- The pizza menu can change and should be loaded from an existing API.
- Users can order multiple pizzas, so a cart is needed to hold multiple items.
- Users must provide their name, phone number, and address for delivery.
- If possible, GPS location should be provided to facilitate delivery.
- Users can mark orders as priority, which adds a fixed cost of 20 on top of the cart price.
- Orders are submitted via a POST request to the existing API.
- Payments are made on delivery; no payment processing is needed in the app.
- Each new order receives a unique ID displayed in the UI for status lookup.
- Users can mark orders as priority even after placing them.
