function Button({render}) {
    return ( 
        <a className="btn" href="#Day">
            {render()}
        </a>
     );
}

export default Button;