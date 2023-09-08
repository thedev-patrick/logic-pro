// src/components/Inventory/InventoryList.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInventory } from '../../store/actions/inventoryActions';

const InventoryList = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory.inventory);

  useEffect(() => {
    dispatch(fetchInventory());
  }, [dispatch]);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> - <span>Quantity: {item.quantity}</span>
            <button>View Details</button>
          </li>
        ))}
      </ul>
      <button>Add Inventory Item</button>
    </div>
  );
};

export default InventoryList;
