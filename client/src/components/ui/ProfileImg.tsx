import React from "react"

type ProfileImgPropsType = {
  src: string
  alt: string
  size: number
}

const ProfileImg = ({ src, alt = "img", size }: ProfileImgPropsType) => {
  return (
    <div
      className={`overflow-hidden rounded-full w-[${size}px] h-[${size}px] border border-gray-400 dark:border-gray-600`}
    >
      <img className="rounded-full" src={src || alt} alt={alt} />
    </div>
  )
}

export default ProfileImg
