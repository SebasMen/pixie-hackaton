export interface couponComplete {
  id: string,
  claimCode: string,
  expireDate: string,
  discount: number,
  maxUses: number,
  usesByUser: number,
  descr: string,
  authorize: string,
  users: string[],
  createdAt: string,
  updatedAt: string,
  purchase_types_id: string,
  coupon_types_id: string
  modalities_id: string,
  internal_coupons_id: string,
  prerequisites_id: string,
  totalUses: number,
  couponType: couponType,
  status: number,
  internalCoupon: internalCoupon
}

export interface couponType {
  id: string,
  name: string,
  key: string
}
export interface couponHistory {
  id: string,
  user: string,
  amount: number,
  createdAt: string,
  updatedAt: string,
  coupons_id: string,
  coupon: couponComplete
}

export interface internalCoupon {
  code: string,
  id: string,
  name: string,
}
