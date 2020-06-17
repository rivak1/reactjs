import { axiosAuth } from 'common/axios-instances';
export function axiosAuthMiddleware({ dispatch, getState }) {
	return next => action => {
		axiosAuth.interceptors.request.use ( 
            function(c){
				alert(1)
				c.headers['Authorization'] = 'Bearer ';
				return c;
			},
			function(error) {
				return Promise.reject(error);
			}
        );
		next(action);
	};
}

// export function axiosErrorHandler(store) {
// 	axiosAuth.interceptors.response.use(
// 		function(response) {
// 			// Do something with response data
// 			return response;
// 		},
// 		function(error) {
// 			// Do something with response error
// 			if (error.response.status === 401) {
// 				localStorage.clear();
// 				store.dispatch({ type: UNAUTH_USER });
// 			}

// 			// Trow errr again (may be need for some other catch)
// 			return Promise.reject(error);
// 		}
// 	);
// }
