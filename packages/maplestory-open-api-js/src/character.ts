import { get } from './fetcher';
import {
  Character,
  CharacterAbility,
  CharacterAndroidEquipment,
  CharacterBasic,
  CharacterBeautyEquipment,
  CharacterCashItemEquipment,
  CharacterDojang,
  CharacterHexaMatrix,
  CharacterHexaMatrixStat,
  CharacterHyperStat,
  CharacterItemEquipment,
  CharacterLinkSkill,
  CharacterPetEquipment,
  CharacterPopularity,
  CharacterPropensity,
  CharacterSetEffect,
  CharacterSkill,
  CharacterStat,
  CharacterSymbolEquipment,
  CharacterVMatrix,
} from './types/character';
import {
  CharacterQueryParameter,
  CharacterSkillParamter,
} from './types/params';
import { CHARACTER_URLS } from './urls';
import { getPreviousFormattedDate } from './utils';

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
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
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
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterPopularity>(CHARACTER_URLS.POPULARITY, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 종합 능력치 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterStat({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterStat>(CHARACTER_URLS.STAT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 하이퍼스탯 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterHyperStat({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterHyperStat>(CHARACTER_URLS.HYPER_STAT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 성향 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterPropensity({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterPropensity>(CHARACTER_URLS.PROPENSITY, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 어빌리티 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterAbility({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterAbility>(CHARACTER_URLS.ABILITY, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 장착한 장비 중 캐시 장비를 제외한 나머지 장비 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterItemEquipment({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterItemEquipment>(CHARACTER_URLS.ITEM_EQUIPMENT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 장착한 캐시 장비 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterCashItemEquipment({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterCashItemEquipment>(CHARACTER_URLS.CASHITEM_EQUIPMENT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 장착한 심볼 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterSymbolEquipment({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterSymbolEquipment>(CHARACTER_URLS.SYMBOL_EQUIPMENT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 적용받고 있는 세트 효과 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterSetEffect({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterSetEffect>(CHARACTER_URLS.SET_EFFECT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 장착 중인 헤어, 성형, 피부 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterBeautyEquipment({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterBeautyEquipment>(CHARACTER_URLS.BEAUTY_EQUIPMENT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 장착한 안드로이드 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterAndroidEquipment({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterAndroidEquipment>(CHARACTER_URLS.ANDROID_EQUIPMENT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 장착한 펫 및 펫 스킬, 장비 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterPetEquipment({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterPetEquipment>(CHARACTER_URLS.PET_EQUIPMENT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 캐릭터 스킬과 하이퍼 스킬 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 * @param character_skill_grade 조회하고자 하는 전직 차수
 */
export function getCharacterSkill({
  ocid,
  date = getPreviousFormattedDate(),
  character_skill_grade,
}: CharacterSkillParamter) {
  return get<CharacterSkill>(CHARACTER_URLS.SKILL, {
    searchParams: { ocid, date, character_skill_grade },
  });
}

/**
 * @description 장착 링크 스킬 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterLinkSkill({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterLinkSkill>(CHARACTER_URLS.LINK_SKILL, {
    searchParams: { ocid, date },
  });
}

/**
 * @description V매트릭스 슬롯 정보와 장착한 V코어 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterVMatrix({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterVMatrix>(CHARACTER_URLS.VMATRIX, {
    searchParams: { ocid, date },
  });
}

/**
 * @description HEXA 매트릭스에 장착한 HEXA 코어 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterHEXAMatrix({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterHexaMatrix>(CHARACTER_URLS.HEXAMATRIX, {
    searchParams: { ocid, date },
  });
}

/**
 * @description HEXA 매트릭스에 설정한 HEXA 스탯 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterHEXAMatrixStat({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterHexaMatrixStat>(CHARACTER_URLS.HEXAMATRIX_STAT, {
    searchParams: { ocid, date },
  });
}

/**
 * @description 캐릭터 무릉도장 최고 기록 정보를 조회
 * @param ocid 캐릭터 식별자
 * @param date 조회 기준일 (KST, EXAMPLE: 2023-12-21)
 */
export function getCharacterDojang({
  ocid,
  date = getPreviousFormattedDate(),
}: CharacterQueryParameter) {
  return get<CharacterDojang>(CHARACTER_URLS.DOJANG, {
    searchParams: { ocid, date },
  });
}
