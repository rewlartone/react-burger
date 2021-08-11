import React, { useEffect } from 'react';
import styles from './order-feed.module.css';
import Feed from '../../components/feed/feed';
import { useDispatch, useSelector } from '../../services/hooks';
import { TOrder } from "../../services/types"


const OrderFeed: React.FC = () => {
  const dispatch = useDispatch();
  const [dones, setDones] = React.useState<TOrder[]>([]);
  const [pendings, setPendings] = React.useState<TOrder[]>([]);
  const { orders }: { orders: {orders: TOrder[] | null; success: boolean; total: number; totalToday: number}} = useSelector((store) => store.ws);
  useEffect(
    () => {
		if(orders.orders !== null){
        setDones(orders.orders.filter((item: TOrder) =>  item.status === "done" ));
		setPendings(orders.orders.filter((item: TOrder) =>  item.status === "pending"));

		}
    },[orders.orders]);

  return (
    <>
      <div className={styles.orderfeed}>
        <h1 className="text text_type_main-large">Лента заказов</h1>
		{orders.orders && <Feed type="feed" data={orders.orders}/>}
      </div>
      <div className={styles.progress}>
        <div className={styles.ready}>
          <p className="text text_type_main-medium">Готовы:</p>
          <ul>
		  {dones.map((item, index) => {
			  if(index<5){
				  return <li className="text text_type_digits-default" key={index}>{item.number}</li>
			  }
		  })
		  }
          </ul>
        </div>
        <div className={styles.cooking}>
          <p className="text text_type_main-medium">В работе:</p>
          <ul>
           		  {pendings.map((item, index) => {
			  if(index<5){
				  return <li className="text text_type_digits-default" key={index}>{item.number}</li>
			  }
		  })
		  }
          </ul>
        </div>
        <p
          className="text text_type_main-medium"
          style={{
            clear: 'both',
            position: 'relative',
            float: 'left',
            marginTop: '60px',
          }}
        >
          Выполнено за все время:
        </p>
        <p
          className="text text_type_digits-large"
          style={{
            clear: 'both',
            textShadow:
              '0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)',
          }}
        >
		{orders.total}
        </p>
        <p
          className="text text_type_main-medium"
          style={{
            clear: 'both',
            position: 'relative',
            float: 'left',
            marginTop: '60px',
          }}
        >
          Выполнено за сегодня:
        </p>
        <p
          className="text text_type_digits-large"
          style={{
            clear: 'both',
            textShadow:
              '0px 0px 16px rgba(51, 51, 255, 0.25), 0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5)',
          }}
        >
         {orders.totalToday}
        </p>
      </div>
  </>
  );
}

export default OrderFeed;
