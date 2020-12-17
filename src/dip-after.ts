class Checkout {
    private invoiceService: IInvoiceService;

    constructor(invoiceSevice: IInvoiceService) {
        this.invoiceService = invoiceSevice;
    }

    public purchaseTickets(quantity: number, clientName: string, ticket: Ticket): string {
        var cost = quantity * ticket.price;
        var invoice = this.invoiceService.generateInvoice(clientName, cost, ticket.name, new Date());
        return invoice
    }
}

interface IInvoiceService {
    generateInvoice(clientName: string, cost: number, ticketName: string, date: Date): string;
}

class InvoiceService implements IInvoiceService{
    public generateInvoice(clientName: string, cost: number, ticketName: string, date: Date): string {
		return `Name: ${clientName}.
            Item: ${ticketName}
			Cost: ${cost}.
			Date: ${date}.`;
	}
}


class Ticket {
    public name: string;
    public price: number;
    public benefits: string[];

    constructor(name: string, price: number, benefits: string[]) {
        this.name = name;
        this.price = price;
        this.benefits = benefits;
    }

    public getTicketInfo(): string {
        return `The ticket ${this.name} has a price of ${this.price}`
    }
}

export { Ticket, Checkout, IInvoiceService }