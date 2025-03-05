interface propType {
    text : string,
    subtext : string
}

const Button = ({text, subtext} : propType) => {
  return (
    <div className="">
        <div className="px-5 py-2 rounded-xl bg-[#5d9948] font-mont gap-3 grid grid-cols-6 items-center">
            <div className="w-[70px] col-span-2">
                <img src="https://www.chess.com/bundles/web/images/color-icons/playwhite.cea685ba.svg"/>
            </div>
            <div className="col-span-4">
                <div className="text-white text-2xl font-bold">
                    {text}
                </div>
                <div className="text-white text-[10px]">
                    {subtext}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Button