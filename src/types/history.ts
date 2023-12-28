interface HistoryBase {
  /** 결과 건 수 */
  count: number;
  /** 페이징 처리를 위한 cursor */
  next_cursor: string;
}

export interface StarforceHistory extends HistoryBase {
  /** 스타포스 히스토리 */
  starforce_history: Array<{
    /** 스타포스 히스토리 식별자 */
    id: string;
    /** 강화 시도 결과 */
    item_upgrade_result: string;
    /** 강화 시도 전 스타포스 수치 */
    before_starforce_count: number;
    /** 강화 시도 후 스타포스 수치 */
    after_starforce_count: number;
    /** 스타 캐치 */
    starcatch_result: string;
    /** 슈페리얼 장비 */
    superior_item_flag: string;
    /** 파괴 방지 */
    destroy_defence: string;
    /** 찬스 타임 */
    chance_time: string;
    /** 파괴 방지 필드 이벤트 */
    event_field_flag: string;
    /** 사용 주문서 명 */
    upgrade_item: string;
    /** 프로텍트 실드 */
    protect_shield: string;
    /** 보너스 스탯 부여 아이템 여부 */
    bonus_stat_upgrade: string;
    /** 캐릭터 명 */
    character_name: string;
    /** 월드 명 */
    world_name: string;
    /** 대상 장비 아이템 명 */
    target_item: string;
    /** 강화 일시(KST)
     * example: 2023 - 12 - 27T17: 28 +09:00
     * */
    date_create: string;
    /** 진행 중인 스타포스 강화 이벤트 정보 */
    starforce_event_list: Array<{
      /** 이벤트 성공 확률 */
      success_rate: string;
      /** 이벤트 비용 할인율 */
      cost_discount_rate: string;
      /** 이벤트 강화 수치 가중값 */
      plus_value: string;
      /** 이벤트 적용 강화 시도 가능한 n성 범위 */
      starforce_event_range: string;
    }>;
  }>;
}

interface PotentialOption {
  /** 옵션 명 */
  value: string;
  /** 옵션 등급 */
  grade: string;
}

export interface CubeHistory extends HistoryBase {
  cube_history: Array<{
    /** 큐브 히스토리 식별자 */
    id: string;
    /** 캐릭터 명 */
    character_name: string;
    /** 사용 일시(KST)
     * example: 2023-12-21T17:28+09:00
     * */
    date_create: string;
    /** 사용 큐브 */
    cube_type: string;
    /** 사용 결과 */
    item_upgrade_result: string;
    /** 미라클 타임 적용 여부 */
    miracle_time_flag: string;
    /** 장비 분류 */
    item_equipment_part: string;
    /** 장비 레벨 */
    item_level: number;
    /** 큐브 사용한 장비 */
    target_item: string;
    /** 잠재능력 등급 */
    potential_option_grade: string;
    /** 에디셔널 잠재능력 등급 */
    additional_potential_option_grade: string;
    /** 천장에 도달하여 확정 등급 상승한 여부 */
    upgrade_guarantee: boolean;
    /** 현재까지 쌓은 스택 */
    upgrade_guarantee_count: number;
    /** 사용 전 잠재능력 옵션 */
    before_potential_option: Array<PotentialOption>;
    /** 사용 전 에디셔널 잠재능력 옵션 */
    before_additional_potential_option: Array<PotentialOption>;
    /** 사용 후 잠재능력 옵션 */
    after_potential_option: Array<PotentialOption>;
    /** 사용 후 에디셔널 잠재능력 옵션 */
    after_additional_potential_option: Array<PotentialOption>;
  }>;
}
