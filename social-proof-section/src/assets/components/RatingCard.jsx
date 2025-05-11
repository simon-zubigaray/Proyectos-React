import StarImg from '../images/icon-star.svg'

export const RatingCard = ({ text }) => {
  return (
    <div className='bg-light-grayish-magenta rounded-lh p-4'>
      <div className='flex gap-2 place-content-center mb-4'>
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
      </div>
      <p className='text-center text-[1.0625rem] font-bold'>{text}</p>
    </div>
  );
};
