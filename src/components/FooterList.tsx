interface FooterList {
    title: string;
    items: string[];
}

const FooterList = ({title, items}: FooterList) => {
    return (
        <div className={'flex flex-col gap-[15px]'}>
            <p className={'text-[#A3A3A3] text-[20px]'}>{title}</p>
            <ul className={'flex flex-col gap-[12px]'}>
                {items.map((item, index) => (
                    <li className={'text-[#515151], text-[17px]'} key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterList;
