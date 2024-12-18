export interface CongTy {
  id: number;
  ten: string;
  ten_viet_tat?: string;
  dia_chi?: string;
  sdt?: string;
  trang_thai: boolean;
}

export interface CongTyResponse {
  data: CongTy[];
  // total: number;
}

export interface CongTyRequest {
  ten: string;
  ten_viet_tat?: string;
  dia_chi?: string;
  sdt?: string;
  trang_thai: boolean;
}
