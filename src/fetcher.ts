import ky from 'ky-universal';
import { Input, Options } from 'ky/distribution/types/options';

const HEADER_API_KEY = 'x-nxopen-api-key';

export const instance = ky.create({
  hooks: {
    beforeRequest: [
      (request) => {
        if (!request.headers.get(HEADER_API_KEY)) {
          throw new Error(`[ERROR] setAPIKey를 통해 헤더를 설정해주세요.`);
        }
      },
    ],
  },
});

export const get = <T>(url: Input, options?: Options) =>
  instance.get(url, options).json<T>();

export function setAPIKey(apiKey: string) {
  instance.extend({ headers: { [HEADER_API_KEY]: apiKey } });
}
