import { ReactComponent as MlForkidsLogo } from '../../images/mlforkids-logo.svg';

interface LogoProps {
    title?: string;
    width?: number;
    height?: number;
    className?: string;
}

const Logo = (props: LogoProps) => {
    const {
        title = 'ML for Kids Logo',
        width = 48,
        height = 48,
        className = '',
        ...rest
    } = props;

    return <MlForkidsLogo
        title={ title }
        width={ width }
        height={ height }
        className={ className }
        { ...rest }  />;
}

export default Logo;
