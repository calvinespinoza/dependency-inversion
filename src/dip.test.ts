import { Ticket, Checkout } from './dip-after'
import { MockInvoiceService } from './mock'

let  checkout: Checkout;

beforeEach(() => {
  checkout = new Checkout(
    new MockInvoiceService()
  )
});

describe('Dependency Inversion Tests', () => {
    test('[AFTER] should generate mock invoice on ticket purchase', () => {
        var ticket = new Ticket("VIP Entrance", 200, ["Free drinks", "VIP Access"]);
        var invoice = checkout.purchaseTickets(2, "Calvin Espinoza", ticket);
        expect(invoice).toContain("Calvin Espinoza");
        expect(invoice).toContain("400");
        expect(invoice).toContain("Mock Invoice");
    });
});