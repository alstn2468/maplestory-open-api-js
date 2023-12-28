import ky, { Options } from 'ky-universal';

const HEADER_API_KEY = 'x-nxopen-api-key';

let API_KEY: string;

export const instance = ky.create({
  headers: {
    'content-type': 'application/json',
  },
  hooks: {
    beforeRequest: [
      (request) => {
        if (!API_KEY) {
          throw new Error('[ERROR] setAPIKey를 통해 헤더를 설정해주세요.');
        }
        request.headers.set(HEADER_API_KEY, API_KEY);
      },
    ],
  },
});

export const get = <T>(url: string, options?: Options) =>
  instance.get(url, options).json<T>();

export function setAPIKey(apiKey: string) {
  API_KEY = apiKey;
}
