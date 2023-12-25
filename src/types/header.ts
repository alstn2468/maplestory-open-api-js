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
