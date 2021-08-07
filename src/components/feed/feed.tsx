import React,{useEffect} from "react";
import styles from "./feed.module.css";
import PropTypes from "prop-types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from '../../services/hooks';
import { useLocation, Link } from "react-router-dom";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { TOrder, TIngredient } from "../../services/types"

const orderStatus: {  [key: string]: string;} = {
	done: 'Выполнен', 
    pending: 'Готовится',
    created: 'Создан'
};
dayjs.extend(relativeTime);
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    past: "сегодня",
    s: 'сегодня',
    m: "сегодня",
    mm: "сегодня",
    h: "сегодня",
    hh: "сегодня",
    d: "вчера",
    dd: "%d дня назад",
    M: "месяц назад",
    MM: "%d месяца назад",
    y: "год назад",
    yy: "%d года назад"
  }
})

interface IFeed {
  data: TOrder[] | undefined,
  type: string;
  status?: boolean
}

const Feed: React.FC<IFeed> = (props) => {
	  const location = useLocation();
  const { ingredients } = useSelector((store) => store.ingredients);
  const [costs, setCosts] = React.useState<number[]>([]);
  useEffect(
    () => {
		let cost: number =0;
		let costsArr: number[] =[];
		if(props.data !== undefined){
        props.data.forEach((ingrs: TOrder) => {
			ingrs.ingredients.forEach((ingr: string) => {
				if(ingr !== null){
				cost+= ingredients.find((item: TIngredient) => item._id === ingr).price;
				}
			})
			costsArr.push(cost);
			cost=0;
		}
	)
	setCosts([...costsArr]);
		}
    },[props.data]);

  return (
    <ul
      className={styles.feed}
      style={{ display: "flex", flexDirection: "column", gap: "16px" }}
    >
	{props.data&& props.data.map((element: TOrder, index: number) => {
                  return(  <li className={styles.order} key={element._id}>
        <Link
          to={{ pathname: `/${props.type}/${element.number}`,
				state: { background: location }		  }}
          style={{ color: "#fff" }}
        >
          <p
            className="text text_type_digits-default"
            style={{
              float: "left",
              display: "inline-block",
              marginLeft: "24px",
            }}
          >
            #{element.number}
          </p>
          <p
            className="text text_type_main-default"
            style={{
              float: "right",
              display: "inline-block",
              marginRight: "24px",
              color: "#8585AD",
            }}
          >
            {dayjs(new Date(element.createdAt)).fromNow(true)},{" "}
            {dayjs(new Date(element.createdAt)).format("HH:mm")} i-GMT
            {dayjs(new Date(element.createdAt)).format("Z").split(":")[0]}
          </p>
          <p
            className="text text_type_main-medium"
            style={{
              float: "left",
              clear: "both",
              marginLeft: "24px",
              marginTop: "24px",
            }}
          >
            {element.name}
          </p>
          {props.status && (
            <p
              className="text text_type_main-default"
              style={{
				display: "block",
                float: "left",
                clear: "both",
                marginLeft: "24px",
                marginTop: "8px",
				color: "#00CCCC"
              }}
            >
              {orderStatus[element.status]}
            </p>
          )}
          <ul className={styles.circles}>
			  { element.ingredients.map((ingredient, index) => {
				  if(ingredient !== null && index<5 ){
					  if(element.ingredients.length>5 && index === 4){
            return (<li className={styles.circle} key={index}>
<p
                className="text text_type_digits-default"
                style={{ position: "absolute", top: "14px", left: "10px" }}
              >
                +{element.ingredients.length-5}
			 </p>
              <img
                src={ingredients.find((item: TIngredient) => item._id === ingredient).image}
                width="60px"
                style={{ opacity: "0.3" }}
              />
            </li>);
					  }else{
						return (<li className={styles.circle} key={index}>
              <img
                src={ingredients.find((item: TIngredient) => item._id === ingredient).image}
                width="60px"
              />
            </li>);  
					  }
				  }
			  })
			  }
          </ul>
          <div className={styles.cost}>
            <p className="text text_type_digits-default"> 
			{costs[index]}
			</p>
            <CurrencyIcon type="primary" />
          </div>
        </Link>{" "}
      </li>)
            })} 

     
    </ul>
  );
}

export default Feed;
