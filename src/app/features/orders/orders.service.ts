import { Service } from '@angular/core';
import { Order } from './orders.model';

const MOCK_ORDERS: Order[] = [
  {
    orderNumber: 'A-1042',
    customer: 'Schmidt Logistik GmbH',
    status: 'in-bearbeitung',
    date: '2026-06-18',
  },
  { orderNumber: 'A-1041', customer: 'Müller Spedition', status: 'versandt', date: '2026-06-17' },
  {
    orderNumber: 'A-1040',
    customer: 'Fischer Großhandel',
    status: 'geliefert',
    date: '2026-06-15',
  },
  {
    orderNumber: 'A-1039',
    customer: 'Weber Industrietechnik',
    status: 'versandt',
    date: '2026-06-14',
  },
  {
    orderNumber: 'A-1038',
    customer: 'Becker Maschinenbau',
    status: 'geliefert',
    date: '2026-06-12',
  },
];

@Service()
export class OrdersService {
  getOrders(): Order[] {
    return MOCK_ORDERS;
  }
}
