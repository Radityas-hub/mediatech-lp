import Button from "@/components/core/button"

export default function HomePage(){
    return (
        <div className="w-full flex flex-col justify-start items-start">

            {/* ==== hero section ===== */}
            <section className="w-full h-screen flex justify-center items-center bg-[#0C192B] bg-[url('../public/bgheader.png')] bg-cover bg-center">
                <div className="w-full h-screen max-w-6xl px-6 flex justify-center items-center">
                    <div className="flex flex-col justify-center items-start gap-4 text-[16px]">
                        <p className="italic opacity-[.6] text-white">Indonesian Digital Company</p>
                        <h1 className="font-bold text-6xl leading-[130%] text-white">Powered by Smart Tech</h1>
                        <p className=" text-[16px] opacity-[.6] text-white">Solusi digital terintegrasi untuk mendukung transformasi dan pertumbuhan bisnis Anda di era teknologi.</p>
                        <Button />
                    </div>
                    <div className="flex justify-end items-start">
                        <img src="/public/header-home.png" alt="" className="w-[80%]"/>
                    </div>
                </div>
            </section>
        </div>
    )
}