import axios from "axios";

export const initialState = {
  basket: [],

  user: null,
};

export const getbasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;

    case "REMOVE_FROM_BASKET":
      console.log(action.id, "...........remove basket");
      var storedNames = JSON.parse(localStorage.getItem("myData"));
      let makeArray = [];
      storedNames.map((v, k) => {
        if (k != action.id) {
          makeArray.push({
            id: v.id,
            title: v.title,
            price: v.price,
            rating: v.rating,
            image: v.image,
          });
        }
      });
      localStorage.setItem("myData", JSON.stringify(makeArray));
      return { ...state, storedNames };
      break;

    case "SET_USER":
      return {
        ...action,
        basket: [...state.basket, action.item],
      };
      break;

    case "LOGIN":
      let email = action.item.email;
      let password = action.item.password;

      console.log(email, password);

      axios
        .post("http://localhost:4200/login", {
          email,
          password,
        })
        .then((res) => {
          console.log(res,'RESPONSE DATA');
          res = res.data;

            
          if (res.length>0) {
            
            localStorage.setItem("User", JSON.stringify(res));
            console.log()
            
          }
          else if(res.length===0){
            console.log('hello')
            localStorage.clear()
          }

          return{
            state,
            user:[res]
          }
        });
      return state;
      break;

    default:
      return state;
  }
};

export default reducer;
