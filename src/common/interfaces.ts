export interface Column {
  accessor?: string;
  label?: string;
  sortable?: boolean;
  renderCell?: any;
}

export interface Customer {
  firstName: string;
  lastName?: string;
}
export interface Reservation {
  id: number;
  businessDate?: string;
  status: string;
  shift: string;
  start?: string;
  end?: string;
  quantity?: number;
  customer: Customer;
  area: string;
  guestNotes: string;
}

export interface QueryParams {
  status?: string;
  shift?: string;
  area?: string;
  businessDate?: string;
}
