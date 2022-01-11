import React, { Suspense } from 'react';
import { Route , Switch, withRouter, Redirect} from 'react-router-dom';

// import classes from './App.css';
import Layout from './hoc/Layout/Layout';
// import Shop from './containers/Shop/Shop';
import HomePage from './containers/HomePage/HomePage';

// const Cart = React.lazy(() => {
//   return import('./containers/Cart/Cart');
// });

const Shop = React.lazy(() => {
  return import('./containers/Shop/Shop');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const Profile = React.lazy(() => {
  return import('./containers/Profile/Profile');
});

const UploadImg = React.lazy(() => {
  return import('./containers/MngPages/UplaodImg/UploadImg');
});

const OrderPage = React.lazy(() => {
  return import('./components/Products/ProductsOrderPage/OrderPage');
});

function App() {

  let routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props}/>} />
      <Route path="/shop" render={(props) => <Shop {...props}/>} />
      <Route path="/profile" render={(props) => <Profile {...props}/>} />
      <Route path="/UploadImage" render={(props) => <UploadImg {...props}/>} />
      <Route path="/orderPage" render={(props) => <OrderPage {...props}/>} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout isAuth={true}>
        <Suspense fallback={<p>Loading...</p>}>
            {routes}
          </Suspense>
      </Layout>
    </div>
  );
}

export default withRouter(App);
