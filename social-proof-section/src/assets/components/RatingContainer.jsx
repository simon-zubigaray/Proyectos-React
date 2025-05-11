import { RatingCard } from "./RatingCard"

const ratings = [
    'Rated 5 Stars in Reviews',
    'Rated 5 Stars in Report Guru',
    'Rated 5 Stars in BestTech',
]

export const RatingContainer = () => {
  return (
    <div className="flex flex-col gap-4">
        {
            ratings.map(text => {
                return (
                    <RatingCard key={text} text={text} />
                )
            })
        }
    </div>
  )
}
