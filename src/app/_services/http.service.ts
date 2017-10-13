// import { NotifyService } from './notify.service';
// import { LanguageService } from './language.service';
// import { Preloader } from './../shared/preloader/preloader.service';
import { Constants } from './../app.config';
import { Injectable, Inject, Injector } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ToastyServiceService } from './../_services/toasty-service.service';

const removeSlashes = (url: string): string => {
    if (!url)
        return url

    if (url.startsWith('/'))
        url = url.slice(1, url.length)

    if (url.endsWith('/'))
        url = url.slice(0, url.length - 1)

    return url;
}

const toJSON = (data: any): string => {
    try {
        return JSON.stringify(data)
    } catch (e) {
        return data
    }
}

@Injectable()
export class HttpService extends Http {
    private apiType: string;

    constructor(backend: XHRBackend,
        defaultOptions: RequestOptions,
        // private preloader: Preloader,
        private appConstants: Constants,
        private toastyServiceService: ToastyServiceService,
        private injector: Injector) {
        super(backend, defaultOptions);
        this.apiType = appConstants.APITypeApplication;
    }

    // public get language(): LanguageService {
    //     return this.injector.get(LanguageService);
    // }

    // public get authService(): AuthService {
    //     return this.injector.get(AuthService);
    // }

    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options);
    }

    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    get(url: string, options?: RequestOptionsArgs, type: string = this.apiType, noLoader?: boolean): Observable<any> {
        this.requestInterceptor(noLoader);
        return super.get(this.getFullUrl(url, type), this.requestOptions(options))
            .timeout(this.appConstants.APIRequestTimeout)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res, true);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally(noLoader);
            });
    }

    getLocal(url: string, options?: RequestOptionsArgs): Observable<any> {
        return super.get(url, options);
    }

    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    post(url: string, body: any, options?: RequestOptionsArgs, type: string = this.apiType, noLoader?: boolean): Observable<any> {
        this.requestInterceptor(noLoader);
        return super.post(this.getFullUrl(url, type), toJSON(body), this.requestOptions(options))
            .timeout(this.appConstants.APIRequestTimeout)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally(noLoader);
            });
    }

    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    put(url: string, body: string, options?: RequestOptionsArgs, type: string = this.apiType, noLoader?: boolean): Observable<any> {
        this.requestInterceptor(noLoader);
        return super.put(this.getFullUrl(url, type), toJSON(body), this.requestOptions(options))
            .timeout(this.appConstants.APIRequestTimeout)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally(noLoader);
            });
    }

    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    delete(url: string, options?: RequestOptionsArgs, type: string = this.apiType, noLoader?: boolean): Observable<any> {
        this.requestInterceptor(noLoader);
        return super.delete(this.getFullUrl(url, type), this.requestOptions(options))
            .timeout(this.appConstants.APIRequestTimeout)
            .catch(this.onCatch)
            .do((res: Response) => {
                this.onSubscribeSuccess(res);
            }, (error: any) => {
                this.onSubscribeError(error);
            })
            .finally(() => {
                this.onFinally(noLoader);
            });
    }
    /**
	 * Custom http request to upload files
	 * @param url
	 * @param params
	 * @param files
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers({ 'Content-Type': 'application/json' });
        }
        else {
            options.headers.set('Content-Type', 'application/json');
        }
        return this.setAPIHeaders(options);
    }

    /**
     * Method to set the headers for the request
     *
     * @private
     * @param {any} options
     * @returns
     *
     * @memberOf HttpService
     */
    private setAPIHeaders(options) {
        let selectedLanguage = 'en';
        // let languageId = selectedLanguage ? selectedLanguage.id : null;
        // let cultureCode = selectedLanguage ? selectedLanguage.cultureCode : null;
        let token = 'Bearer ' + "session tocken";
        if (token) {
            options.headers.set('Authorization', token);
        }
        options.headers.set('X-Client-Id', 'backend_web');
        options.headers.set('x-app-client-token', this.appConstants.appClientToken);
        options.headers.set('language', selectedLanguage);
        return options;
    }

    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    private getFullUrl(url: string, type: string): string {
        // return full URL to API here
        let qUrl = url;
        let apiBasePath = type ? (type == 'IDENTITY' ? this.appConstants.APIBasePathIdentity : this.appConstants.APIBasePath) : this.appConstants.APIBasePath;
        //let apiBasePath = this.appConstants.APIBasePath;
        return `${removeSlashes(apiBasePath)}/${removeSlashes(qUrl)}`;
    }

    /**
     * Request interceptor.
     */
    private requestInterceptor(noLoader): void {
        if (noLoader == undefined || noLoader == false) {
            // this.preloader.start();
        }
    }

    /**
     * Response interceptor.
     */
    private responseInterceptor(noLoader): void {
        if (noLoader == undefined || noLoader == false) {
            // this.preloader.stop();
        }

    }

    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    /**
     * onSubscribeSuccess
     * @param res
     */
    private onSubscribeSuccess(res: Response, isGetRequest?: boolean): void {
        let response = res.json();
        let responseMessages = response.messages;
        let status = response.status;
        if (!isGetRequest && responseMessages) {
          console.log("show notify = responseMessages");
            // this.notify.show(status, responseMessages);
        }
    }

    /**
     * onSubscribeError
     * @param error
     */
    private onSubscribeError(error: any): void {
        if (error.status === 401) {
            // if (!this.authService.receivingToken) {
            //     // this.authService.sessionExpired();
            // }
            console.log('401')
        }
        else {
            this.toastyServiceService.showToast('success', 'title','Message');
            console.log("common API error")
        }
    }

    /**
     * onFinally
     */
    private onFinally(noLoader): void {
        this.responseInterceptor(noLoader);
    }
}
