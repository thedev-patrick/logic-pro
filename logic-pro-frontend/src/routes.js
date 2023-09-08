// src/routes.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/Auth/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import OrderList from './components/Orders/OrderList';
import OrderDetails from './components/Orders/OrderDetails';
import CreateOrder from './components/Orders/CreateOrder';
import RouteList from './components/Routes/RouteList';
import CreateRoute from './components/Routes/CreateRoute';
import InventoryList from './components/Inventory/InventoryList';
import InventoryDetails from './components/Inventory/InventoryDetails';
import AddInventoryItem from './components/Inventory/AddInventoryItem';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <PrivateRoute path="/orders" exact component={OrderList} />
    <PrivateRoute path="/orders/:orderId" component={OrderDetails} />
    <PrivateRoute path="/create-order" component={CreateOrder} />
    <PrivateRoute path="/routes" exact component={RouteList} />
    <PrivateRoute path="/create-route" component={CreateRoute} />
    <PrivateRoute path="/inventory" exact component={InventoryList} />
    <PrivateRoute path="/inventory/:itemId" component={InventoryDetails} />
    <PrivateRoute path="/add-inventory-item" component={AddInventoryItem} />
    {/* Add more routes as needed */}
  </Switch>
);

export default Routes;
