

export class Cart{
    ID : string;
    DealID : string;
    OfferID : string;
    Qty : number;
    Total : number;
    CouponCode : string;
    PaymentType : number;
    UserID : string;
    Status : boolean;
}

export class ListCart{
    ID : string;
    DealID : string;
    OfferID : string;
    Qty : number;
    Total : number;
    CouponCode : string;
    Price : number;
    Discount : number;
    Price1 : number;
    Discount1 : number;
    Name : string;
    Text : string;
    Image : string;
}

export class UpdateCart{
    ID : string;
    Status : boolean;
    Qty : number;
}


