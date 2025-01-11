const Header = (props) => {
    return (
        <div>
            <div className="flex justify-center text-4xl font-bold">
                {props.title}
                </div>
            <div className='flex justify-center'>{props.subtitle}</div>
        </div>
    );
}

export default Header