# Pizza Ordering website
### Try it:
[PizzaRestaurant](https://pizza-online-restaurant.netlify.app/)

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

## Deriving Feature Categories
From the requirements, we derive the main feature categories:
- User: Handling user input such as name.
- Menu: Loading and displaying the pizza menu.
- Cart: Managing selected pizzas and quantities.
- Order: Placing new orders and looking up existing orders by ID.

## Defining Application Pages
Based on the feature categories, we identify the pages needed:
- Homepage: Where the user inputs their name , /.
- Pizza Menu page: Displays the menu , /menu.
- Cart page: Shows the user's cart , /cart.
- New Order page: For placing a new order,  /order/new.
- Order Lookup page: For looking up an existing order by ID, /order/:orderId.

## State Management
Our four feature categories map nicely to different state slices or domains, borrowing the term "state slices" from Redux:
- User slice: Global UI state stored within the application.
- Menu slice: Global remote state fetched from an API.
- Cart slice: Global UI state stored locally.
- Order slice: Global remote state submitted to and fetched from an API.

## Technology Decisions
- Routing: Use React Router, the standard for React single-page applications.
- Styling: Use Tailwind CSS, a popular and trendy CSS framework.
- Remote State Management: Utilize React Router's new data fetching capabilities (version 6.4+) to implement a "render as you fetch" approach.
- UI State Management: Use Redux for managing complex UI state, providing advantages for this kind of state.
