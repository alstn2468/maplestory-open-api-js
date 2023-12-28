const BASE_URL = `/maplestory/v1`;
const CHARACTER_BASE_URL = `${BASE_URL}/character`;

export const CHARACTER_URLS = {
  /** 캐릭터 식별자(ocid) 조회 */
  OCID: `${BASE_URL}/id`,
  /** 기본 정보 조회 */
  BASIC: `${CHARACTER_BASE_URL}/basic`,
  /** 인기도 정보 조회 */
  POPULARITY: `${CHARACTER_BASE_URL}/popularity`,
  /** 종합 능력치 정보 조히 */
  STAT: `${CHARACTER_BASE_URL}/stat`,
  /** 하이퍼스탯 정보 조회 */
  HYPER_STAT: `${CHARACTER_BASE_URL}/hyper-stat`,
  /** 성향 정보 조회 */
  PROPENSITY: `${CHARACTER_BASE_URL}/propensity`,
  /** 어빌리티 정보 조회 */
  ABILITY: `${CHARACTER_BASE_URL}/ability`,
  /** 장착 장비 정보 조회 (캐시 장비 제외) */
  ITEM_EQUIPMENT: `${CHARACTER_BASE_URL}/item-equipment`,
  /** 장착 캐시 장비 정보 조회 */
  CASHITEM_EQUIPMENT: `${CHARACTER_BASE_URL}/cashitem-equipment`,
  /** 장착 심볼 정보 조회 */
  SYMBOL_EQUIPMENT: `${CHARACTER_BASE_URL}/symbol-equipment`,
  /** 적용 세트 효과 정보 조회 */
  SET_EFFECT: `${CHARACTER_BASE_URL}/set-effect`,
  /** 장착 헤어, 성형, 피부 정보 조회 */
  BEAUTY_EQUIPMENT: `${CHARACTER_BASE_URL}/beauty-equipment`,
  /** 장착 안드로이드 정보 조회 */
  ANDROID_EQUIPMENT: `${CHARACTER_BASE_URL}/android-equipment`,
  /** 장착 펫 정보 조회 */
  PET_EQUIPMENT: `${CHARACTER_BASE_URL}/pet-equipment`,
  /** 스킬 정보 조회 */
  SKILL: `${CHARACTER_BASE_URL}/skill`,
  /** 장착 링크 스킬 정보 조회 */
  LINK_SKILL: `${CHARACTER_BASE_URL}/link-skill`,
  /** V매트릭스 정보 조회 */
  VMATRIX: `${CHARACTER_BASE_URL}/vmatrix`,
  /** HEXA 코어 정보 조회 */
  HEXAMATRIX: `${CHARACTER_BASE_URL}/hexamatrix`,
  /** HEXA 매트릭스 설정 HEXA 스텟 정보 조회 */
  HEXAMATRIX_STAT: `${CHARACTER_BASE_URL}/hexamatrix-stat`,
  /** 무릉도장 최고 기록 정보 조회 */
  DOJANG: `${CHARACTER_BASE_URL}/dojang`,
};
