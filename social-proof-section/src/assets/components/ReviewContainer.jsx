import { ReviewCard } from "./ReviewCard";
import ColtonImg from "../images/image-colton.jpg";
import IreneImg from "../images/image-irene.jpg";
import AnneImg from "../images/image-anne.jpg";

const reviews = [
  {
    id: 1,
    name: "Colton Smith",
    status: "Verified Buyer",
    review:
      "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!",
    imgUrl: ColtonImg
  },
  {
    id: 2,
    name: "Irene Roberts",
    status: "Verified Buyer",
    review:
      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.",
    imgUrl: IreneImg
  },
  {
    id: 3,
    name: "Anne Wallace",
    status: "Verified Buyer",
    review:
      "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!",
    imgUrl: AnneImg
  },
];

export const ReviewContainer = () => {
  return (
    <div className="flex flex-col gap-4">
      {reviews.map(({id, name, status, review, imgUrl}) => {
        return (
          <ReviewCard
            key={id}
            name={name}
            status={status}
            review={review}
            imgUrl={imgUrl}
          />
        );
      })}
    </div>
  );
};
