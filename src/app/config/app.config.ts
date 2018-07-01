import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IAppConfig } from './config.model';

//getting it readable globally
//through injectable
@Injectable()
export class AppConfig {

    //settings implements the
    //interface IAppConfig
    //from config.model
    static settings: IAppConfig;

    //just initializing the http component
    constructor(private http: Http) {}

    /**
     * loading the configuration
     * from the json file, which by
     * default resides in assets folder
     * and return em to the app as
     * AppConfig.settings
     */
    load() {
        const jsonFile = 'assets/config.json';
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : Response) => {
                AppConfig.settings = <IAppConfig>response.json();
                resolve();
            }).catch((response: any) => {
                reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
            });
        });
    }
}
