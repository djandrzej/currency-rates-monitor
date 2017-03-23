import superagent from 'superagent';
import {isObject} from 'lodash';
import config from '../../config';

class Request {

    static defaultHeaders = {
        Accept: 'application/json'
    };

    constructor(method, url) {
        this.customHeaders = {
            ...Request.defaultHeaders
        };
        return superagent(method, config.apiUrl + url).set(this.customHeaders);
    }

    set(field, value) {
        if (isObject(field)) {
            Object.keys(field)
                .forEach(key => this.set(key, field[key]));
            return this;
        }
        this.customHeaders[field] = value;
        return this;
    }

}

export default function request(method, url) {
    return new Request(method, url);
}
