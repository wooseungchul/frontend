import axios from 'axios';
import { alert } from '@/plugins/alert/ComAlertPlugin.js';
// import store from './../store/index'

let baseUrl = window.location.href;

axios.interceptors.request.use(request => {
    request.headers['Access_Token'] = localStorage.getItem('token');
    request.headers['Refresh_TokenId'] = localStorage.getItem('refreshTokenId');
    return request;
});

class Http {
    static parseUrl(url) {
        return `${baseUrl}${url}`;
    }

    static get(url, data = null, config = {}) {
        if (data !== null) {
            config['params'] = data;
        }

        return axios.get(this.parseUrl(url), config).catch(error => {
            return Promise.reject(error.response);
        });
    }

    static post(url, data, config = null) {
        return axios
            .post(this.parseUrl(url), data, config)
            .then(response => {
                console.log('success');
                if (
                    response.data2 !== undefined &&
                    response.data.refreshToken !== undefined
                ) {
                    localStorage.setItem('token', response.data.refreshToken);
                }
                return response;
            })
            .catch(error => {
                // if (error.response.status === 403) {
                //     alert.show({
                //         type: 'alert',
                //         message: `로그인 후 이용가능합니다.`,
                //     });
                // } else {
                //     alert.show({
                //         type: 'alert',
                //         title: `${error.name}`,
                //         message: `${error.message}`,
                //     });
                // }
                alert.show({
                    type: 'alert',
                    title: `${error.name}`,
                    message: `${error.message}`,
                });
            });
    }

    static update(url, data = {}, config = null) {
        data['_method'] = 'put';

        return axios.post(this.parseUrl(url), data, config).catch(error => {
            return Promise.reject(error.response);
        });
    }

    static destroy(url, data = {}, config = null) {
        data['_method'] = 'delete';

        return axios.post(this.parseUrl(url), data, config).catch(error => {
            return Promise.reject(error.response);
        });
    }
}

export default Http;
