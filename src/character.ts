import { get } from './fetcher';
import { QueryParameter } from './types';
import {
  Character,
  CharacterBasic,
  CharacterPopularity,
} from './types/character';
import { CHARACTER_URLS } from './urls';
import { getCurrentFormattedDate } from './utils';

/**
 * @decription 캐릭터 식별자(ocid) 조회
 * @param character_name 캐릭터 명
 */
export function getOCID(character_name: string) {
  return get<Character>(CHARACTER_URLS.OCID, {
    searchParams: { character_name },
  });
}

/**
 * @description 기본 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterBasic({
  ocid,
  date = getCurrentFormattedDate(),
}: QueryParameter) {
  return get<CharacterBasic>(CHARACTER_URLS.BASIC, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 인기도 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterPopularity({
  ocid,
  date = getCurrentFormattedDate(),
}: QueryParameter) {
  return get<CharacterPopularity>(CHARACTER_URLS.POPULARITY, {
    searchParams: { ocid, date },
  });
}
