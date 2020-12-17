import { IInvoiceService } from './dip-after'

class MockInvoiceService implements IInvoiceService {
    generateInvoice(clientName: string, cost: number, ticketName: string, date: Date): string {
        return `Mock Invoice
            Name: ${clientName}.
            Item: ${ticketName}
			Cost: ${cost}.
			Date: ${date}.`;
    }
}

export { MockInvoiceService }