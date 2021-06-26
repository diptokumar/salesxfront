// import { useContext } from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { AuthContext } from '../../App';

// function PrivateRoute({ children, ...rest }) {
//     const { user } = useContext(AuthContext);
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 user ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: '/login',
//                             state: { from: location },
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

// export default PrivateRoute;
