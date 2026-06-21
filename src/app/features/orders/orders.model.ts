export type OrderStatus = 'in-bearbeitung' | 'versandt' | 'geliefert';

export interface Order {
  orderNumber: string;
  customer: string;
  status: OrderStatus;
  date: string;
}

export const ORDER_STATUS_CONFIG: Record<
  OrderStatus,
  { label: string; variant: 'info' | 'success' | 'warning' }
> = {
  'in-bearbeitung': { label: 'In Bearbeitung', variant: 'warning' },
  versandt: { label: 'Versandt', variant: 'info' },
  geliefert: { label: 'Geliefert', variant: 'success' },
};
