interface UnionrBase {
  /** 조회 기준일 (KST, 일 단위 데이터로 시, 분은 일괄 0으로 표기)
   * example: 2023-12-21T00:00+09:00
   * */
  date: string;
}

export interface Union extends UnionrBase {
  /** 유니온 레벨 */
  union_level: number;
  /** 유니온 등급 */
  union_grade: string;
}

export interface UnionRaider extends UnionrBase {
  /** 유니온 공격대원 효과 */
  union_raider_stat: Array<string>;
  /** 유니온 공격대 점령 효과 */
  union_occupied_stat: Array<string>;
  /** 유니온 공격대 배치 */
  union_inner_stat: Array<{
    /** 공격대 배치 위치 (11시 방향부터 시계 방향 순서대로 0~7) */
    stat_field_id: string;
    /** 해당 지역 점령 효과 */
    stat_field_effect: string;
  }>;
  /** 유니온 블록 정보 */
  union_block: Array<{
    /** 블록 모양(전사, 마법사, 궁수, 도적, 해적, 메이플m, 하이브리드) */
    block_type: string;
    /** 블록 해당 캐릭터 직업 */
    block_class: string;
    /** 블록 해당 캐릭터 레벨 */
    block_level: string;
    /**
     * 블록 기준점 좌표
     * 중앙 4칸 중 오른쪽 아래 칸이 x : 0, y : 0 포지션
     * 좌측으로 1칸씩 이동하면 x가 1씩 감소
     * 우측으로 1칸씩 이동하면 x가 1씩 증가
     * 아래로 1칸씩 이동하면 y가 1씩 감소
     * 위로 1칸씩 이동하면 y가 1씩 증가
     */
    block_control_point: {
      /** 블록 기준점 X좌표 */
      x: number;
      /** 블록 기준점 Y좌표 */
      y: number;
    };
    /** 블록이 차지하고 있는 영역 좌표들 (null:미 배치 시) */
    block_position: Array<{
      /** 블록 기준점 X좌표 */
      x: number;
      /** 블록 기준점 Y좌표 */
      y: number;
    }>;
  }>;
}
