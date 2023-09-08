// src/components/Orders/OrderList.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../store/actions/orderActions';

const OrderList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <span>{order.origin}</span> to <span>{order.destination}</span>
            <button>View Details</button>
          </li>
        ))}
      </ul>
      <button>Create New Order</button>
    </div>
  );
};

export default OrderList;
