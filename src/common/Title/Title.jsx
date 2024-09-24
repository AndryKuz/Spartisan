import style from './Title.module.scss';

const Title = ({titleStart, titleEnd}) => {
    return (
        <div className={style.main}>
            <div className={style.title}>
                <h3>{titleStart}</h3>
                <h4>{titleEnd}</h4>
            </div>
            <div>
                <span></span>
            </div>
        </div>
    );
};

export default Title;
