import StarImg from '../images/icon-star.svg'

export const RatingCard = ({ text, className }) => {
  return (
    <div className={`bg-light-grayish-magenta rounded-lh p-4 xl:flex xl:w-[445px] xl:justify-center xl:gap-8 xl:items-center ${className}`}>
      <div className='flex gap-2 place-content-center mb-4 xl:mb-0'>
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
        <img className='size-4' src={StarImg} alt="Star" />
      </div>
      <p className='text-very-dark-magenta text-center text-[1.0625rem] font-bold'>{text}</p>
    </div>
  );
};
