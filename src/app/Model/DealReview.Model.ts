export class CustomReview{
    ID : string;
    UserID : string;
    DealID : string;
    FullName : string;
    Rating : number;
    ReviewText : string;
    ReviewDate : number;
    Image : string;
    TotalRating : number;
}

export class DealRecom{
    DealID : string;
    AverageRating : number;
    TotalReviews : number;
    TotalLikes : number;
}