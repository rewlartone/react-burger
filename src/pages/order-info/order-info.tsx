import React,{useEffect} from 'react';
import styles from './order-info.module.css';
import { useParams, useLocation } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from '../../services/hooks';
import dayjs from 'dayjs';
import { TOrder, TIngredient } from "../../services/types"

const orderStatus: {  [key: string]: string;} = { done: 'Выполнен',
                      pending: 'Готовится',
                      created: 'Создан'
                                };


interface IOrderInfo {
  inModal?: boolean
}

const OrderInfo: React.FC<IOrderInfo> = (props) => {
  const { id }: { id: string } = useParams();
  const location = useLocation();
  const { orders, myOrders }: { orders: {orders: TOrder[]; success: boolean; total: number; totalToday: number}; myOrders: {orders: TOrder[]; success: boolean; total: number; totalToday: number} } = useSelector((store) => store.ws);
  const { ingredients } = useSelector((store) => store.ingredients);
  const [order, setOrder] = React.useState<TOrder>();
  const [cost, setCost] = React.useState<number>(0);

useEffect(
    () => {
		if(order && order.ingredients){
let c =0;
			order.ingredients.forEach((ingr) => {
				if(ingr !== null){
				c+= ingredients.find((item: TIngredient) => item._id === ingr)!.price;
				}
			})
			setCost(c);
		}
	}
   ,[order])

   useEffect(
    () => {
		if(location.pathname.indexOf('/profile') === -1){
		if(orders.orders){
			   setOrder(orders.orders.find((item: TOrder) => item.number.toString() === id));
		}
		}else{
			if(orders.orders){
			   setOrder(myOrders.orders.find((item: TOrder) => item.number.toString() === id));
		}
		}
	}
   ,[orders, location.pathname])

  return (
    <div className={styles.order} style={!props.inModal ? {marginTop:"60px"} : {marginLeft:"40px"}} >
      <p
        className="text text_type_digits-default"
        style={{ textAlign: 'center' }}
      >
        #{id}
      </p>
      <p
        className="text text_type_main-medium"
        style={{ float: 'left', clear: 'both', marginTop: '40px' }}
      >
	  {order && order.name}
      </p>
      <p
        className="text text_type_main-default"
        style={{
          float: 'left',
          clear: 'both',
          marginTop: '12px',
          color: '#00CCCC',
        }}
      >
        {order && orderStatus[order.status]}
      </p>
      <p
        className="text text_type_main-medium"
		style={!props.inModal ? { float: 'left', clear: 'both', marginTop: '60px' } : { float: 'left', clear: 'both', marginTop: '20px' }}
      >
        Состав:
      </p>
      <ul
        className={styles.ingredients}
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
	  {order && order.ingredients && order.ingredients.map((ingredient, index) => {
       return (<li className={styles.ingredient} key={index}>
          <div className={styles.circle}>
            <img
              src={ingredients.find((item: TIngredient) => item._id === ingredient)!.image}
              width="60px"
            />
          </div>
          <p
            className="text text_type_main-default"
            style={{ marginLeft: '16px', width: '414px' }}
          >
            {ingredients.find((item: TIngredient) => item._id === ingredient)!.name}
          </p>
          <div className={styles.cost}>
            <p className="text text_type_digits-default">1 x {ingredients.find((item: TIngredient) => item._id === ingredient)!.price}</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>)
	  })
	  }
      </ul>
      <p
        className="text text_type_main-default"
		style={!props.inModal ? { float: 'left', marginTop: '40px', color: '#8585AD' } : { float: 'left', marginTop: '10px', color: '#8585AD' }}
      >
            {order && dayjs(new Date(order.createdAt)).fromNow(true)},{" "}
            {order && dayjs(new Date(order.createdAt)).format("HH:mm")} i-GMT
            {order && dayjs(new Date(order.createdAt)).format("Z").split(":")[0]}
      </p>
      <div className={styles.cost} style={!props.inModal ? { marginTop: '40px' } : { marginTop: '10px', paddingBottom:"20px" }} >
        <p className="text text_type_digits-default">1 x {cost}</p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
}

export default OrderInfo;
