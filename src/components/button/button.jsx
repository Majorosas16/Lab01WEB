import './button.css';

const Button = ({ title, titleColor, background, border, hoverBg, hoverColor }) => {
    return (
        <>
            <button className="button" style={{ color: titleColor, backgroundColor: background, border: border, '--hover-bg': hoverBg, '--hover-color': hoverColor }}>
                {title}
            </button>
        </>
    );
}

export default Button;
