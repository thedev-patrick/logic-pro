// src/components/Routes/RouteList.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoutes } from '../../store/actions/routeActions';

const RouteList = () => {
  const dispatch = useDispatch();
  const routes = useSelector((state) => state.route.routes);

  useEffect(() => {
    dispatch(fetchRoutes());
  }, [dispatch]);

  return (
    <div>
      <h2>Routes</h2>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <span>{route.startingPoint}</span> to <span>{route.destination}</span>
            <button>View Details</button>
          </li>
        ))}
      </ul>
      <button>Create New Route</button>
    </div>
  );
};

export default RouteList;
