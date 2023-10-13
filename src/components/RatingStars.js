import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  const { rate, count } = rating;

  const stars = [];
  
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} data-testid="full-star"/>);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} data-testid="half-star"/>);
  }

  while (stars.length < 5) {
    stars.push(<FaRegStar key={stars.length} data-testid="empty-star"/>);
  }

  return (
    <div>
      {stars}
      <span data-testid="count">({count})</span>
    </div>
  );
};

export default RatingStars;