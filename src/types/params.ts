export interface OCIDParameter {
  /** 캐릭터 명 */
  character_name: string;
}

export interface CharacterQueryParameter {
  /** 캐릭터 식별자 */
  ocid: string;
  /** 조회 기준일 (KST)
   * Example : 2023-12-21
   * */
  date?: string;
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

export interface CharacterSkillParamter extends CharacterQueryParameter {
  character_skill_grade: CharacterSkillGrade;
}

type World =
  | '스카니아'
  | '베라'
  | '루나'
  | '제니스'
  | '크로아'
  | '유니온'
  | '엘리시움'
  | '이노시스'
  | '레드'
  | '오로라'
  | '아케인'
  | '노바'
  | '리부트'
  | '리부트2'
  | '버닝'
  | '버닝2'
  | '버닝3';

export interface OGuildIDParameter {
  /** 길드 명 */
  guild_name: string;
  /** 월드 명 */
  world_name: World;
}

export interface GuildQueryParameter {
  /** 길드 식별자 */
  oguild_id: string;
  /** 조회 기준일 (KST)
   * Example : 2023-12-21
   * */
  date?: string;
}
