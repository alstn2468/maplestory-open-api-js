import { get } from './fetcher';
import { User } from './types/common';
import { OUID_URL } from './urls';

/**
 * @decription 계정 식별자(ouid)조회
 */
export function getOUID() {
  return get<User>(OUID_URL);
}
