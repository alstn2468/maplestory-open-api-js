export interface User {
  /** 유저식별자 */
  ouid: string;
}

export interface Skill {
  /** 스킬 명 */
  skill_name: string;
  /** 스킬 설명 */
  skill_description: string;
  /** 스킬 레벨 */
  skill_level: number;
  /** 스킬 레벨 별 효과 */
  skill_effect: string;
  /** 스킬 아이콘 */
  skill_icon: string;
}
