export interface HeaderParameter {
  'x-nxopen-api-key': string;
}

export interface QueryParameter {
  /** 캐릭터 식별자 */
  ocid: string;
  /** 조회 기준일 (KST)
   * Example : 2023-12-21
   * */
  date: string;
}

/**
 * 0: 0차 스킬 및 제로 공용스킬
 * 1: 1차 스킬
 * 1.5: 1.5차 스킬
 * 2: 2차 스킬
 * 2.5: 2.5차 스킬
 * 3: 3차 스킬
 * 4: 4차 스킬 및 제로 알파/베타 스킬
 * hyperpassive: 하이퍼 패시브 스킬
 * hyperactive: 하이퍼 액티브 스킬
 * 5: 5차 스킬
 * 6: 6차 스킬
 */
type CharacterSkillGrade =
  | '0'
  | '1'
  | '1.5'
  | '2'
  | '2.5'
  | '3'
  | '4'
  | 'hyperpassive'
  | 'hyperactive'
  | '5'
  | '6';

export interface CharacterSkillParamter extends QueryParameter {
  character_skill_grade: CharacterSkillGrade;
}
