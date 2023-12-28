import { get } from './fetcher';
import { QueryParameter } from './types';
import { Union, UnionRaider } from './types/union';
import { UNION_URLS } from './urls';
import { getCurrentFormattedDate } from './utils';

/**
 * @description 유니온 레벨 및 유니온 등급 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getUnion({
  ocid,
  date = getCurrentFormattedDate(),
}: QueryParameter) {
  return get<Union>(UNION_URLS.UNION, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 유니온에 배치된 공격대원 효과 및 공격대 점령 효과 등 상세 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getUnionRaider({
  ocid,
  date = getCurrentFormattedDate(),
}: QueryParameter) {
  return get<UnionRaider>(UNION_URLS.RAIDER, {
    searchParams: { ocid, date },
  });
}
