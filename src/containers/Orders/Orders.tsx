import React, { useState } from "react";
import Order from "../../components/Order/Order";
import { useEffect } from "react";
import axios from "../../axios-oders";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";

const Orders = () => {
  const [orders, setOrders] = useState<{ [key: string]: any }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then(res => {
        setLoading(false);
        let fetchedOrders = [];
        const data = res.data;
        for (let key in data) {
          fetchedOrders.push({ ...data[key], id: key });
        }
        setOrders(fetchedOrders);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ))}
    </div>
  );
};

export default withErrorHandler(Orders, axios);
