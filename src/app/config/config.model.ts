/**
 * the IAppConfig interface
 * defines as what
 * the configuration should be
 * read, especially important
 * to return the correct type
 * for function handling
 * within the app
 */
export interface IAppConfig {
    url: string;
    title: string;
    fill_char: string;
    max_tries: number;
}
