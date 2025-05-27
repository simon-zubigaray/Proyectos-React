import UserImage from "../assets/images/image-avatar.webp";

export default function Info() {
  return (
    <div>
        <button className="bg-custom-Yellow font-bold py-1 w-20 rounded-md text-center mb-4 cursor-pointer hover:outline hover:outline-1 hover:outline-black">Learning</button>
        <p className="text-[13px] mb-4">Published 21 Dec 2023</p>
        <h3 className="text-xl font-bold hover:text-custom-Yellow cursor-pointer">HTML & CSS Foundations</h3>
        <p className="text-[13.9px] text-black/70 mt-3 mb-6">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <section className="flex items-center gap-2">
            <figure>
                <img className="h-8 w-8" src={UserImage} alt="" />
            </figure>
            <p className="font-bold">Greg Hooper</p>
        </section>
    </div>
  )
}
