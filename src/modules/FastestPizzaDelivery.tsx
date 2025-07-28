import play from '../assets/images/play.jpg'
import pizza from '../assets/images/pizza.png'

export default function FastestPizzaDelivery()  {
    return (
        <div className={'mt-[121px] flex justify-between'}>
            <div className={'flex flex-col'}>
                <h1 className={'text-[69px] text-[#FFF] font-extrabold leading-[109%]'}>
                    The Fastest<br/> Pizza Delivery
                </h1>
                <p className={'text-[#A3A3A3] text-[20px] mt-[30px] font-normal'}>
                    We will deliver juicy pizza for your family in 30<br/> minutes, if the courier is late
                    - <span className={'text-[#fff]'}>pizza is free!</span>
                </p>
                <p className={'text-[#A3A3A3] text-[20px] mt-[23px]'}>Cooking process:</p>
                <img className={'w-full max-w-[272px] h-[193px] rounded-3xl mt-[12px]'} src={play} alt={play}/>
                <div className="flex items-center relative mt-[58px]">
                    <button className="bg-gradient-to-r from-[#FF5D29] to-[#FE9C1C] text-white w-[230px]
                     h-[62px] rounded-full font-medium text-[22px]"
                    >
                        To order
                    </button>
                    {/*<button className="text-[#FF5D29] border-[2px] border-[#FFA631] w-[232px] h-[62px] text-[19px]*/}
                    {/* rounded-full font-semibold absolute right-[120px] z-[-1]"*/}
                    {/*>*/}
                    {/*    Pizza-Menu*/}
                    {/*</button>*/}
                </div>
            </div>

            <div>
                <img className={'w-full max-w-[456px] h-[683px] rounded-4xl'} src={pizza} alt={pizza}/>
            </div>
        </div>
    );
};

